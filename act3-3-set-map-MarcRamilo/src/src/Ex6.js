// Exercici 6: Claus iterables
// Ens agradaria poder iterar sobre les claus d'un Map. Per exemple:

// let map = new Map();

// map.set('name', 'John');
// map.set('surname', 'Smith');
// map.set('age', 25);

// let keys = map.keys();

// keys.push('more');

// console.log(keys);

// Quin és el resultat? Per què? Com ho podem solucionar?
//El resultat és un error perquè no es pot fer push a un Map. Ho podem solucionar fent-ho així:
let map = new Map();

map.set('name', 'John');
map.set('surname', 'Smith');
map.set('age', 25);

let keys = map.keys();

keys = [...keys, 'more'];

console.log(keys);