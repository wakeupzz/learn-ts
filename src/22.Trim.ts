// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// type TrimLeft<T extends string> = T extends `${infer F}${infer R}` ? F extends ' ' ? TrimLeft<R> : T : T;
type TrimLeft<T extends string> = T extends `${' '}${infer R}` ? TrimLeft<R> : T;
type TrimRight<T extends string> = T extends `${infer R}${' '}` ? TrimRight<R> : T;

// For example
type trimedL = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
type trimedR = TrimRight<'  Hello World  '> // expected to be 'Hello World  '



// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

type Trim<T extends string> = TrimRight<TrimLeft<T>>;

// For example
type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
