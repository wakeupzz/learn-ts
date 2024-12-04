// Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

type GetReadonlyKeys<T> = {
  [K in keyof T]: Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never;
}[keyof T];

// For example
interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
};

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"
