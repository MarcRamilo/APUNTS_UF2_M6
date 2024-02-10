//Some en genreal retorna true o false, depenent de si algun dels elements de l'array compleix la condició o no.
// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10(input) {
  return input.some((numero) => numero > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord(input) {
  return input.some((paraula) => paraula.length > 10);
}

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities(input) {
  return input.some((bolean_elem) => bolean_elem.some((i) => i == true));

}

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa(input) {
  return input.some((frase) => frase.includes('Lost'));
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa,
};
