// Implement a generic Last<T> that takes an Array T and returns its last element.

type Last<T> = T extends [...infer R, infer L] ? L : never;

// For example
type larr1 = ['a', 'b', 'c']
type larr2 = [3, 2, 1]

type tail1 = Last<larr1> // expected to be 'c'
type tail2 = Last<larr2> // expected to be 1
