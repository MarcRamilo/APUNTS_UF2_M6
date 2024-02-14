// Kata #2. Repeteix un string
// Implementa la funció repeatString(String, Number) que rep un string i un número com a arguments,
//i retorna un string que conté l'string argument repetit el número de cops indicat per l'argument numèric.

function repeatString(str, nmb) {
  //Implementa la funció repeatString(String, Number) que rep un string i un número com a arguments, i retorna un string que conté l'string argument repetit el número de cops indicat per l'argument numèric.
  let result = "";
  for (let i = 0; i < nmb; ++i) {
    result += str;
  }
  return result;
}
module.exports = repeatString;
