// //Kata #7.1. Factoria d'objectes
function plantTree(species, fruit) {
    // Validem que els arguments siguin de tipus cadena
    if (typeof species !== 'string' && typeof fruit !== 'string') {
      return ('Els arguments han de ser cadenes de text.');
    }
    // Creem l'objecte amb les propietats especificades
    const tree = {
      species: species,
      fruit: fruit
    };
  
    return tree;
  }
  
  // Prova la funció amb l'exemple de test
  console.log(plantTree("pearTree", "pear")); // { species: 'pearTree', fruit: 'pear' }
  module.exports = plantTree;


