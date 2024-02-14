const removeSpaces = require("./kata4");
describe("kata #4: removeSpaces", () => {
  test("good morning:", () => {
    expect(removeSpaces("good morning")).toBe('goodmorning');
  });
  test("carrot cake:", () => {
    expect(removeSpaces("carrot cake")).toBe('carrotcake');
  });
  test("the abbot gave rice to the fox:", () => {
    expect(removeSpaces("the abbot gave rice to the fox")).toBe('theabbotgavericetothefox');
  });
});
// removeSpaces("good morning"); // 'goodmorning'
// removeSpaces(" carrot cake "); // 'carrotcake'
// removeSpaces("the abbot gave rice to the fox"); // 'theabbotgavericetothefox'