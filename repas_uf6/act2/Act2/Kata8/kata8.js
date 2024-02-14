//Kata #8: Prototip
// El prototip (en aquest cas d'String) és l'objecte que conté mètodes i propietats que s'apliquen a totes les instàncies de la classe (per ex. String)
// Això significa que qualsevol cadena que es crea en JavaScript hereta les propietats i mètodes del prototip d'String.
// Volem afegir una funció nova a String. Pots decidir ser una mica original i fer una proposta pròpia. Si no jo et proposo el següent:
// Implementa una funció que, donat un string amb diverses frases (separades per punt), que "capitalitzi" la primera lletra de cadascuna de les frases, és a dir, la posi en majúscula.
// Un cop la tinguis, afegeix-la com al prototip d'String i comprova que funciona:

String.prototype.mevaFuncio = function () {
  // Escriu aquí la teva proposta
  let frase = this.split(". "); //split retorna un array de cadenes de text separades per el caràcter especificat
  let fraseFinal = "";
  console.log(frase);
  console.log(fraseFinal);
  for (let i = 0; i < frase.length; i++) {
    fraseFinal += frase[i].charAt(0).toUpperCase() + frase[i].slice(1) + ". "; //charAt retorna el caràcter especificat d'una cadena de text i slice retorna una part de la cadena de text especificada entre dos índexs (o fins al final) sense modificar la cadena original.
    console.log("Frase bucle de i:" + frase[i]);
    console.log("Frase Final bucle de i:" + fraseFinal[i]);
  }
  console.log("Frase :" + frase);
  console.log("Frase Final:" + fraseFinal);
  return fraseFinal;
};

const frase = "la meva primera frase. la meva segona frase";
frase.mevaFuncio();