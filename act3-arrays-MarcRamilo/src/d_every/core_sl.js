//every en genaral retorna true o false, depenent de si tots els elements de l'array compleixen la condició o no.
// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  return input.every((numero) => {
    return numero % 2 === 0;
  });
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((val) => typeof val === typeof input[0]);
  // val és el valor de l'array, i és l'index de l'array, input és l'array.
  // input és un array, i[0] és el primer element de l'array.
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((i) => i.every((j) => j > 0)); 
}
// Check that all items in an array are strings
// and that they all only contain the same vowels.

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
