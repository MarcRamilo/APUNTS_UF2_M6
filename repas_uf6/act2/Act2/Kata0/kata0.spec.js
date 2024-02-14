const suma = require('./kata0');
//Descriure un grup sota al qual volem definir una serie de testos o requisits.
describe("kata #0: sumatori", ()=>{
  //Provem que la nostra funció pot sumar 2 i 4
  test("de 2+4 es 6", ()=>{
    expect(suma(2,4)).toBe(6);
    }); 
    test("de -2+8 es 6", ()=>{
      expect(suma(-2,8)).toBe(6);
  });
});
