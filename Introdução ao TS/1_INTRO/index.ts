const firstName = "Guilherme";
const lastName: string = "Kuhnen";
const age = 30;

const x = true;

//function greeting(name: any): void {
function greeting2(name: string): void {
  console.log(`Olá, ${name}!`);
}

greeting2(firstName);
greeting2(lastName);
// greeting2(age);
// greeting2(x);
