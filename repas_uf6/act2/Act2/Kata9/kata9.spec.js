const tree = require("./kata9.js");
describe("kata #9: getFruit(tree)", () => {
    try {
        tree.setFruit(12);
      } catch (error) {
        console.log("Error: SetFruit");// Comprovar que es llança un error
      }
      
      try {
        tree.setSpecies('Pine');
      } catch (error) {
        console.log("Error: Species");
        // Comprovar que es llança un error
      }
   
});