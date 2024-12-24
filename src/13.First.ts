// Implement a generic First<T> that takes an Array T and returns its first element's type.

type First<T> = T extends [infer F, ...infer R] ? F : never;
// 这个也可以
// type First<T> = T extends any[] ? T[0] : never;

// For example:
type farr1 = ['a', 'b', 'c']
type farr2 = [3, 2, 1]

type head1 = First<farr1> // expected to be 'a'
type head2 = First<farr2> // expected to be 3
