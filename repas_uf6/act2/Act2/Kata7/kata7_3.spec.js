const { plantTree } = require("./kata7_3.js");
desribe("Kata #7.4: plantTree", () => {
  test("retorna valor fruit", () => {
    const arbre = plantTree("pearTree", "pera");
    expect(plantTree(arbre)).toBe("pera");
  });
});
