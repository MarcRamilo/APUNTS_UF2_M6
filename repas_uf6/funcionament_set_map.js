// Set:
// Set es una estructura de datos que permite almacenar valores únicos de cualquier tipo, ya sean primitivos o referencias a objetos.

// Creación de un conjunto (Set)
const miSet = new Set();

// Agregar elementos al conjunto
miSet.add(1);
miSet.add(2);
miSet.add(3);
miSet.add(3); // Los conjuntos no permiten elementos duplicados

// Verificar si un elemento existe en el conjunto
console.log(miSet.has(2)); // Devuelve true

// Eliminar un elemento del conjunto
miSet.delete(2);

// Iterar sobre los elementos del conjunto
miSet.forEach(elemento => {
  console.log(elemento);
});

// Obtener el tamaño del conjunto
console.log(miSet.size); // Devuelve 2
// Map:
// Map es una estructura de datos que permite almacenar pares clave-valor donde las claves pueden ser de cualquier tipo.


// Creación de un mapa (Map)
const miMapa = new Map();

// Agregar elementos al mapa
miMapa.set('nombre', 'Juan');
miMapa.set('edad', 30);
miMapa.set('ciudad', 'Barcelona');

// Obtener el valor asociado a una clave
console.log(miMapa.get('edad')); // Devuelve 30

// Verificar si una clave existe en el mapa
console.log(miMapa.has('ciudad')); // Devuelve true

// Eliminar un elemento del mapa
miMapa.delete('edad');

// Iterar sobre las entradas del mapa (pares clave-valor)
miMapa.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});

// Obtener el tamaño del mapa
console.log(miMapa.size); // Devuelve 2
// Los conjuntos (Set) son útiles cuando necesitas almacenar valores únicos, mientras que los mapas (Map) son útiles cuando necesitas almacenar pares clave-valor y acceder a ellos de manera eficiente. Estas estructuras de datos proporcionan una forma conveniente de manejar datos en JavaScript.


// // Métodos en JavaScript de set y map: size, add, has, delete y clear

//// Set:
// Creación de un conjunto (Set)
const miSet = new Set();

// Añadir elementos al conjunto
miSet.add('a');
miSet.add('b');
miSet.add('c');

// Obtener la cantidad de elementos en el conjunto
console.log(miSet.size); // Devuelve 3

// Verificar si un elemento está en el conjunto
console.log(miSet.has('b')); // Devuelve true

// Eliminar un elemento del conjunto
miSet.delete('a');

// Limpiar el conjunto
miSet.clear();

// Verificar si el conjunto está vacío
console.log(miSet.size); // Devuelve 0

//// Map:
// Creación de un mapa (Map)
const miMapa = new Map();

// Añadir elementos al mapa
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

// Obtener la cantidad de elementos en el mapa
console.log(miMapa.size); // Devuelve 3

// Obtener el valor asociado a una clave
console.log(miMapa.get('clave2')); // Devuelve 'valor2'

// Verificar si una clave está en el mapa
console.log(miMapa.has('clave3')); // Devuelve true

// Eliminar un elemento del mapa
miMapa.delete('clave1');

// Limpiar el mapa
miMapa.clear();

// Verificar si el mapa está vacío
console.log(miMapa.size); // Devuelve 0
// Los conjuntos (Set) y los mapas (Map) son estructuras de datos útiles que proporcionan una forma conveniente de manejar datos en JavaScript. Pueden ser utilizados para almacenar y manipular datos de manera eficiente. Además, proporcionan métodos para agregar, eliminar y verificar la presencia de elementos, así como para obtener el tamaño de la estructura de datos.
