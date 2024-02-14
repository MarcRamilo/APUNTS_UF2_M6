//Modifica la funció anterior perquè estigui implementada dins de l'objecte tree, és a dir, esdevingui un mètode.
//!!! warning this Revisa this - MDN, integra-ho en el teu codi i explica com funciona.
//-------------kata 6.3-----------------
const tree = {
    species: "appleTree",
    fruit: "apple",
    getFruit() {
       if (tree.hasOwnProperty('fruit')) {
      return this.fruit;
    } else {
      return null;
    }
    }
  };
  
  // console.log(tree.getFruit()); // 'apple'
  // //  console.log(getFruit(tree)); // Imprimirà "apple"
  // console.log(tree.getFruit());
  // module.exports = getFruit;