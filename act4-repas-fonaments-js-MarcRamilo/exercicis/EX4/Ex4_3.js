// Classificar l'Edat:
// Donada una edat, vols assignar una etiqueta que indiqui si és un "Nen", "Adolescent" o "Adult". Utilitza una expressió ternària per aconseguir-ho.
// 📌 Operador Nullish Coalescing '??'
//   El resultat de l'expressió "a ?? b" és el següent:
//   - Si "a" està "definit", el resultat serà "a".
//   - Si "a" no està "definit", el resultat serà "b".
//   En altres paraules, l'operador "??" retorna el primer argument quan aquest no és null ni undefined. En cas contrari, retorna el segon argument. https://es.javascript.info/nullish-coalescing-operator
// expresión_condicional ? expresion1 : expresion2;
let edat = prompt('Introdueix un número:');
let etiqueta = edat > 6 && edat < 11 ? 'Nen' : edat > 12 && edat < 18 ? 'Adolescent' : 'Adult';
alert(etiqueta);


