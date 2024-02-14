// Métodos en JavaScript:
// Arrays:
// javascript
// Copy code
// Método forEach
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));

// Método map
const duplicados = numeros.map(numero => numero * 2);

// Método filter
const pares = numeros.filter(numero => numero % 2 === 0);
// Promesas:
// javascript
// Copy code
// Creación de una promesa
const miPromesa = new Promise((resolve, reject) => {
  const exito = true;

  if (exito) {
    resolve('Operación exitosa');
  } else {
    reject('Operación fallida');
  }
});

// Manejo de promesas con then y catch
miPromesa
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
// Filtrar Datos:
// javascript
// Copy code
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 30 },
  { nombre: 'Carlos', edad: 22 },
];

// Filtrar personas mayores de 25 años
const mayoresDe25 = personas.filter(persona => persona.edad > 25);
console.log(mayoresDe25);
// Evolución de Callbacks a Async/Await:
// javascript
// Copy code
// Callbacks
function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = 'Datos obtenidos';
    callback(resultado);
  }, 2000);
}

operacionAsincrona(resultado => {
  console.log('Callback:', resultado);
});

// Promesas
function operacionAsincronaPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = 'Datos obtenidos';
      resolve(resultado);
    }, 2000);
  });
}

operacionAsincronaPromesa()
  .then(resultado => console.log('Promesa:', resultado))
  .catch(error => console.error('Error:', error));

// Async/Await
async function operacionAsincronaAsyncAwait() {
  try {
    const resultado = await operacionAsincronaPromesa();
    console.log('Async/Await:', resultado);
  } catch (error) {
    console.error('Error:', error);
  }
}

operacionAsincronaAsyncAwait();


function operacionAsincrona() {
  return new Promise((resolve, reject) => {
    // Simulando una operación asíncrona que puede resolver o rechazar la promesa
    setTimeout(() => {
      const exito = true; // O false para simular un error
      if (exito) {
        resolve('Operación exitosa');
      } else {
        reject('Operación fallida');
      }
    }, 2000);
  });
}

// Uso de .then() y .catch()
operacionAsincrona()
  .then(resultado => console.log('Resultado:', resultado))
  .catch(error => console.error('Error:', error));
// Para convertir esto a una función que devuelve una promesa, ya tenemos una función operacionAsincrona() que retorna una promesa. Podemos usarla directamente.

// Convertir a una Función que Utiliza Async/Await:
// Ahora, convertiremos este mismo código para que utilice async/await:

// javascript
// Copy code
async function operacionConAsyncAwait() {
  try {
    const resultado = await operacionAsincrona();
    console.log('Resultado:', resultado);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Llamada a la función
operacionConAsyncAwait();
// En este caso, hemos envuelto el código dentro de una función async, lo que nos permite usar await dentro de ella. Dentro de la función operacionConAsyncAwait, usamos await para esperar a que la promesa operacionAsincrona() se resuelva o sea rechazada. Luego manejamos los resultados utilizando try/catch. Esto hace que el código sea más legible y más parecido a la programación síncrona.