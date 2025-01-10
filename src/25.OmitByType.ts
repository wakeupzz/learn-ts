// From T, pick a set of properties whose type are not assignable to U.

type OmitByType<U, T> = {
  [K in keyof U as (U[K] extends T ? never : K)]: U[K];
};

// For Example
type OmitBoolean = OmitByType<{
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}, boolean> // { name: string; count: number }
