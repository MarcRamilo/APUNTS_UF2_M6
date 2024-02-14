
let operadorAleatori = ["+", "-"];
let operadorFinal;
let numeroAleatori1;
let numeroAleatori2;
let intents = 3;
while (intents > 0) {
numeroAleatori1 = Math.floor(Math.random() * 9);
numeroAleatori2 = Math.floor(Math.random() * 9);

operadorFinal = operadorAleatori[Math.floor(Math.random() * operadorAleatori.length)];
Math.floor(operadorFinal);

console.log("Numero1: " + " " + numeroAleatori1);
console.log("Numero2: " + " " + numeroAleatori2);
console.log("Operador matemàtic aleatori: " + "" + operadorFinal);

let opreacio = numeroAleatori1 + operadorFinal + numeroAleatori2;
console.log("Resultat: " + opreacio);
let resultatOperacio = eval(opreacio);
console.log("Resultat: " + resultatOperacio);

let numeroIntroduit = prompt("Introdueix el resulta tde la següent operació:" + opreacio );
console.log("Numero Introduit: " + numeroIntroduit);
let validacio;
if(numeroIntroduit == resultatOperacio){
     validacio = true;
    alert("Validat");
    intents = 0;
} else{
     validacio = false;
    alert("Invalid" + " " + " Intents:" + intents);
    intents--;
}
console.log("Valid?: " + validacio);

}
