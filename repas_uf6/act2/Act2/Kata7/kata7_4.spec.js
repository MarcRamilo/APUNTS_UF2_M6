const { plantTree } = require("./kata7_4.js");
describe("Kata #7.4: plantTree", () => {
  test("retorna valor fruit", () => {
    const arbre = plantTree("pearTree", "pera");
    expect(plantTree(arbre.fruit)).toBe("pera");
  });
});
