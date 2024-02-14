// Implementa la funció removeFirstAndLast(String) que rep un string com a argument i 
//retorna l'string argument però sense el seu primer i últim caràcter, obviant els strings amb 2 o menys caràcters.
function removeFirstAndLast(str) {
    // Verificar si la longitud de la cadena es major que 2
    if (str.length > 2) {
      // Treure el primer y ultim carácter de la cadena
      return str.slice(1, -1);
    } else {
      // Tornar la cadena original sense canvis si té length 2
      return str;
    }
  }
  
  // Exemple ús:
  var cadenaOriginal = "JavaScript";
  var cadenaModificada = removeFirstAndLast(cadenaOriginal);
  console.log(cadenaModificada); 
  
module.exports = removeFirstAndLast;


