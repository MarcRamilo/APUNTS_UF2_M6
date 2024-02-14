const sumPositiveElements = require("./kata1");
describe("kata #0: sumatori", () => {
  test("array buit", () => {
    expect(sumPositiveElements([])).toBe(0);
  });
  test("array 1, 2, 3, 4, 5", () => {
    expect(sumPositiveElements([1, 2, 3, 4, 5])).toBe(15);
  });
  test("array 1, -2, 3, 4, 5", () => {
    expect(sumPositiveElements([1, -2, 3, 4, 5])).toBe(13);
  });
  test("array -1, 2, 3, 4, -5", () => {
    expect(sumPositiveElements([-1, 2, 3, 4, -5])).toBe(9);
  });
  test("array -1, 2, 3, 4, -5", () => {
    expect(sumPositiveElements([-1, -2, -3, -4, -5])).toBe(0);
  });
});
sumPositiveElements([]); // 0
sumPositiveElements([1, 2, 3, 4, 5]); // 15
sumPositiveElements([1, -2, 3, 4, 5]); // 13
sumPositiveElements([-1, 2, 3, 4, -5]); // 9
sumPositiveElements([-1, -2, -3, -4, -5]); // 0
