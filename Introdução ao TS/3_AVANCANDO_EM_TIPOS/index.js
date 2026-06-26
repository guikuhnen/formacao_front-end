"use strict";
// 1 - arrays
let numbers = [1, 2, 3]; //, "teste"]; // Error: Type 'string' is not assignable to type 'number'.
numbers.push(5); // OK
console.log(numbers); // [1, 2, 3, 5]
const nomes = ["João", "Maria", "José"];
nomes.push("Ana"); // OK
console.log(nomes); // ["João", "Maria", "José", "Ana"]
console.log(typeof numbers); // object
// 2 - Outra sintaxe para arrays
// interface
const numbers2 = [1, 2, 3];
numbers2.push(4);
console.log(numbers2); // [1, 2, 3, 4]
// interface
const nomes2 = ["João", "Maria", "José"];
nomes2.push("Gabriel");
console.log(nomes2[1]); // "Maria"
console.log(typeof numbers2); // object
// 3 - Any
let valor = 5;
console.log(typeof valor); // number
valor = "teste"; // OK
console.log(typeof valor); // string
valor = true;
console.log(valor); // true
console.log(typeof valor); // boolean
// 4 - Parametros tipados
function soma(a, b) {
    console.log(somaRetorno(a, b));
}
// 5 - Retorno de função
function somaRetorno(a, b) {
    return a + b;
}
// 6 - Função anônima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary)); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
    console.log(sallary.toFixed(2)); // 1000.00
}, 2000);
// 7 - Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
// Precisa ter correspondecia do nome e do valor
passCoordinates({ x: 10, y: 20 });
const pessoaObj = {
    name: "Guilherme",
    surname: "Kuhnen",
    age: 30,
};
// 8 - Propriedades opcionais
// O primeiro parâmetro é obrigatório, a partir do segundo pode ser opcional
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c !== undefined) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2);
showNumbers(1, 2, 3);
const pessoaObj2 = {
    name: "Lucas",
    surname: "Silva",
};
// 9 - Union Type
function showBalance(balance) {
    console.log("O saldo da conta é R$ " + balance);
}
showBalance(100);
showBalance("500");
function nameOrAge(value) {
    if (typeof value === "number") {
        console.log(`Sua idade é ${value} anos.`);
    }
    else {
        console.log(`Seu nome é ${value}.`);
    }
}
nameOrAge(25);
nameOrAge("Guilherme");
const arr1 = [1, "teste", true];
console.log(arr1); // [1, "teste", true]
function showId(id) {
    console.log(`O ID é: ${id}`);
    console.log(typeof id); // number ou string
}
showId(1);
showId("200");
// Use a interface para tipar o objeto
function showCoords(obj) {
    console.log("X: " + obj.x);
    console.log("Y: " + obj.y);
    if (obj.z !== undefined) {
        console.log("Z: " + obj.z);
    }
}
const point = { x: 10, y: 20 };
showCoords(point); // Z não é exibido
console.log(typeof point); // object
const point2 = { x: 5, y: 15, z: 25 };
showCoords(point2); // Z é exibido
const somePerson = { name: "Guilherme", age: 30 };
console.log(somePerson); // { name: "Guilherme", age: 30 }
// Não é possível implementar novas propriedades para o type PersonType, pois ele não pode ser reaberto.
//type PersonType = {
//  age: number;
//};
// 13 - Literal Types
// dois pontos (:) são usados para definir o tipo literal, enquanto o sinal de igual (=) é usado para atribuir um valor a uma variável.
let test;
test = "testando"; // válido
// test = "outro"; // Error: Type '"outro"' is not assignable to type '"testando"'.
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left"); // válido
// showDirection("up"); // Error: Argument of type '"up"' is not assignable to parameter of type '"left" | "right" | "center"'.
// 14 - Non-null Assertion Operator
// O operador de asserção de não nulo (!) é usado para informar ao compilador que uma expressão não é nula ou indefinida, mesmo que o tipo da expressão permita esses valores.
const p = document.getElementById("some-p");
//console.log(p.innerText); // Error: Object is possibly 'null'. (Se o elemento não existir, isso causará um erro em tempo de execução (console).)
// TypeScript obriga a colocar um operador de asserção, ! se tiver certeza que o elemento existe, ou ? se não tiver certeza.
console.log(p.innerText); // OK, mas se p for null, isso causará um erro em tempo de execução (console).
console.log(p?.innerText); // OK, se p for null, isso retornará undefined em vez de causar um erro.
const p2 = document.getElementById("some-p2");
//console.log(p2!.innerText); // Error
console.log(p2?.innerText); // Undefined
// 15 - BigInt
// Necessário adicionar o sufixo "n" ao final do número para indicar que é um BigInt.
// Necessário atualizar o target para ESNext ou ES2020 no tsconfig.json para que o BigInt seja suportado.
let n;
n = 1000n;
console.log(n); // 1000n
console.log(n + 500n); // 1500n
console.log(n.toString()); // "1000"
console.log(typeof n); // bigint
// 16 - Symbol
// Cria uma referência única para um valor, mesmo que o valor seja o mesmo.
// Também só existe após o ES2020
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB); // false
// Verifica também se são do mesmo tipo
console.log(symbolA === symbolB); // false
console.log(typeof symbolA); // symbol
let symbolObj = {};
symbolObj[symbolA] = "value A";
console.log(symbolObj[symbolA]); // "value A"
//# sourceMappingURL=index.js.map