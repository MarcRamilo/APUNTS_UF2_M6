//Estructura callback
function callback() {
  console.log("Callback");
}
function funcio(callback) {
  callback();
}
//SetTimeout, succes , error
const findOne = (list, { key, value }, { onSuccess, onError }) => {
  setTimeout(() => {
    const element = list.find((element) => element[key] === value);
    element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
  }, 2000);
};

const onSuccess = ({ name }) => console.log(`user: ${name}`);
const onError = ({ msg }) => console.log(msg);

const users = [
  {
    name: 'Carlos',
    rol: 'Teacher',
  },
  {
    name: 'Ana',
    rol: 'Boss',
  },
];

console.log('findOne success');
findOne(users, { name: 'Carlos' }, { onSuccess, onError });

console.log('findOne error');
findOne(users, { name: 'Fermin' }, { onSuccess, onError });

// Estructura de una promesa
const promesa = new Promise((resolve, reject) => {
  if (true) {
    resolve("Correcte");
  } else {
    reject("Incorrecte");
  }
});
promesa
  .then((resultat) => console.log(resultat))
  .catch((error) => console.log(error));

// Estructura de una promesa amb async/await
async function promesaAsync() {
  try {
    const resultat = await promesa;
    console.log(resultat);
  } catch (error) {
    console.log(error);
  }
}
promesaAsync();

// Estructura de una promesa amb fetch amb una funció async/await
async function fetchData() {
  const response = await fetch("https://api.github.com");
  const data = await response.json();
  console.log(data);
}
fetchData();

// Estructura de una promesa amb fetch amb una funció then/catch
fetch("https://api.github.com")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));


  const url = 'https://swapi.dev/api/films/';

async function obtenerDatos(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener los datos', error);
  }
}
// Ejemplo de Callbacks:
// javascript
// Copy code
function obtenerPeliculasConCallback(callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

// Uso del callback
obtenerPeliculasConCallback((error, data) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Datos:', data);
  }
});
// Ejemplo de Promesa:
// javascript
// Copy code
function obtenerPeliculasConPromesa() {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Uso de la promesa
obtenerPeliculasConPromesa()
  .then(data => console.log('Datos:', data))
  .catch(error => console.error('Error:', error));
// Ejemplo de Async/Await:
// javascript
// Copy code
async function obtenerPeliculasConAsyncAwait() {
  try {
    const data = await obtenerDatos(url);
    console.log('Datos:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Uso de async/await
obtenerPeliculasConAsyncAwait();


// Función que simula una operación asíncrona
function operacionAsincrona(callback) {
  // Supongamos que aquí realizamos alguna operación asíncrona, como una solicitud a una API
  setTimeout(() => {
      const resultado = 'Datos obtenidos de la API';
      // Llamamos al callback con el resultado después de la operación asíncrona
      callback(resultado);
  }, 2000); // Simulamos un retardo de 2 segundos
}

// Definimos una arrow function como callback
const miCallback = resultado => {
  console.log('El resultado de la operación asíncrona es:', resultado);
};

// Llamamos a la función de operación asíncrona y pasamos la arrow function como callback
operacionAsincrona(miCallback);