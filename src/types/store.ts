export type Store = {
  set: (key: string, value: unknown) => Promise<unknown>;
  get: <Type>(key: string) => Promise<Type | undefined>;
};
