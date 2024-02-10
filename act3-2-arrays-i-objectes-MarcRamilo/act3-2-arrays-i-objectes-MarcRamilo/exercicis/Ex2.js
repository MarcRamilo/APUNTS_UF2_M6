// Exercici 2
// Crea un objecte que contingui una llista de productes dins un array, és a dir, que hi hagi un "key": "value" on la clau sigui "productes" i el valor un array amb els productes que hem posat a la llista.
// Fes una funcio que et permeti afegir productes a la llista I a la vegada et mostri per consola els productes que hi ha a la llista.

const llistaProductes = {
    productes: ["patates", "pomes", "castanya", "peres"],
    afegirProductes: function producte (producte)  {
        this.productes.push(producte);
        console.log(this.productes);
    }
};

llistaProductes.afegirProductes("maduixes");


