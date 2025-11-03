export type IncrementOptions = {
  format?: 'numeric' | 'symbolic';
  initial?: number;
  charset?: string;
  place_id?: number;

  store: {
    set: (key: string, value: unknown) => unknown;
    get: (key: string) => unknown;
  };
};
