// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.

type RequiredKeys<T> = keyof {
  [K in keyof T as (
    { [P in K]: T[K] } extends { [U in K]-?: T[K] } ? K : never
  )]: T[K];
};

// For example
type Result = RequiredKeys<{ foo: number; bar?: string }>; // expected to be “foo”



// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

type MyCapitalize<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T;

// For example
type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'
