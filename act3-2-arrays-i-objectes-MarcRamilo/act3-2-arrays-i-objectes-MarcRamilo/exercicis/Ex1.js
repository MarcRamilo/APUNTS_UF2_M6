// Pots anar creant arxius per cada exercici i anar-los executant a mesura que els vas fent servir per comprovar que funcionen correctament.

// No et compliquis i fes servir console.log() per mostrar els resultats per la consola. Si vols, pots crear una funció per mostrar els resultats de cada exercici, però no és necessari. Practica amb el debugger de Chrome per veure com funcionen els teus programes. També Node et permet depurar els teus programes.

// Exercici 1
// Donada la següent array de plats preferits escriu una funció que mostri a la consola aquesta llista de la següent manera: "El meus plats preferits són: plat1, plat2, plat3...".

const platsPreferits = ["pizza", "hamburguesa", "sushi", "gelat"];

function mostrarPlatsPreferits(platsPreferits) {
  let missatge = "Els meus plats preferits són: ";
  for (const plat of platsPreferits) {
    if (plat === platsPreferits[platsPreferits.length - 1]) {
      missatge += plat + ".";
    } else {
      missatge += plat + ", ";
    }
  }
  console.log(missatge);
}

function mostrarPlatsPreferits2(platsPreferits){
    let missatge = "Els meus plats preferits són: ";
    console.log(missatge + platsPreferits.join(", ") + ".");
}

mostrarPlatsPreferits2(platsPreferits);
