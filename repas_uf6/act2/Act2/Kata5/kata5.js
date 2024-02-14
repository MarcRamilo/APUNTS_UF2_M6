function counter() {
  let count = 0; // Variable local per al comptador

  return function increment() { // Retornem la funció increment
    count++; // Incrementem el comptador en cada crida
    console.log(count); // Mostrem el valor del comptador per consola
  }

   
}

// Creem una instància de counter
const c = counter();
c(); // logs 1
c(); // logs 2
c(); // logs 3
c(); // logs 4