// 1 - Number
// Type annotation
let x: number = 10;
// Type inference
let y = 10;

console.log(x);
console.log(typeof x);

var z: number = 15.534634;
console.log(z);
console.log(typeof z);
console.log(z.toPrecision(3)); // Arredonda o número para 3 casas decimais

//x = "teste"; // Erro: Type 'string' is not assignable to type 'number'.

// 2 - String
const firstName: string = "Guilherme";
console.log(firstName.toUpperCase());

//firstName = 10; // Erro: Cannot assign to 'firstName' because it is a constant.

let fullName: string;

const lastName: string = "Kuhnen";

fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

// 3 - Boolean
let isOpen: boolean = true;
console.log(isOpen);
console.log(typeof isOpen);

//isOpen = 1; // Erro: Type 'number' is not assignable to type 'boolean'.

// 4 - Any
let anyValue: any = "Hello";
console.log(anyValue);
console.log(typeof anyValue);
anyValue = 42;
console.log(anyValue);
console.log(typeof anyValue);
anyValue = true;
console.log(anyValue);
console.log(typeof anyValue);

// Arquivo de config
// tsc --init

// Compilação automatica
// tsc --w

console.log("Hello World 2");
