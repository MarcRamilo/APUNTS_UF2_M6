// 1. Creem una variable amb la frase d'entrada
const input = "turpentina i tortugues";

// 2. Creem un array amb les vocals de balena
const vocals = ["a", "e", "i", "o", "u"];

// 3. Creem un array buit per emmagatzemar les vocals traduïdes
const resultatArray = [];

// 4. Iterem a través de la frase d'entrada per buscar les vocals
for (let i = 0; i < input.length; i++) {
  // 5. Comprovem si la lletra és una vocal
  if (vocals.includes(input[i])) {
    // 6. Si és una vocal, afegim la lletra a l'array
    resultatArray.push(input[i]);
    
    // 7. Si la vocal és "e" o "u", la dupliquem afegint-la una altra vegada
    if (input[i] === "e" || input[i] === "u") {
      resultatArray.push(input[i]);
    }
  }
}

// 8. Unim les lletres de l'array en una sola cadena i les posem en majúscules
const resultatString = resultatArray.join("").toUpperCase();

// 9. Mostrem el resultat
console.log(resultatString);
