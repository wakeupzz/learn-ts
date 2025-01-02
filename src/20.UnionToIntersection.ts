// Implement the advanced util type UnionToIntersection<U>

type Union2Intersection<U> = (
  [U] extends [U] ? (arg: U) => void : never
) extends (arg: infer T) => void ? T : never;

// For example
type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
