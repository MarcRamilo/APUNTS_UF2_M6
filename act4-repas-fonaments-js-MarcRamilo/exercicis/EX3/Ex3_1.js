// Exercici 3: Conversions de Tipus
// Ara ja coneixem els diferents tipus de dades que podem utilitzar a JS. Tenim un total de 8 tipus bàsics:

// 7 tipus de dades primitius:

// number per a números de qualsevol tipus: enteros o de punt flotant, els enters estan limitats per ±(253-1).
// bigint per a números enters de longitud arbitrària.
// string per a cadenes. Una cadena pot tenir zero o més caràcters, no hi ha un tipus especial per a un únic caràcter.
// boolean per a vertader i fals: true/false.
// null per a valors desconeguts – un tipus independent que té un sol valor nul: null.
// undefined per a valors no assignats – un tipus independent que té un únic valor "indefinit": undefined.
// symbol per a identificadors únics.
// 1 un tipus de dada no primitiu

// object per a estructures de dades complexes.
// L'operador typeof ens permet veure quin tipus està emmagatzemat en una variable.

// Hi ha dues formes: typeof x o typeof(x). Retorna una cadena amb el nom del tipus. Per exemple, "string".

// 📌 Pel valor null, retorna "object": això és un error en el llenguatge, en realitat no és un objecte.

// D'altra banda, la majoria de vegades, els operadors i funcions converteixen automàticament els valors que els passen al tipus correcte. Això ho anomenem "Conversió de tipus". Per exemple alert fa la conversió de qualssevol valor a string per mostrar-ho. O els operadors aritmètics converteixen els valors a números.

// Ara bé, a vegades ens pot anar bé poder fer nosaltres mateixos la conversió. Fes un cop d'ull al següent recurs si ho necessites https://es.javascript.info/type-conversions i afegeix les conversions necessàries per realitzar els següents exercicis:

// Exercici 3.1:
// // Codi inicial
// let num1 = prompt('Introdueix el primer número:');
// let num2 = prompt('Introdueix el segon número:');

// let resultat = num1 + num2;

// alert('El resultat de la suma és: ' + resultat);
//-SOLUCIÓ-EX3.1-//

let num1 = prompt('Introdueix el primer número:');
let num2 = prompt('Introdueix el segon número:');

let resultat = num1 + num2;

alert('El resultat de la suma és: ' + resultat);
//Fer la conversió de tipus de string a number
let resultat = Number(num1) + Number(num2);
//Fer la conversió de tipus de string a number
let resultat = parseInt(num1) + parseInt(num2);
//Fer la conversió de tipus de string a number
let resultat = +num1 + +num2;
