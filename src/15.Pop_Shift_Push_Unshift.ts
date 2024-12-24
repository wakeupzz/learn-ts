// Implement a generic Pop<T> that takes an Array T and returns an Array without it's last element.

type Pop<T> = T extends [...infer R, infer D] ? R : never;
type Shift<T> = T extends [infer D, ...infer R] ? R : never;

type Push<T, V> = T extends [...infer R] ? [...R, V] : never;
type Unshift<T, V> = T extends [...infer R] ? [V, ...R] : never;

// For example
type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
type re2 = Pop<arr2> // expected to be [3, 2]

type re3 = Push<arr1, 'e'> // expected to be ['a', 'b', 'c', 'd', 'e']
type re4 = Push<arr2, 0> // expected to be [3, 2, 1, 0]

type re5 = Shift<arr1> // expected to be ['b', 'c', 'd]
type re6 = Shift<arr2> // expected to be [2, 1]

type re7 = Unshift<arr1, 'z'> // expected to be ['z', 'a', 'b', 'c', 'd']
type re8 = Unshift<arr2, 4> // expected to be [4, 3, 2, 1]

// Extra: Similarly, can you implement Shift, Push and Unshift as well?
