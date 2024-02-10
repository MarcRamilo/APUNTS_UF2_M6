# Objectes i Arrays a JavaScript

Anem a repassar alguns conceptes bàsics sobre objectes i arrays a JavaScript. Aquests conceptes són essencials per a la programació en JavaScript, i són molt útils per a la manipulació de dades, de fet essencials!!!

## Objectes en JavaScript

Un objecte en JavaScript és una col·lecció de parells clau-valor, el famós **key-value**. Cada valor està associat a una clau única, i això permet emmagatzemar i accedir a les dades de manera eficient. Un objecte pot contenir propietats que són de diversos tipus, incloent altres objectes, funcions i més.

### Exemple d'objecte

```javascript
const persona = {
  nom: 'John',
  edat: 30,
  ciutat: 'Barcelona',
  ésEstudiant: true,
};
```

Per accedir a les propietats d'un objecte, utilitzem la notació de punt:

```javascript
console.log(persona.nom); // Sortida: 'John'
```

## Arrays en JavaScript

Un array en JavaScript és una col·lecció ordenada d'elements, que poden ser d'arbitrari tipus de dades. Els elements d'un array estan numerats en ordre, començant per zero. Això facilita l'accés i la manipulació dels elements de l'array.

### Exemple d'array

```javascript
const llistaDeLaCompra = ['ous', 'pa', 'llet', 'fruita'];
```

Per accedir als elements d'un array, utilitzem índexs:

```javascript
console.log(llistaDeLaCompra[0]); // Sortida: 'ous'
```

## Funcions i Mètodes Útils

Als continguts de la UF2 de la wiki de l'assignatura (https://prosfp.github.io/DAW_MP06/UF2/UF2.1/UF2.1.1_Funcions/) podeu trobar molts detalls sobre tècniques i mètodes incorporats per treballar amb objectes i arrays.

Anem a llistar alguns però t'aconsello que miris la documentació de cadascun d'ells per veure com funcionen i com els pots utilitzar.

### For...in i For...of

Abans d'entrar a analitzar les funcions i mètodes, és important conèixer com funcionen `for...in` i `for...of`.

| `for...in`                              | `for...of`                                                      |
| --------------------------------------- | --------------------------------------------------------------- |
| Itera sobre les propietats d'un objecte | Itera sobre els valors d'un objecte iterable                    |
| Es pot utilitzar amb objectes i arrays  | Es pot utilitzar amb objectes iterables (arrays, strings, etc.) |
| Retorna les claus ("keys") de l'objecte | Retorna els valors ("value") de l'objecte iterable              |

#### For...in

`for...in` és una estructura de control que permet iterar sobre les PROPIETATS D'UN OBJECTE. Per exemple:

```javascript
const persona = {
  nom: 'John',
  edat: 30,
  ciutat: 'Barcelona',
  ésEstudiant: true,
};

for (const propietat in persona) {
  console.log(`${propietat}: ${persona[propietat]}`);
}
```

Es pràctic perquè ens permet **iterar sobre les propietats d'un objecte** sense haver de saber quines són. **No la farem servir per iterar sobre els elements d'un array, perquè no és la seva funció!**

#### For...of

`for...of` és una estructura de control que permet iterar sobre els VALORS D'UN OBJECTE ITERABLE. Per exemple:

```javascript
const llistaDeLaCompra = ['ous', 'pa', 'llet', 'fruita'];

for (const element of llistaDeLaCompra) {
  console.log(element);
}
```

Normalment la farem servir per iterar sobre els **elements d'un array**, però també es pot utilitzar amb strings, maps, sets, etc. **No és habitual utilitzar-la amb objectes.**

### Funcions útils per treballar amb objectes

- `Object.keys(obj)`: Retorna un array amb les claus d'un objecte.
- `Object.keys(obj)`: Retorna un array amb les claus d'un objecte.
- `Object.values(obj)`: Retorna un array amb els valors d'un objecte.
- `Object.entries(obj)`: Retorna un array amb els parells clau-valor d'un objecte.

### Funcions útils per treballar amb arrays

**Length és una propietat**, no una funció, però és molt útil per treballar amb arrays:

- `array.length`: Propietat que indica la longitud d'un array.

#### Mètodes que SÍ modifiquen l'array original

- `array.push(element)`: Afegeix un element a la fi d'un array.
- `array.pop()`: Elimina l'últim element d'un array.
- `array.shift()`: Elimina el primer element d'un array.
- `array.unshift(element)`: Afegeix un element al principi d'un array.
- `array.splice(start, deleteCount, element1, element2, ...elementN)`: Elimina o afegeix elements a un array.
- `array.reverse()`: Inverteix l'ordre dels elements d'un array.
- `array.sort()`: Ordena els elements d'un array.
- ...

#### Mètodes que NO modifiquen l'array original

- `array.forEach(callback)`: Executa una funció en cada element de l'array.
- `array.filter(callback)`: Crea un nou array amb els elements que compleixen una condició.
- `array.find(callback)`: Retorna el primer element que compleix una condició.
- `array.findIndex(callback)`: Retorna l'índex del primer element que compleix una condició.
- `array.includes(element)`: Retorna `true` si l'array conté l'element especificat.
- `array.join(separator)`: Retorna un string amb els elements de l'array separats pel separador especificat.
- `array.slice(start, end)`: Retorna un nou array amb els elements de l'array original entre els índexs especificats.
- `array.concat(array1, array2, ...arrayN)`: Retorna un nou array amb els elements de l'array original i els arrays especificats concatenats.
- `array.toString()`: Retorna un string amb els elements de l'array separats per comes.

#### Mètodes que NO MODIFIQUEN L'ARRAY ORIGINAL i MOLT ÚTILS per treballar amb dades (recòrrer arrays i buscar, transformar, modificar...)

- `array.reduce(callback)`: Executa una funció en cada element de l'array i retorna un valor únic.
- `array.map(callback)`: Crea un nou array amb el resultat de l'execució d'una funció en cada element de l'array.
- `array.reduceRight(callback)`: Executa una funció en cada element de l'array en ordre invers i retorna un valor únic.
- `array.every(callback)`: Retorna `true` si tots els elements de l'array compleixen una condició.
- `array.some(callback)`: Retorna `true` si algun dels elements de l'array compleixen una condició.
- `array.flat(depth)`: Retorna un nou array amb els elements de l'array original aplanats fins a la profunditat especificada.
- ...

## :pencil: Exercicis

Pots anar creant arxius per cada exercici i anar-los executant a mesura que els vas fent servir per comprovar que funcionen correctament.

No et compliquis i fes servir `console.log()` per mostrar els resultats per la consola. Si vols, pots crear una funció per mostrar els resultats de cada exercici, però no és necessari. Practica amb el debugger de Chrome per veure com funcionen els teus programes. També Node et permet depurar els teus programes.

### Exercici 1

Donada la següent array de plats preferits escriu una funció que mostri a la consola aquesta llista de la següent manera: "El meus plats preferits són: plat1, plat2, plat3...".

```javascript
const platsPreferits = ['pizza', 'hamburguesa', 'sushi', 'gelat'];
```

### Exercici 2

Crea un objecte que contingui una llista de productes dins un array, és a dir, que hi hagi un "key": "value" on la clau sigui "productes" i el valor un array amb els productes que hem posat a la llista.

Fes una funcio que et permeti afegir productes a la llista I a la vegada et mostri per consola els productes que hi ha a la llista.

### Exercici 3

#### Exercici 3.1

Crea una funció que, donat un array de nombres, retorni la suma d'aquests nombres fent ús de for...of.

#### Exercici 3.2

Fes-ne un altra amb el mateix objectiu que l'anterior però fent ús d'algun mètode de l'objecte Array.

### Exercici 4

Crea una funció que rebi un array d'strings i retorni UN NOU ARRAY que contingui només les paraules que tenen més de 3 lletres.

```javascript
// Exemple d'array que podríem fer servir
const paraules = ['gat', 'cotxe', 'casa', 'ordinador', 'sol'];
```

### Exercici 5

Crea un Array que contingui una llista de tasques pendents (cada tasca ha de tenir una descripció i un estat inicial de "pendent") en forma d'objecte cadascuna d'elles. Escriu una funció que mostri les tasques pendents i una altra que permeti marcar una tasca com a "completada" (és a dir canviar l'estat).

### Exercici 6

Tens la següent informació que t'arriba d'una API:

```javascript
// Exemple de solució
const poblacioCiutats = {
  Barcelona: 1620343,
  Madrid: 3334730,
  Valencia: 791413,
  Sevilla: 690566,
  Bilbao: 345821,
};
```

- Crea una funció que, donada aquesta informació, mostri per consola la població total de les ciutats.
- Crea una funció que retorni únicament el nom de les ciutats amb una població superior a 1M.

### Exercici 7

T'has d'encarregar de calcular el preu total del "carro" de la compra d'un client. Per això tens la següent informació que t'arriba de l'API:

```javascript
const preusProductes = {
  llet: 1.5,
  pa: 2,
  ou: 0.5,
  formatge: 3,
};
```

T'han dit que això es pot fer de manera molt òptima amb filter i reduce. Crea una funció que ho faci.

### Exercici 8

Tens el següent llistat d'informació sobre persones. Crea una funció que retorni l'edat mitjana de les persones que tenen entre 25 i 40 anys.

```javascript
const persones = [
  { nom: 'Anna', edat: 25 },
  { nom: 'Pere', edat: 15 },
  { nom: 'Joan', edat: 40 },
  { nom: 'Maria', edat: 35 },
  { nom: 'Carles', edat: 41 },
  { nom: 'Laura', edat: 18 },
  { nom: 'Marc', edat: 33 },
  { nom: 'Júlia', edat: 22 },
];
```
