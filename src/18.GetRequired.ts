// Implement the advanced util type GetRequired<T>, which remains all the required fields

type GetRequired<T> = {
  [P in keyof T as (
    { [K in P]: T[P] } extends { [K in P]-?: T[P] } ? P : never
  )]: T[P];
};

// For example
type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
