// Funció per comprovar si un nombre és primer
function esNombrePrimer(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Funció per trobar la parella de nombres primers
  function trobarSumaDeNombresPrimers(num) {
    for (let primer1 = 2; primer1 <= num / 2; primer1++) {
      const primer2 = num - primer1;
      if (esNombrePrimer(primer1) && esNombrePrimer(primer2)) {
        console.log(`${num} es pot expressar com la suma de ${primer1} i ${primer2}`);
        return;
      }
    }
    console.log(`${num} no es pot expressar com la suma de dos nombres primers.`);
  }
  
  // Exemple d'ús
  const nombreDonat = 20; // Canvia a qualsevol nombre que vulguis comprovar
  if (esNombrePrimer(nombreDonat)) {
    trobarSumaDeNombresPrimers(nombreDonat);
  } else {
    console.log(`${nombreDonat} no és un nombre primer.`);
  }