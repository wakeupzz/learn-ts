type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2)
    ? true
    : false;

interface IA {
  name: string;
};

interface IB {
  age: number;
};

interface IC {
  readonly name: string;
};

interface ID {
  name: string;
};

interface IE {
  readonly name: string;
};

interface IF {
  readonly name: string;
};

type EA = Equal<IA, IB>
type EB = Equal<IC, ID>
type EC = Equal<IE, IF>
