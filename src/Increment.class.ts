import Anybase from 'any-base';
import merge from 'lodash.merge';
import throttle from 'lodash.throttle';

import { IncrementOptionsDefault } from './defaults/IncrementOptions.default';

import type { IncrementOptions } from './types/IncrementOptions.type';

const place_ids_used = new Set<number>();

type Store = {
  set: (key: string, value: unknown) => Promise<unknown>;
  get: <Type>(key: string) => Promise<Type | undefined>;
};

export class Increment {
  private readonly options: IncrementOptions;
  private readonly store: Store;
  private sequence: number | null = null;
  private readonly anybase_encode: (anybase: string) => string;

  public constructor(options: IncrementOptions) {
    this.options = merge({}, IncrementOptionsDefault, options);

    this.options.place_id = this.options.place_id ?? 0;

    if (place_ids_used.has(this.options.place_id)) throw new Error(`Place ID ${String(this.options.place_id)} already in use`);

    place_ids_used.add(this.options.place_id);

    this.store = options.store as Store;

    this.anybase_encode = Anybase(Anybase.DEC, this.options.charset ?? '');

    void this.initial();
  }

  private async initial() {
    this.sequence = (await this.store.get<number>(`increment_sequence--place_id:${String(this.options.place_id)}`)) ?? (this.options.initial !== undefined ? this.options.initial - 1 : 0);
  }

  private readonly syncSequence = throttle(
    () => {
      if (this.sequence === null) return;

      void this.store.set(`increment_sequence--place_id:${String(this.options.place_id)}`, this.sequence);
    },
    1000,
    { leading: true, trailing: true }
  );

  public generate() {
    return new Promise<string>((resolve) => {
      const wait = () => {
        if (this.sequence === null) return setTimeout(() => wait(), 1000);

        this.sequence++;

        this.syncSequence();

        let id = String(this.sequence);

        if (this.options.format === 'symbolic') id = this.anybase_encode(id);

        resolve(id);
      };

      wait();
    });
  }
}
