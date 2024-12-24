// TypeScript 4.0 is recommended in this challenge
// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

type Curried<T> = T extends (...arg: infer Params) => infer Ret
  ? (Params extends [infer A, ...infer Rest]
    ? (arg: A) => Curried<(...arg: Rest) => Ret>
    : Ret
  ) : never

declare function Currying<T>(fn: T): Curried<T>

// For example:
const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)
const five = curriedAdd(2)(3)

// The function passed to Currying may have multiple arguments, you need to correctly type it.
// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
