const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
}

type A = MyReturnType<typeof fn>;

type MyReturnType<T> = T extends (...args: any) => infer R ? R : any;
