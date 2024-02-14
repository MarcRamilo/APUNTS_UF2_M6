const { tree } = require("./kata6_2.js");
const { getFruit } = require("./kata6_2.js");
//kata 6.2
describe("kata #6.2: getFruit(tree)", () => {
  test("kata #6.2: hauria de retornar el valor de fruit si existeix la propietat:", () => {
    expect(getFruit(tree)).toHaveProperty('apple');
  });
});

  // tree.species; // 'appleTree'
  // tree.fruit; // 'apple'