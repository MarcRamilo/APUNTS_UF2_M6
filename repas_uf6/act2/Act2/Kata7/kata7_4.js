
  //#7.4. Factoria d'objectes
  //Afegeix els setters setFruit i setSpecies a l'objecte tree.
  function plantTree(species, fruit) {
    if (typeof species !== 'string' || typeof fruit !== 'string') {
      return('Els arguments han de ser cadenes de text.');
    }
    //Aquestes variables no són accessibles des de fora de la funció
    let _species = species; // Propietat privada per emmagatzemar especie
    let _fruit = fruit;

  return {
        // Propietat privada per emmagatzemar fruit
    set species(species) {
      _species = species;
    },
  
    set fruit(fruit) {
      _fruit = fruit;
    },
  
    get species() {
      return _species;
    },
  
    get fruit() {
      return _fruit;
    }
  }
};
module.exports = { plantTree };