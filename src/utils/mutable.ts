// NOTE: `-readonly`는 프로퍼티는 보존하되 readonly 옵션을 제거
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};
