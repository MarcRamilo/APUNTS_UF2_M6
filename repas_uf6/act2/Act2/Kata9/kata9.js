//Kata #9. Gestió d'errors
// Recupera el codi de la Kata 7. Afegiu la següent línia de codi a la comprovació del tipus en els setters setFruit i 'setSpecies per llançar un error.

class Tree {
  constructor(fruit, species) {
    this.fruit = fruit;
    this.species = species;
  }

  setFruit(fruit) {
    if (typeof fruit !== "number") {
      throw new Error("El fruit ha de ser un nombre");
    }
    this.fruit = fruit;
  }

  setSpecies(species) {
    if (typeof species !== "string") {
      throw new Error("L'especie ha de ser una cadena de text");
    }
    this.species = species;
  }

}

const tree = new Tree(0, "Oak");

module.exports = tree;
