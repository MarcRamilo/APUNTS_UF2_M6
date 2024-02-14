class Arbre {
  constructor(especie, fruit) {
    this._especie = especie;
    this._fruit = fruit;
  }

  get fruit() {
    return this._fruit;
  }

  set fruit(value) {
    if (this._validaFruit(value)) {
      this._fruit = value;
    } else {
      throw new Error("El fruit no compleix amb el patró de l'espècie.");
    }
  }

  _validaFruit(fruit) {
    // Utilitzem una expressió regular per comprovar si les 3 primeres lletres de la fruita coincideixen amb les de l'espècie.
    const regex = new RegExp(`^${this._especie.substring(0, 3)}`); // /^per/ -> pera, perera, peret, etc. /^pom/ -> poma, pomera, pometa, etc. /^cir/ -> cirera, cirerer, cirereta, etc. 
    return regex.test(fruit); // Retorna true o false
  }
}

// Exemples d'ús
const arbre1 = new Arbre("poma", "pomer");
console.log(arbre1.fruit); // pomer

try {
  arbre1.fruit = "pera"; // Llançarà un error ja que "pera" no compleix amb el patró de "poma"
} catch (error) {
  console.error(error.message);
}

const arbre2 = new Arbre("perera", "poma");
console.log(arbre2.fruit); // poma

arbre2.fruit = "pera"; // Canvia el valor de la fruita ja que "pera" compleix amb el patró de "perera"
console.log(arbre2.fruit); // pera
