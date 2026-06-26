declare let numbers: number[];
declare const nomes: string[];
declare const numbers2: Array<number>;
declare const nomes2: Array<string>;
declare let valor: any;
declare function soma(a: number, b: number): void;
declare function somaRetorno(a: number, b: number): number;
declare function passCoordinates(coord: {
    x: number;
    y: number;
}): void;
declare const pessoaObj: {
    name: string;
    surname: string;
    age: number;
};
declare function showNumbers(a: number, b: number, c?: number): void;
declare const pessoaObj2: {
    name: string;
    surname: string;
    age?: number;
};
declare function showBalance(balance: string | number): void;
declare function nameOrAge(value: number | string): void;
declare const arr1: Array<number | string | boolean>;
type ID = string | number;
declare function showId(id: ID): void;
interface Point {
    x: number;
    y: number;
    z?: number;
}
declare function showCoords(obj: Point): void;
declare const point: Point;
declare const point2: Point;
interface PersonInterface {
    name: string;
}
interface PersonInterface {
    age: number;
}
declare const somePerson: PersonInterface;
type PersonType = {
    name: string;
};
declare let test: "testando";
declare function showDirection(direction: "left" | "right" | "center"): void;
declare const p: HTMLElement | null;
declare const p2: HTMLElement | null;
declare let n: bigint;
declare let symbolA: symbol;
declare let symbolB: symbol;
declare let symbolObj: {
    [key: symbol]: string;
};
//# sourceMappingURL=index.d.ts.map