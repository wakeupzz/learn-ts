// Implement the built-in Omit<T, K> generic without using it.
// Constructs a type by picking all properties from T and then removing K

type MyExclude<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};

// For example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

const todo: TodoPreview = {
  completed: false,
};
