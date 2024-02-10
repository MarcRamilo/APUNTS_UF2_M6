//filter retorna un array amb els elements que compleixen la condició. Si no en compleix cap, retorna un array buit.
//rep un array i retorna un array.
function onlyEven(array) {
  const resultat = array.filter((i) => i % 2 === 0);
  return resultat;
}

function onlyOneWord(array) {
  const resultat = array.filter((i) => !i.includes(' '));
  return resultat;
}

function positiveRowsOnly(array) {
  const resultat = array.filter((i) => i.every((j) => j > 0)); //every retorna true si tots els elements de l'array compleixen la condicio. Hi ha una doble arrow function perque el primer element de l'array es un array.
  return resultat;
}
//return only those words where all the vowels are the same
function allSameVowels(array) {
  //      const input = ['racecar', 'amalgam', 'oligopoly', 'zoom'];
  //const expected = ['amalgam', 'zoom'];
  const resultat = array.filter((paraules) => {
    const vowels = paraules.split('').filter((char) => 'aeiou'.includes(char)); //split separa cada element de l'array, i filter filtra els vocals.
    return vowels.every((vocal) => vocal === vowels[0]); //every retorna true si tots els elements de l'array compleixen la condicio. La condició és que tots els elements de l'array de vocals siguin iguals al primer element de l'array de vocals.
  });
  console.log(resultat); //['amalgam', 'zoom']
  return resultat;
}


module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels,
};
