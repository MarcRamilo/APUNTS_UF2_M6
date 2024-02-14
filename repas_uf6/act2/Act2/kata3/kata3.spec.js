const removeFirstAndLast = require("./kata3");

describe("kata #3: removeFirstAndLast", () => {
  test("JavaScript avaScrip:", () => {
    expect(removeFirstAndLast("JavaScript")).toBe('avaScrip');
  });
  test("Alexandria lexandri:", () => {
    expect(removeFirstAndLast("Alexandria")).toBe('lexandri');
  });
  test("hydrogen ydroge:", () => {
    expect(removeFirstAndLast("hydrogen")).toBe('ydroge');
  });
  test("ok ok:", () => {
    expect(removeFirstAndLast("ok")).toBe('ok');
  });
});