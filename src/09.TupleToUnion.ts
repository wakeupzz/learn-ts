// Implement a generic TupleToUnion<T> which covers the values of a tuple to its values union.

type TupleToUnion<T> = T extends (infer R)[] ? T[number] : T;

// For example
type Arr = ['1', '2', '3']
type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
