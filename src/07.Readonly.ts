// Implement the built-in Readonly<T> generic without using it.
// Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.

type MyReadonly<T> = { readonly [K in keyof T]: T[K] };

// For example:
interface Todo {
  title: string
  description: string
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar"
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property


// ------我是分割线------


// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

type MyReadonly2<T, K extends keyof T> = MyReadonly<Pick<T, K>> & Omit<T, K>;

// For example
interface Todo2 {
  title: string
  description: string
  completed: boolean
}

const todo2: MyReadonly2<Todo2, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo2.title = "Hello" // Error: cannot reassign a readonly property
todo2.description = "barFoo" // Error: cannot reassign a readonly property
todo2.completed = true // OK
