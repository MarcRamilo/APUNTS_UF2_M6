//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
function onlyEven(array) {
  const resultat = array.filter((number) => number % 2 === 0);
  return resultat;
}

function onlyOneWord(array) {
  const resultat = array.filter((i) => !i.includes(' '));
  return resultat;
}

function positiveRowsOnly(array) {
  const resultat = array.filter((i) => i.every((j) => j > 0));
  return resultat;
}
function allSameVowels(array) {
  const resultat = array.filter((i) =>{
    const vowels = i.split('').filter((char)=> 'aeiou'.includes(char));
    return vowels.every((vocal) => vocal === vowels[0]);
  })
  return resultat;
}


module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
