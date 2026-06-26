// 1 - arrays
let numbers: number[] = [1, 2, 3]; //, "teste"]; // Error: Type 'string' is not assignable to type 'number'.
numbers.push(5); // OK
console.log(numbers); // [1, 2, 3, 5]

const nomes: string[] = ["João", "Maria", "José"];
nomes.push("Ana"); // OK
console.log(nomes); // ["João", "Maria", "José", "Ana"]

console.log(typeof numbers); // object

// 2 - Outra sintaxe para arrays
// interface
const numbers2: Array<number> = [1, 2, 3];
numbers2.push(4);
console.log(numbers2); // [1, 2, 3, 4]

// interface
const nomes2: Array<string> = ["João", "Maria", "José"];
nomes2.push("Gabriel");
console.log(nomes2[1]); // "Maria"

console.log(typeof numbers2); // object

// 3 - Any
let valor: any = 5;
console.log(typeof valor); // number
valor = "teste"; // OK
console.log(typeof valor); // string
valor = true;
console.log(valor); // true
console.log(typeof valor); // boolean

// 4 - Parametros tipados
function soma(a: number, b: number) {
  console.log(somaRetorno(a, b));
}

// 5 - Retorno de função
function somaRetorno(a: number, b: number): number {
  return a + b;
}

// 6 - Função anônima
setTimeout(function () {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
  console.log(sallary.toFixed(2)); // 1000.00
}, 2000);

// 7 - Tipos de objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

// Precisa ter correspondecia do nome e do valor
passCoordinates({ x: 10, y: 20 });

const pessoaObj: {
  name: string;
  surname: string;
  age: number;
} = {
  name: "Guilherme",
  surname: "Kuhnen",
  age: 30,
};

// 8 - Propriedades opcionais
// O primeiro parâmetro é obrigatório, a partir do segundo pode ser opcional
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c !== undefined) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2);
showNumbers(1, 2, 3);

const pessoaObj2: {
  name: string;
  surname: string;
  age?: number;
} = {
  name: "Lucas",
  surname: "Silva",
};

// 9 - Union Type
function showBalance(balance: string | number) {
  console.log("O saldo da conta é R$ " + balance);
}

showBalance(100);
showBalance("500");

function nameOrAge(value: number | string) {
  if (typeof value === "number") {
    console.log(`Sua idade é ${value} anos.`);
  } else {
    console.log(`Seu nome é ${value}.`);
  }
}

nameOrAge(25);
nameOrAge("Guilherme");

const arr1: Array<number | string | boolean> = [1, "teste", true];
console.log(arr1); // [1, "teste", true]

// 10 - Type alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`);
  console.log(typeof id); // number ou string
}

showId(1);
showId("200");

// 11 - Interfaces
// É um objeto como no c#, mas com a diferença que não é instanciada, apenas tipada.
interface Point {
  x: number;
  y: number;
  z?: number; // Propriedade opcional
}

// Use a interface para tipar o objeto
function showCoords(obj: Point) {
  console.log("X: " + obj.x);
  console.log("Y: " + obj.y);
  if (obj.z !== undefined) {
    console.log("Z: " + obj.z);
  }
}

const point: Point = { x: 10, y: 20 };
showCoords(point); // Z não é exibido
console.log(typeof point); // object

const point2: Point = { x: 5, y: 15, z: 25 };
showCoords(point2); // Z é exibido

// 12 - Interfaces x Type Aliases
// Type Aliases não podem ser reabertos para adicionar novas propriedades, enquanto as interfaces podem.
interface PersonInterface {
  name: string;
}

// Implementando novas propriedades para a interface PersonInterface
interface PersonInterface {
  age: number;
}

const somePerson: PersonInterface = { name: "Guilherme", age: 30 };
console.log(somePerson); // { name: "Guilherme", age: 30 }

type PersonType = {
  name: string;
};

// Não é possível implementar novas propriedades para o type PersonType, pois ele não pode ser reaberto.
//type PersonType = {
//  age: number;
//};

// 13 - Literal Types
// dois pontos (:) são usados para definir o tipo literal, enquanto o sinal de igual (=) é usado para atribuir um valor a uma variável.
let test: "testando";
test = "testando"; // válido
// test = "outro"; // Error: Type '"outro"' is not assignable to type '"testando"'.

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`);
}

showDirection("left"); // válido
// showDirection("up"); // Error: Argument of type '"up"' is not assignable to parameter of type '"left" | "right" | "center"'.

// 14 - Non-null Assertion Operator
// O operador de asserção de não nulo (!) é usado para informar ao compilador que uma expressão não é nula ou indefinida, mesmo que o tipo da expressão permita esses valores.
const p = document.getElementById("some-p");
//console.log(p.innerText); // Error: Object is possibly 'null'. (Se o elemento não existir, isso causará um erro em tempo de execução (console).)

// TypeScript obriga a colocar um operador de asserção, ! se tiver certeza que o elemento existe, ou ? se não tiver certeza.

console.log(p!.innerText); // OK, mas se p for null, isso causará um erro em tempo de execução (console).
console.log(p?.innerText); // OK, se p for null, isso retornará undefined em vez de causar um erro.

const p2 = document.getElementById("some-p2");
//console.log(p2!.innerText); // Error
console.log(p2?.innerText); // Undefined

// 15 - BigInt
// Necessário adicionar o sufixo "n" ao final do número para indicar que é um BigInt.
// Necessário atualizar o target para ESNext ou ES2020 no tsconfig.json para que o BigInt seja suportado.
let n: bigint;
n = 1000n;
console.log(n); // 1000n
console.log(n + 500n); // 1500n
console.log(n.toString()); // "1000"
console.log(typeof n); // bigint

// 16 - Symbol
// Cria uma referência única para um valor, mesmo que o valor seja o mesmo.
// Também só existe após o ES2020
let symbolA: symbol = Symbol("a");
let symbolB: symbol = Symbol("a");

console.log(symbolA == symbolB); // false
// Verifica também se são do mesmo tipo
console.log(symbolA === symbolB); // false
console.log(typeof symbolA); // symbol

let symbolObj: { [key: symbol]: string } = {};
symbolObj[symbolA] = "value A";
console.log(symbolObj[symbolA]); // "value A"
