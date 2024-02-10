//Map : retorna un array amb els elements que s'han modificat.
array = [1,2,3,4,5]
function multiplyBy10(array) {
   const resultat = array.map((number)=> number * 10);
   return resultat;
}

//Filter : retorna un array amb els elements que compleixen la condició.
function onlyVowels(array) {
  const resultat = array.map((i)=>{
    const paraula = i.split('');
    const paraulaSeparada = paraula.filter((char)=> 'aieou'.includes(char))
    const paraulaFinal = paraulaSeparada.join('');
    return paraulaFinal;
  })
  return resultat;
}
//Every : retorna true si tots els elements compleixen la condició.
function allEven(input) {
  const resultat = input.every((numero) => numero % 2 === 0);
  return resultat;
}
//Reduce: retorna un valor depenent del que es vulgui.
function sum(array) {
  const resultat = array.reduce((total, i) => total + i, 0);
  return resultat;
}
//Some : retorna true si algun dels elements compleix la condició.
function someEven(input) {
  const resultat = input.some((numero) => numero % 2 === 0);
  return resultat;
}
//Flat: separa l'array de l'array i retorna un array amb tots els elements.
arraySe = [[1,2,3][4,5]]
function arraySep(arraySe){
const arraySeparat = array.flat();
console.log(arraySeparat); // [1,2,3,4,5]
return arraySeparat;
}
//Split : separa un string en un array.
function onlyVowels(array) {
  const resultat = array.map((i)=>{
    const paraula = i.split('');
    const paraulaSeparada = paraula.filter((char)=> 'aieou'.includes(char))
    const paraulaFinal = paraulaSeparada.join('');
    return paraulaFinal;
  })
  return resultat;
}
//Join : uneix els elements d'un array en un string.
function onlyVowels(array) {
  const resultat = array.map((i)=>{
    const paraula = i.split('');
    const paraulaSeparada = paraula.filter((char)=> 'aieou'.includes(char))
    const paraulaFinal = paraulaSeparada.join('');
    return paraulaFinal;
  })
  return resultat;
}
//Slice : retorna una part de l'array.
function shiftRight(array) {
  const resultat = array.map((e,index, array)=>{
    if (index === 0) {
      return array[array.length - 1];
    } else{
      return array[index - 1];
    }
  
  });

  return resultat;
}
//Sort : ordena els elements de l'array.
function sort(array) {
  const resultat = array.sort((a,b)=> a - b);
  return resultat;
}
//Reverse : inverteix l'ordre dels elements de l'array.
function reverse(array) {
  const resultat = array.reverse();
  return resultat;
}
//Push : afegeix un o més elements al final de l'array.
function push(array) {
  const resultat = array.push(6);
  return resultat;
}
//Pop : elimina l'últim element de l'array.
function pop(array) {
  const resultat = array.pop();
  return resultat;
}
//Shift : elimina el primer element de l'array.
function shift(array) {
  const resultat = array.shift();
  return resultat;
}
//Unshift : afegeix un o més elements al principi de l'array.
function unshift(array) {
  const resultat = array.unshift(0);
  return resultat;
}
//Splice : afegeix o elimina elements de l'array.
function splice(array) {
  const resultat = array.splice(2,0,2.5);
  return resultat;
}
//Concat : retorna un nou array amb els elements dels arrays que es passen com a paràmetres.
function concat(array) {
  const resultat = array.concat([6,7,8]);
  return resultat;
}
 
 
// module.exports = {
//   multiplyBy10,
//   onlyVowels,
//   allEven,
//   sum,
//   someEven,
//   arraySep,
//   onlyVowels,
//   onlyVowels,
//   shiftRight,
//   sort,
//   reverse,
//   push,
//   pop,
//   shift,
//   unshift,
//   splice,
//   concat,
// };

