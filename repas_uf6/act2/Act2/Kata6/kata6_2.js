//----------------------kata 6.2---------------
//Implementa una funció getFruit(tree) que donat un objecte tree obtingui el valor de la seva propietat fruit. 
//Busca que fa el mètode "hasOwnProperty" propia d'un objecte i fes-la servir:
const tree = {
    species: "appleTree",
    fruit: "apple",
  };
  function getFruit(tree) {
    if (tree.hasOwnProperty('fruit')) {
      return tree.fruit;
    } 
    return null;
  }
  // tree.hasOwnProperty('tree')? tree.fruit : null;
  module.exports = {tree,getFruit};
  tree.species;
  tree.fruit;