// T'has d'encarregar de calcular el preu total del "carro" de la compra d'un client. Per això tens la següent informació que t'arriba de l'API:
// T'han dit que això es pot fer de manera molt òptima amb filter i reduce. Crea una funció que ho faci.

// const preusProductes = {
//   llet: 1.5,
//   pa: 2,
//   ou: 0.5,
//   formatge: 3,
// };
// function sumaCarro() {
//     let suma = 0;
//     for (const preu of Object.values(preusProductes)) {
//         suma += preu;
//     }
//     return suma;
//     // console.log(suma);
// }
// sumaCarro();

const preusProductes = {
  llet: 1.5,
  pa: 2,
  ou: 0.5,
  formatge: 3,
};

function calcularPreuTotal(carro) {
  // Utilitza la funció Object.keys per obtenir una llista de noms de productes del carro.
  const productes = Object.keys(carro); // console.log(productes); // [ 'llet', 'pa', 'ou', 'formatge' ]

  // Utilitza la funció `filter` per seleccionar només els productes que es troben a `preusProductes`.
  const productesExistents = productes.filter(producte => preusProductes[producte] !== undefined);
  //Comentari: Filter retorna un array quan troba que les els valors de cada producte és difearent a undefined.

  // Utilitza la funció `reduce` per sumar els preus dels productes existents al carro.
  const preuTotal = productesExistents.reduce((total, producte) => total + preusProductes[producte], 0);
  //Reduce retorna un valor únic, en aquest cas el preu total del carro. El 0 és el valor inicial de total. 
  //El 0 fa que el primer valor de total sigui 0 i així poder sumar els preus dels productes existents al carro.

  return preuTotal;
}

// Exemple d'ús:

const preuTotal = calcularPreuTotal(preusProductes);
console.log(`El preu total del carro de compra és: ${preuTotal} €.`);

