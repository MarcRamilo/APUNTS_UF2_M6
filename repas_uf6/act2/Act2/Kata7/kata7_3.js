function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return('Els arguments han de ser cadenes de text.');
  }
  //Aquestes variables no són accessibles des de fora de la funció
 let species = "pearTree"; // Propietat privada per emmagatzemar especie
 let fruit = "pear";

return {
      // Propietat privada per emmagatzemar fruit
  get species() {
    return _species;
  },

  get fruit() {
    return _fruit;
  }
}
};
tree.fruit;
tree.species;
console.log(tree.fruit);
console.log(tree.species);

module.exports = plantTree;