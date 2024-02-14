//Implementa la funció removeSpaces(String) que rep un string com a argument i retorna l'string argument sense espais en blanc.
function removeSpaces(str) {
    return str.split(" ").join("") ;
}
module.exports = removeSpaces;