// Exercici 7: Funcions - Mètodes d'Objectes per defecte
// No t'has preguntat com es que podem aplicar mètodes a alguns primitius, per exemple str.toUpperCase()? Abans de començar a fer aquest exercici, pots fer un cop d'ull al recurs: https://es.javascript.info/object-methods, si vols entendre que s'amaga darrera d'aquest comportament.

// A continuació executa els següents codis i entendre que fan en cada cas.

const str = '42';
const num = Number(str);
console.log(num);
// Solució
// El codi convertex un string a un número. En aquest cas, el resultat és 42.
// //--------------------------

const randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
// Solució
// El codi genera un número aleatori entre 1 i 10.
// //--------------------------

const obj = { name: 'John', age: 30 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr);
// Solució
// El codi converteix un objecte a un string JSON. En aquest cas, el resultat és {"name":"John","age":30}.
// qJSON és un format de dades que permet l'intercanvi de dades entre diferents sistemes.
// //--------------------------

const num = 42;
const str = String(num);
console.log(str);

// Solució
// El codi converteix un número a un string. En aquest cas, el resultat és 42.
// //--------------------------

const now = new Date();
const dateStr = now.toLocaleDateString('ca-ES');
const timeStr = now.toLocaleTimeString('ca-ES');
console.log(dateStr);
console.log(timeStr);
// Solució
// El codi converteix una data a un string. En aquest cas, el resultat és 20/10/2023 19:21:55
