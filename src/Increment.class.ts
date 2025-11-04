import Anybase from 'any-base';
import merge from 'lodash.merge';

import { IncrementOptionsDefault } from './defaults/IncrementOptions.default';

import type { IncrementOptions } from './types/IncrementOptions.type';

const timeouts = new Map<string, NodeJS.Timeout>();

type Store = {
  set: (key: string, value: unknown) => Promise<unknown>;
  get: <Type>(key: string) => Promise<Type | undefined>;
};

export class Increment {
  private readonly options: IncrementOptions;
  private readonly store: Store;
  private sequence: number | null = null;
  private readonly anybase_encode: (anybase: string) => string;

  public constructor(options: IncrementOptions = IncrementOptionsDefault) {
    this.options = merge({}, IncrementOptionsDefault, options);

    this.options.place_id = this.options.place_id ?? 0;
    this.store = options.store as Store;

    this.anybase_encode = Anybase(Anybase.DEC, this.options.charset ?? '');

    void this.syncSequence();
  }

  private async syncSequence() {
    this.sequence = (await this.store.get<number>(`increment_sequence--place_id:${this.options.place_id?.toString() ?? ''}`)) ?? this.options.initial ?? 0;
  }

  public generate() {
    return new Promise<string>((resolve) => {
      const wait = () => {
        if (this.sequence === null) return setTimeout(() => wait(), 1000);

        this.sequence++;

        if (!timeouts.get('SYNC_SEQUENCE')) {
          timeouts.set(
            `SYNC_SEQUENCE`,
            setTimeout(() => {
              void (async () => {
                await this.store.set(`increment_sequence--place_id:${this.options.place_id?.toString() ?? ''}`, this.sequence);

                timeouts.delete('SYNC_SEQUENCE');
              })();
            }, 1000)
          );
        }

        let id = this.sequence.toString();

        if (this.options.format === 'symbolic') id = this.anybase_encode(id);

        resolve(id);
      };

      wait();
    });
  }
}
