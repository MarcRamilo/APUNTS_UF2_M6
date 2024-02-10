### Exercici 1: Gestió d'assistents a una conferència

Imagina que estàs organitzant una conferència i tens una llista d'assistents amb informació sobre els seus noms i l'empresa a la qual pertanyen. Ara bé, com que hem agafat la informació de bases de dades diferents, la llista conté duplicats. Crea una funció que, donada aquesta llista, utilitzi un `Set` per eliminar els duplicats i retorni una llista d'assistents únics.

```javascript
const attendeesList = [
    { name: 'Alice', company: 'TechCo' },
    { name: 'Bob', company: 'DataCorp' },
    { name: 'Alice', company: 'TechCo' },
    { name: 'Charlie', company: 'SoftSys' }
    { name: 'Bob', company: 'DataCorp' }
];
```

### Exercici 2: Seguiment d'inventari 

Suposa que tens una aplicació de seguiment d'inventari en una botiga i vols utilitzar un `Map` per emmagatzemar la quantitat disponible de cada producte. Crea una funció que, donada una llista d'objectes que contenen informació sobre els productes i les seves quantitats, retorna un `Map` amb els noms dels productes com a claus i les quantitats com a valors.

```javascript
function inventoryTracker(products) {
...
}

const productsList = [
    { name: 'Llapis', quantity: 100 },
    { name: 'Bolígraf', quantity: 50 },
    { name: 'Llapis', quantity: 50 },
    { name: 'Goma', quantity: 75 }
];

const inventoryResult = inventoryTracker(productsList);
console.log([...inventoryResult]); // Esperat: [['Llapis', 150], ['Bolígraf', 50], ['Goma', 75]]
```

### Exercici 3: Iterant sobre un Map

Tens un map amb la informació de productes i els seu preu:

```javascript
const products = new Map([
    ['Llapis', 1],
    ['Bolígraf', 2],
    ['Goma', 0.5]
    ['Quadern', 3]
]);
```

Crea una vagi fent les següents accions, una després de l'altra:

1. Iteri i mostri el nom només dels productes. 
2. Iteri i mostri dels preus. 
3. Iteri i mostri el nom i el preu dels productes.
4. Iteri i mostri la suma dels preus dels productes.


### Exercici 4: Filtratge de dades amb Set i Map

Tens la següent llista de tasques amb la categoria i el temps estimat per completar-les. Crea una funció que, donada aquesta llista, utilitzi un `Map` per organitzar les tasques per categoria i un `Set` per emmagatzemar les categories úniques.

```javascript
function categorizeTasks(tasks) {
...
}

const tasksList = [
    { category: 'Desenvolupament', name: 'Crear API REST', time: 120 },
    { category: 'Disseny', name: 'Disenyar interfície d'usuari', time: 60 },
    { category: 'Desenvolupament', name: 'Implementar funcionalitats del client', time: 180 },
    { category: 'Testos', name: 'Provar el sistema', time: 90 }
];

const result = categorizeTasks(tasksList);
console.log('Categories úniques:', result.uniqueCategories);
console.log('Tasques categoritzades:', result.categorizedTasks);
```

### Exercici 5: Filtrar anagrammes

Un anagrama és una paraula que es pot formar a partir d'una altra reordenant les seves lletres. Per exemple, `listen` és un anagrama de `silent`. O en català `amor` és un anagrama de `roma`.

Escriu una funció que, donada una llista de paraules, retroni un array lliure d'anagrames. Per exemple, donada la llista `['listen', 'silent', 'amor', 'roma', 'poma']`, la funció retornaria `['listen', 'amor', 'poma']`

```javascript
let arr = ['listen', 'silent', 'amor', 'roma', 'poma'];

function anagram(arr) {
    ...
}

console.log(anagram(arr)); // ['listen', 'amor', 'poma']
```

### Exercici 6: Claus iterables

Ens agradaria poder iterar sobre les claus d'un Map. Per exemple:

```javascript
let map = new Map();

map.set("name", "John");
map.set("surname", "Smith");
map.set("age", 25);

let keys = map.keys();

keys.push("more");

console.log(keys);
```

Quin és el resultat? Per què? Com ho podem solucionar?

### Exercici 7: Social Network 

T'han contractat per crear alguns anàlisis dels usuaris d'una xarxa social i necessites crear algunes funcions per ajudar-te. Tens la següent informació:

```javascript
const socialNetworkData = {
    users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' }
        // ... more users
    ],
    friendships: [
        { userId: 1, friendId: 2 },
        { userId: 1, friendId: 3 },
        { userId: 1, friendId: 4 },
        { userId: 2, friendId: 3 },
        { userId: 3, friendId: 4 },
        { userId: 4, friendId: 1 },
        { userId: 4, friendId: 2 }
        // ... more friendships
    ],
    posts: [
        { userId: 1, postId: 101, likes: [2, 3] },
        { userId: 2, postId: 102, likes: [1] },
        { userId: 3, postId: 103, likes: [1, 2] },
        { userId: 4, postId: 104, likes: [1, 3] }
        // ... more posts
    ],
};
```

Crea les següents funcions fent ús de `Set` i `Map` allà on consideris que pot ser útil:

1. `getFriends(userId)`: Rep un `userId` i retorna un array amb els noms dels amics d'aquest usuari.
2. `getMutualFriends(userId1, userId2)`: Rep dos `userId` i retorna un array amb els noms dels amics en comú d'aquests usuaris.
3. `getLikes(postId)`: Rep un `postId` i retorna un array amb els noms dels usuaris que han fet like a aquest post.
4. `getPopularPosts()`: Retorna un Map amb els `postId` com a claus i el nombre de likes com a valors. Pots intentar que els posts estiguin ordenats de més a menys populars. Per exemple: `[[104, 2], [101, 2], [103, 2], [102, 1]]`. 