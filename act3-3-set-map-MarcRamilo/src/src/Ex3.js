// Exercici 3: Iterant sobre un Map
// Tens un map amb la informació de productes i els seu preu:

const products = new Map([
  ['Llapis', 1],
  ['Bolígraf', 2],
  ['Goma', 0.5],
  ['Quadern', 3],
]);
// Crea una vagi fent les següents accions, una després de l'altra:

// Iteri i mostri el nom només dels productes.
function showProductsNames(products) {
  for (const product of products.keys()) {
    console.log(product);
  }
  return products;
}
showProductsNames(products);
// Iteri i mostri dels preus.
function showProductsPrices(products) {
  for (const product of products.values()) {
    console.log(product);
  }
}
showProductsPrices(products);
// Iteri i mostri el nom i el preu dels productes.
function showProductsNamesAndPrices(products) {
  for (const [nom,preu]of products.entries()) {
    console.log(`Tens el producte ${nom} amb el preu de ${preu}€`);
  }
}
showProductsNamesAndPrices(products);
// Iteri i mostri la suma dels preus dels productes.
function showProductsSum(products) {
  let sum = 0;
  for (const product of products.values()) {
    sum += product;
  }
  console.log(sum);
  return sum;
  // console.log(...products.values());
  // const array = [...products.values()];
  // const suma = array.reduce((acc, value) => acc + value);

  //result: 6.5
}
showProductsSum(products);
