// Exercici 5
// Crea un Array que contingui una llista de tasques pendents (cada tasca ha de tenir una descripció i un estat inicial de "pendent") en forma d'objecte cadascuna d'elles.
//Escriu una funció que mostri les tasques pendents i una altra que permeti marcar una tasca com a "completada" (és a dir canviar l'estat).
// Exemple d'objecte que podríem fer servir

const tasca1 = {
  descripcio: "Estudiar",
  estat: "pendent",
};
const tasca2 = {
  descripcio: "Treballar",
  estat: "fet",
};

const llistaTasques = [tasca1, tasca2];

function llistarTasques() {
  for (const tasca of llistaTasques) {
    if (tasca.estat === "pendent") {
      console.log(tasca.descripcio);
    }
  }
}
llistaTasques.includes("pendent");
llistaTasques.some((tasca) => tasca.estat === "pendent");
llistaTasques.every((tasca) => tasca.estat === "pendent");

llistarTasques();
