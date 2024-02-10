// Exercici 5.3 - Variables globals i locals
// Declara una variable global anomenada MAX_PRICE i establix el seu valor a 10.
// Defineix la funció calculaTotal. Dins de la funció, declara una variable local anomenada total i establix el seu valor com a preu * quantitat.
// Utilitza una declaració if per comprovar si el preu és menor o igual a MAX_PRICE. Si ho és, retorna el valor de total. Si no ho és, retorna un missatge d'error.
// Prova la teva funció cridant-la amb diferents valors per al preu i la quantitat, i assegura't que retorni el resultat correcte o el missatge d'error.
// // Exercici 5.3


const MAX_PRICE = 10;
function calculaTotal(preu, quantitat) {
  let total = preu * quantitat;
  if (preu <= MAX_PRICE) {
    return total;
  } else {
    return 'Error';
  }
}
console.log(calculaTotal(5, 2)); // 10
console.log(calculaTotal(11, 2)); // Error

