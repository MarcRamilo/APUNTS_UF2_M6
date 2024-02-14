const { plantTree } = require("./kata7_2.js");

desribe("Kata #7.4: plantTree", () => {
  test("Hauria de retornar un objecte amb les propietats especificades", () => {
    const resultat = plantTree("pearTree", "pera");
    expect(resultat).toEqual({ species: "pearTree", fruit: "pera" });
  });
  test("Hauria de llençar un error si els arguments no són cadenes", () => {
    expect(plantTree(123, true)).toBe(
      "Els arguments han de ser cadenes de text."
    );
  });

  test("Hauria de llençar un error si els arguments no són cadenes", () => {
    const arbre = plantTree("pearTree", "pera");
    expect(plantTree(arbre)).toHaveProperty("Fruit");
  });
});
