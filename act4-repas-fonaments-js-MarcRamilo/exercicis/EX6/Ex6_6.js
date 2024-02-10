// Fes un cop d'ull al segúent codi. Què passa quan l'executes?
// const myObject = {
//   name: 'John',
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   sayHelloWithTimeout: function () {
//     setTimeout(function () => {
//       console.log(`Hello, my name is ${this.name}`);
//     }, 1000);
//   },
// };
// myObject.sayHello();
// myObject.sayHelloWithTimeout();
// Canvia ara el mètode "sayHello" i la funció "setTimeout" per Arrow Functions i torna a executar el codi. Què passa ara? Intent esbrinar per què?
// Com expliquem el que succeeix en cada cas?
const myObject = {
  name: 'John',
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
  sayHelloWithTimeout: function () {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`);
    }, 1000);
  },
};
myObject.sayHello();
myObject.sayHelloWithTimeout();
// En el primer cas, el mètode sayHello() funciona correctament, ja que this fa referència a l'objecte myObject.
// En el segon cas, el mètode sayHelloWithTimeout() no funciona correctament, ja que this fa referència a l'objecte window.
// Això passa perquè la funció que s'executa dins de setTimeout() no és una funció mètode, sinó una funció anònima.
// Per tant, this fa referència a l'objecte window.
// Per solucionar-ho, podem fer servir una arrow function, ja que aquestes no tenen el seu propi this.