const repeatString = require("./kata2.js");
describe("kata #2: Repeteix un string", () => {
  test("JavaScript 0", () => {
    expect(repeatString("JavaScript",0)).toBe('');
  });
  test("university 1", () => {
    expect(repeatString("university",1)).toBe('university');
  });
  test("hello 3", () => {
    expect(repeatString("hello",3)).toBe('hellohellohello');
  });
  test("? 10", () => {
    expect(repeatString("?",10)).toBe('??????????');
  });
});

  // repeatString("JavaScript", 0); // ''
// repeatString("university", 1); // 'university'
// repeatString("hello", 3); // 'hellohellohello'
// repeatString("?", 10); // '??????????'