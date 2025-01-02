// Implement Replace<S, From, To> which replace the string From with To once in the given string S

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : (
  S extends `${infer F}${From}${infer R}` ? `${F}${To}${R}` : S
);

// For example
type replacedOnce = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'


// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = (
  Replace<S, From, To> extends `${infer F}${From}${infer R}`
    ? ReplaceAll<`${F}${To}${R}`, From, To>
    : Replace<S, From, To>
);

// For example
type replacedAll = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
