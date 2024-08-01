export type Action<T, R> = {
  type: T;
  payload: R;
};
