// Exercici 2: Seguiment d'inventari
//Suposa que tens una aplicació de seguiment d'inventari en una botiga i vols utilitzar un Map per emmagatzemar
//la quantitat disponible de cada producte. Crea una funció que,
//donada una llista d'objectes que contenen informació sobre els productes i les seves quantitats,
//retorna un Map amb els noms dels productes com a claus i les quantitats com a valors.

function inventoryTracker(products) {
  //return: [['Llapis', 150], ['Bolígraf', 50], ['Goma', 75]]
  const productsMap = new Map();
  products.forEach((product) => {
    if (productsMap.has(product.name)) {
      productsMap.set(product.name,productsMap.get(product.name) + product.quantity); // aixo fa que si hi ha un producte repetit, sumi ex: 100 + 50 = 150 traduit al nom de les variables és product.quantity + productsMap.get(product.name)
    } else {
      productsMap.set(product.name, product.quantity);
    }
  });
  return productsMap;
}

const productsList = [
  { name: 'Llapis', quantity: 100 },
  { name: 'Bolígraf', quantity: 50 },
  { name: 'Llapis', quantity: 50 },
  { name: 'Goma', quantity: 75 },
];

const inventoryResult = inventoryTracker(productsList);
console.log([...inventoryResult]); // Esperat: [['Llapis', 150], ['Bolígraf', 50], ['Goma', 75]]
