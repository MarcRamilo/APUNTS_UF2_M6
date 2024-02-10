//El every()mètode de Arrayles instàncies prova si tots els elements de la matriu passen la prova implementada per la funció proporcionada. Retorna un valor booleà.

function allEven(input) {
  const resultat = input.every((numero) => numero % 2 === 0);
  return resultat;
}


function allSameType(input) {
  const resultat = input.every((val)=> typeof val === typeof input[0]);
  return resultat;
}

function positiveMatrix(input) {
  const resultat = input.every((i)=> i.every((j)=>j>0));
  return resultat;
}


function allSameVowels(input) {
  return input.every((paraules) => {
    const vowels = paraules.split('').filter((char) => 'aeiou'.includes(char)); //split separa cada element de l'array, i filter filtra els vocals.
    return vowels.every((vocal) => vocal === vowels[0]); //every retorna true si tots els elements de l'array compleixen la condicio. La condició és que tots els elements de l'array de vocals siguin iguals al primer element de l'array de vocals.
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels,
};
