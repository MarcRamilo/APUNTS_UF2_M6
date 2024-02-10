// Exercici 4
// Crea una funció que rebi un array d'strings i retorni UN NOU ARRAY que contingui només les paraules que tenen més de 3 lletres.
// Exemple d'array que podríem fer servir

const paraules = ['gat', 'cotxe', 'casa', 'ordinador', 'sol'];

const paraulesMesDe3Lletres = paraules.filter(paraula => paraula.length > 3);

console.log(paraulesMesDe3Lletres.sort()); //sort ordena alfabeticament