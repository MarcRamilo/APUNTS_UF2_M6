// Pasar un Objeto a un Array:
// Supongamos que tenemos el siguiente objeto:

// javascript
// Copy code
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Barcelona'
};
// Para convertir este objeto en un array, podemos usar varios métodos. Uno de los métodos más simples es utilizar el método Object.entries():

// javascript
// Copy code
const personaArray = Object.entries(persona);
console.log(personaArray);
// El resultado será un array donde cada elemento es un array de dos elementos, donde el primer elemento es la clave y el segundo elemento es el valor correspondiente del objeto:

// css
// Copy code
[  ['nombre', 'Juan'],
  ['edad', 30],
  ['ciudad', 'Barcelona']
]
// Pasar un Array a un Objeto:
// Supongamos que tenemos el siguiente array:

// javascript
// Copy code
const personaArray = [
  ['nombre', 'Juan'],
  ['edad', 30],
  ['ciudad', 'Barcelona']
];
// Para convertir este array en un objeto, podemos utilizar el método Object.fromEntries() junto con map para crear un nuevo objeto:

// javascript
// Copy code
const persona = Object.fromEntries(personaArray);
console.log(persona);
// El resultado será un objeto con las claves y los valores correspondientes del array:

// javascript
// Copy code
{
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Barcelona'
}