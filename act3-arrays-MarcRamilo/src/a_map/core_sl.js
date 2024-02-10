//Array map method funciona com un array i retorna un array amb els elements modificats.

function multiplyBy10(array) {
  //multiplies all elements in an array by 10
  const total = array.map((numero) => numero * 10);
  return total;
}

function shiftRight(array) {
  // shifts items in an array to the right by one
  const resultat = array.map((e, index, array) => {
    if (index === 0) {
      //si index es 0 retorna l'ultim element de l'array.
      return array[array.length - 1]; //array.length retorna la longitud de l'array i -1 perque els index comencen per 0.
    } else {
      return array[index - 1]; //index - 1 perque els index comencen per 0.
    }
  });
  return resultat;
}

function onlyVowels(array) {
  //removes any non-vowel character from words in an array
  const resultat = array.map((i) => {
    const paraules = i.split(''); //split separa la string en un array de caracters.
    const paraulesFiltrades = paraules.filter((char) => 'aeiou'.includes(char)); //includes retorna true o false si el char esta dins de la string. Char es cada element de l'array.
    return paraulesFiltrades.join(''); //join uneix els elements d'un array en un string.
  });
  return resultat;
  //solució2:
  // return array.map((element)=> {
  //   return element.replace(/[^aeiou]/gi, '');
  // });
}

function doubleMatrix(array) {
  //doubleMatrix multiplica per 2 tots els elements d'un array de arrays.
  //doubles the numbers in the matrix, maintaining the same structure
  const resultat = array.map((i) => {
    //map recorre un array i retorna un array amb els elements modificats.
    const resultat2 = i.map((j) => j * 2); //map multiplica per 2 tots els elements d'un array.
    return resultat2;
  });
  return resultat;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
