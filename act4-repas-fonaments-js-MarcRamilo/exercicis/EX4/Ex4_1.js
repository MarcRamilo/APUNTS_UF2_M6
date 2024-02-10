// Exercici 4: Condicionals - Ternaris
// Convertir IF a Ternari:

// Transforma el següent codi d'ús de if...else if a una expressió ternària:

// let hour = 12;
// let greeting;

// if (hour < 12) {
//   greeting = 'Bon dia';
// } else if (hour < 18) {
//   greeting = 'Bona tarda';
// } else {
//   greeting = 'Bona nit';
// }
// La teva tasca és reescriure aquest codi utilitzant una expressió ternària i assignar el resultat a la variable greeting.

// Classificar el Número:

// Tens un número num i vols assignar la cadena 'Positiu' si és positiu, 'Negatiu' si és negatiu, i 'Zero' si és igual a zero. Utilitza una expressió ternària per aconseguir-ho.

// Classificar l'Edat:

// Donada una edat, vols assignar una etiqueta que indiqui si és un "Nen", "Adolescent" o "Adult". Utilitza una expressió ternària per aconseguir-ho.

// 📌 Operador Nullish Coalescing '??'

//   El resultat de l'expressió "a ?? b" és el següent:
//   - Si "a" està "definit", el resultat serà "a".
//   - Si "a" no està "definit", el resultat serà "b".

//   En altres paraules, l'operador "??" retorna el primer argument quan aquest no és null ni undefined. En cas contrari, retorna el segon argument. https://es.javascript.info/nullish-coalescing-operator
// Suposem que tenim tres variables per guardar els nom, el cognom i el "nickname" d'un usuari. Ara bé, no estem segurs que tinguem tota aquesta informació. Només sabem que com a mínim en tenim una d'aquestes i que volem mostrar a alerta seguint la següent prioritat: nom --> cognom --> nickName --> 'anònim' Escriu el codi que ens ho soluciona fent ús de "??".

//---Convertir IF a Ternari:---//
let hour = 12;
let greeting;
// expresión_condicional ? expresion1 : expresion2;
hour < 12 ? greeting = 'Bon dia' : hour < 18 ? greeting = 'Bona tarda' : greeting = 'Bona nit';


