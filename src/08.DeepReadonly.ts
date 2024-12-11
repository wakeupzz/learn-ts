// Implement a generic DeepReadonly<T> which make every parameter of an object - and its sub-objects recursively - readonly.
// You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on do not need to be taken into consideration. However, you can still challenge yourself by covering as many different cases as possible.

type DeepReadonly<T> = T extends object ? DeepReadonlyObject<T> : T;
type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

// For example:
type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
type TodoX = Todo['x']
