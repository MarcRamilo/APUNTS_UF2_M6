  //Kata #7.2. Factoria d'objectes
  //Modifica la funció anterior per afegir els mètodes getFruit i getSpecies a l'objecte retornat.
  function plantTree(species, fruit) {
    if (typeof species !== 'string' || typeof fruit !== 'string') {
      return('Els arguments han de ser cadenes de text.');
    }
  
    return {
      species: species,
      fruit: fruit,
      getFruit: function () {
        return this.fruit;
      },
      getSpecies: function () {
        return this.species;
      },
    };
  }
  
  // const tree = plantTree("pearTree", "pear");
  // console.log(tree.getFruit()); // 'pear'
  // console.log(tree.getSpecies()); // 'pearTree'