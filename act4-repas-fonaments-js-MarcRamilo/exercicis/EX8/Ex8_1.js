// Exercici 8: Rest i operador Spread
// Existeixen dos operadors que ens poden ajudar a treballar amb arrays i objectes. L'operador Rest i l'operador Spread.
// L'operador**"Spread" o de propagació (...)** és una característica de JavaScript que permet expandir una expressió en lloc on es requereixen múltiples arguments o elements. Això pot ser útil per passar arguments a una funció, crear noves arrays o objectes, o combinar múltiples arrays o objectes.
// Exemple 1: Passar arguments a una funció
// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// const result = sum(...numbers);
// console.log(result); // Output: 6

// Solució:
//Operadors spread són operadors que ens permeten expandir una expressió en lloc on es requereixen múltiples arguments o elements.
//Operadord Rest són operadors que ens permeten representar un nombre indefinit de paràmetres com un array.
// Exemple 1: Passar arguments a una funció
// 1. Escriu una funció a JS faci el mateix que això sense fer ús de concat:
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3);