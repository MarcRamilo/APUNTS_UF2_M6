const tree = require("./kata6_1.js");
//Kata 6.1
describe("kata #6.1: getFruit(tree)", () => {
  test("tree species:", () => {
    expect(tree.species).toBe('appleTree'); 
  });
  test("tree fruit:", () => {
    expect(tree.fruit).toBe('apple'); 
  });
  test("Hauria de tenir propietat species:", () => {
    expect(tree).toHaveProperty('species', 'appleTree');
  });
  
  test("Hauria de tenir propietat fruit:", () => {
    expect(tree).toHaveProperty('fruit', 'apple');
  });
});
