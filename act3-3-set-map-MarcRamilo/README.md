[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/bBJkrNyZ)
# Set i Map 

## 🚀 Set

Referència [MDN Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

El `Set` és utilitzat per emmagatzemar un conjunt d'objectes únics, on no es poden guardar dos objectes repetits. La comparació estricta (`===`) es fa servir per determinar si un objecte ja es troba dins del Set. Els elements d'un Set mantenen l'ordre en què s'han afegit, i cada objecte emmagatzemat pot ser d'un tipus diferent.

#### Crear un Set

```javascript
const s1 = new Set();             // Crea un conjunt buit
const s2 = new Set([1, 2, 3, 4]); // Crea un conjunt amb els valors 1, 2, 3 i 4
const s3 = new Set([1, 1, 1, 1]); // Crea un conjunt amb l'element 1
```

#### Atributs i mètodes

- `size`: Conté la mida (quants elements té).
- `add(obj)`: Afegeix un element.
- `has(obj)`: Retorna `true` si l'objecte està dins del Set.
- `delete(obj)`: Elimina l'objecte si es troba dins del Set.
- `clear()`: Elimina tots els objectes del Set.

#### Recòrrer un Set

Es pot recórrer un Set amb un bucle `for ... of`:

```javascript
const s = new Set([1, 2, 3, 4]);
for (let o of s) {
    console.log(o);
}
```

#### Convertir Set en Array i viceversa

Es pot obtenir un array amb els objectes del Set utilitzant `const array = [...set]`.

Es pot crear un Set a partir d'un array utilitzant `const set = new Set(array)`.

---

## 🚀 Map

Referència [MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

> Nota: No confondre amb el mètode `map` de l'array, que serveix per transformar els elements d'un array en un altre array. [Veure mètode map](../array/README.md#map) 

El `Map` és utilitzat per emmagatzemar parelles clau-objecte, on les claus no es poden repetir. Els elements mantenen l'ordre en què s'han afegit al Map, i es pot utilitzar qualsevol tipus d'objecte o primitiva tant per la clau com per l'objecte emmagatzemat. Et pot semblar que el Map és similar a un objecte, però té algunes diferències. Pots consultar-les a [la secció corresponent de MDN Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps).

#### Crear un Map

```javascript
const m1 = new Map();                         // Crea un conjunt buit
const m2 = new Map([["pomes", 500], ["bananes", 300], ["taronges", 200]]);
```

#### Atributs i mètodes

- `size`: Conté la mida (quants elements té).
- `set(key, obj)`: Afegeix una parella clau-objecte.
- `get(key)`: Retorna l'objecte associat a la clau.
- `delete(key)`: Elimina l'objecte associat a la clau.
- `clear()`: Elimina tots els objectes del Map.

És recomanable triar una clau que representi l'objecte. Pot ser un dels atributs o un String que combini diversos atributs.

#### Recòrrer un Map

Es pot recórrer un Map amb un bucle `for ... of`, però cada objecte és un array amb una parella clau-objecte:

```javascript
const m = new Map([["pomes", 500], ["bananes", 300], ["taronges", 200]]);
for (let a of m) {
    console.log(a[0] + " - " + a[1]);
}
```

#### Convertir Map en Array

Amb spread operator `...` es pot convertir un Map en un array:

Es pot obtenir un array amb les claus utilitzant `const array = [...map.keys()]`.

Es pot obtenir un array amb els objectes utilitzant `const array = [...map.values()]`.

També es pot crear un array d'arrays amb les parelles clau-objecte: `const array = [...map]`.

#### Map des de Object i Object des de Map

Es pot crear un Map a partir d'un objecte utilitzant `const map = new Map(Object.entries(obj))`. Per ex: 

```javascript
const obj = { a: 1, b: 2, c: 3 };
const map = new Map(Object.entries(obj));
console.log(map); // Map { 'a' => 1, 'b' => 2, 'c' => 3 }
```

Es pot crear un objecte a partir d'un Map utilitzant `const obj = Object.fromEntries(map)`. Per ex:

```javascript
const map = new Map([["a", 1], ["b", 2], ["c", 3]]);
const obj = Object.fromEntries(map);
console.log(obj); // { a: 1, b: 2, c: 3 }
```





## Referències

[JavaScript Inf - Map i Set](https://es.javascript.info/map-set)