[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/SmnucHk3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12184775&assignment_repo_type=AssignmentRepo)
# Act2_JS_Basics - Kata's de Dojo

Farem servir aquest repositori per:

1. Dur a terme els propers reptes en forma de "Kata's" en referència a la demostració de moviments del Judo. Són les habilitats, "skills", per poder convertir-nos en programadors web!

2. Instal·larem també els paquets i els "bundlers" (recursos que ens faciliten la vida quan a dependències) necessaris per poder per exemple testejar el nostre codi o dur-lo finalment a producció en etapes posteriors. Això ens permetrà tenir una plantilla sobre la que desenvolupar diferents projectes.

## Comencem!

D'entrada el primer que hauries de fer és tenir aquest repositori en local. Si has acceptat el repte ("assignment") a través de l'enllaç de la tasca, clona'l a local per tal de poder treballar més còmodament.

## Tooling (pendent)

Per poder fer test amb Jest

### Estructura d'arxius

Inicialment ens centrarem en resoldre els problemes plantejats i que tenen per objectiu acabar de veure alguns aspectes bàsics de JS. Seguiu l'estructura proposada amb l'exemple kata0.js.

<!-- prettier-ignore -->
- Act2_JS_Basics/
  - kata0/
    - kata0.js
  - kata1/
    - kata1.js

Podeu anar canviant **l'script JS de l'index.html** per provar les diferents kata's

## Katas

### Kata #1. Suma dels elements positius d’un array

Implementa la funció `sumPositiveElements(Array)` que rep un array d'enters com a argument i retorna la suma total dels elements positius.

```javascript
function sumPositiveElements(arr) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
sumPositiveElements([]); // 0
sumPositiveElements([1, 2, 3, 4, 5]); // 15
sumPositiveElements([1, -2, 3, 4, 5]); // 13
sumPositiveElements([-1, 2, 3, 4, -5]); // 9
sumPositiveElements([-1, -2, -3, -4, -5]); // 0
```

### Kata #2. Repeteix un string

Implementa la funció `repeatString(String, Number)` que rep un string i un número com a arguments, i retorna un string que conté l'string argument repetit el número de cops indicat per l'argument numèric.

```javascript
function repeatString(str, num) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
repeatString("JavaScript", 0); // ''
repeatString("university", 1); // 'university'
repeatString("hello", 3); // 'hellohellohello'
repeatString("?", 10); // '??????????'
```

### Kata #3. Elimina el primer i l’últim caràcter

Implementa la funció `removeFirstAndLast(String)` que rep un string com a argument i retorna l'string argument però sense el seu primer i últim caràcter, obviant els strings amb 2 o menys caràcters.

```javascript
function removeFirstAndLast(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeFirstAndLast("JavaScript"); // 'avaScrip'
removeFirstAndLast("Alexandria"); // 'lexandri'
removeFirstAndLast("hydrogen"); // 'ydroge'
removeFirstAndLast("ok"); // 'ok'
```

### Kata #4. Elimina els espais en blanc

Implementa la funció `removeSpaces(String)` que rep un string com a argument i retorna l'string argument sense espais en blanc.

```javascript
function removeSpaces(str) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
removeSpaces("good morning"); // 'goodmorning'
removeSpaces(" carrot cake "); // 'carrotcake'
removeSpaces("the abbot gave rice to the fox"); // 'theabbotgavericetothefox'
```

### Kata #5. Scope i closure

Ja hem vist el concepte d'Scope i com les principals variables a JS (let i const) son "bloc-scope". Per exemple, si declarem una variable let o const dins d'un bloc de codi (com ara un bucle for o una funció), aquesta variable només serà accessible dins d'aquest bloc de codi i no serà visible fora d'aquest bloc. Això ajuda a evitar errors i a mantenir el codi més net i estructurat.

Un closure és una funció que "envolta" una altra funció i que té accés a les variables locals d'aquesta funció, fins i tot després que la funció original hagi finalitzat l'execució. Això és possible perquè el closure "captura" les variables locals de la funció original i les manté en memòria, de manera que es poden utilitzar en el futur.

En aquesta kata, heu de crear una funció counter que retorna una funció anomenada increment. La funció increment ha de mantenir un comptador intern que s'incrementa cada vegada que es crida, i ha de mostrar el valor del comptador per consola.

Quan lat tingueu, haurieu de poder cridar diverses vegades a la funció counter() i el resultat hauria de ser:

```javascript
const c = counter();
c(); // logs 1
c(); // logs 2
c(); // logs 3
```

### Kata #6. Objectes

Anem a insistir sobre alguns aspectes bàsics de la creació d'objectes i entendre el concepte de "getters" i setters"

#### Kata #6.1

Implementa l'objecte `tree` amb les propietats `species` amb valor "appleTree" i `fruit` amb valor "apple".

```javascript
const tree = {
  species: "appleTree",
  fruit: "apple",
};
```

Tests:

```javascript
tree.species; // 'appleTree'
tree.fruit; // 'apple'
```

#### Kata #6.2

Implementa una funció `getFruit(tree)` que donat un objecte `tree` obtingui el valor de la seva propietat `fruit`. Busca que fa el mètode "hasOwnProperty" propia d'un objecte i fes-la servir:

```javascript
function getFruit(tree) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
getFruit(tree); // 'apple'
```

#### Kata #6.3

Modifica la funció anterior perquè estigui implementada dins de l'objecte `tree`, és a dir, esdevingui un mètode.

<!-- prettier-ignore -->
!!! warning **this**
    Revisa [this - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this), integra-ho en el teu codi i explica com funciona.

```javascript
const tree = {
  species: "appleTree",
  fruit: "apple",
  getFruit() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.getFruit(); // 'apple'
```

### Kata #7. Factoria d'objectes

#### Kata #7.1

Implementa la funció `plantTree(species, fruit)` que s'invoca passant-li dos arguments (species i fruit) i retorna un objecte amb aquests valors per a aquestes mateixes propietats. Fes les validacions necessàries.

```javascript
function plantTree(species, fruit) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
plantTree("pearTree", "pear"); // { species: 'pearTree', fruit: 'pear' }
```

#### Kata #7.2

Modifica la funció anterior per afegir els mètodes `getFruit` i `getSpecies` a l'objecte retornat.

```javascript
function plantTree(species, fruit) {
  // Escriu aquí la teva solució
}
```

Tests:

```javascript
const tree = plantTree("pearTree", "pear");
tree.getFruit(); // 'pear'
tree.getSpecies(); // 'pearTree'
```

#### Kata #7.3

Modifica l'objecte `tree` de manera que les propietats `fruit` i `species` siguin getters.

```javascript
const tree = {
  get species() {
    // Escriu aquí la teva solució
  },
  get fruit() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.fruit; // 'pear'
tree.species; // 'pearTree'
```

#### Kata #7.4

Afegeix els setters `setFruit` i `setSpecies` a l'objecte `tree`.

```javascript
const tree = {
  set fruit(value) {
    // Escriu aquí la teva solució
  },
  set species(value) {
    // Escriu aquí la teva solució
  },
  get fruit() {
    // Escriu aquí la teva solució
  },
  get species() {
    // Escriu aquí la teva solució
  },
};
```

Tests:

```javascript
tree.fruit = "apple";
tree.fruit; // 'apple'
tree.species = "appleTree";
tree.species; // 'appleTree'
```

### Kata #8: Prototip

El prototip (en aquest cas d'String) és l'objecte que conté mètodes i propietats que s'apliquen a totes les instàncies de la classe (per ex. String)

Això significa que qualsevol cadena que es crea en JavaScript hereta les propietats i mètodes del prototip d'String.

Volem afegir una funció nova a String. Pots decidir ser una mica original i fer una proposta pròpia. Si no jo et proposo el següent:

Implementa una funció que, donat un string amb diverses frases (separades per punt), que "capitalitzi" la primera lletra de cadascuna de les frases, és a dir, la posi en majúscula.

Un cop la tinguis, afegeix-la com al prototip d'String i comprova que funciona:

```javascript
String.prototype.mevaFuncio = function () {
  // Escriu aquí la teva proposta
};
```

Tests:

```javascript
const frase = "la meva primera frase. la meva segona frase";
frase.mevaFuncio(); // Ha de mostrar "La meva primera frase. La meva segona frase."
```

### Kata #9. Gestió d'errors

<!-- prettier-ignore -->
!!! Warning
    La gestió d'errors a JavaScript es fa mitjançant les sentències **try, catch i throw**. Aquestes sentències permeten als desenvolupadors controlar els errors que es produeixen durant l'execució del codi i proporcionar una resposta adequada.

La sentència **try** s'utilitza per envoltar el codi que pot generar un error. Si es produeix un error dins del bloc try, el control es transfereix al bloc catch. El bloc catch conté el codi que s'executa quan es produeix un error.

La sentència **throw** s'utilitza per llançar un error manualment. Això permet als desenvolupadors crear errors personalitzats i proporcionar informació detallada sobre l'error.

```javascript
function divideix(a, b) {
  if (b === 0) {
    throw new Error("No es pot dividir per zero");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
```

En aquest exemple, definim una funció divide que divideix dos nombres.

- Si el segon nombre és zero, llancem un error utilitzant la sentència throw.
- Envoltem la funció divide amb una sentència try.
- Si es produeix un error dins de la funció divide, el control es transfereix al bloc catch, on mostrem un missatge d'error per consola.

Recupera el codi de la Kata 7. Afegiu la següent línia de codi a la comprovació del tipus en els setters `setFruit` i 'setSpecies per llançar un error.

```javascript
throw new Error();
```

Tests:

```javascript
try {
  tree.setFruit(12);
} catch (error) {
  // Comprovar que es llança un error
}
```

Each kata includes a set of tests that can be run using [Jest](https://jestjs.io/). To run the tests for a specific kata, navigate to the kata's directory and run the following command:

### Kata #10. RegExp

L'ús d’expressions regulars és habitual a JavaScript per tal de detectar patrons dins de cadenes de
text. Als nostres exercicis ens prendrem algunes llicències per a generalitzar el nom de l'espècie i de
la fruta. Abans de validar un canvi mitjançant setters, anem a validar la fruita respecte a l’espècie.

Per ex:

- poma - pomer OK
- pera - perera OK
- taronja - taronger OK
- nou - noguera KO

Dels tres primers casos observem que es repeteixen les 3 primeres lletres de l'espècie també a la
fruita. Aquesta serà la comprovació que farem al nostre setter.

Ha de complir els següents tests:

- Al crear un arbre amb els valors "poma" i "pomer", si invoquem posteriorment setFruit amb el valor "pera", el mètode llança un error i manté el seu valor previ.

- Al crear un arbre amb els valors "perera" i "poma" i invocar posteriorment setFruit amb el valor pera, el mètode modifica el valor de la propietat fruit.

### Kata #11. Objectes de l'entorn del navegador

Fes una ullada al recurs de classe [Interacció amb el navegador de JS](https://prosfp.github.io/DAW_MP06/UF1/UF1.3/UF1.3.7_Browser_Objects/)

A continuació et proposo el següents reptes:

- **Crea una pàgina HTML** senzilla amb un botó que digui "Obre Finestra Emergent". Utilitza l'objecte window per obrir una finestra emergent (popup) quan es fa clic al botó. Personalitza la mida i la posició de la finestra emergent i permet que l'usuari pugui introduir la URL amb que s'obrirà.

- **Alerta amb Window:** Afegeix un altre botó que digui "Mostra Alerta". Utilitza l'objecte window per mostrar una alerta (finestra emergent d'alerta) amb un missatge quan es fa clic al botó. Informació de Navegador amb navigator:

- Crea una secció a la pàgina que mostri **informació sobre el navegador de l'usuari**. Amb **Navigator** pots accedir a propietats com userAgent, platform, language, etc., i mostra aquestes dades a la pàgina. També dona a conèixer les extensions instal·lades a l'ordinador.

- **Canviar el Títol de la Pàgina amb document:** Afegeix un camp d'entrada de text i un botó. Utilitza l'objecte **document** per canviar el títol de la pàgina quan es fa clic al botó. El nou títol ha de ser el text introduït per l'usuari al camp d'entrada. Redireccionar amb location:

- Afegeix un altre botó que digui "Ves a Google". Utilitza l'objecte **location** per redirigir l'usuari a la pàgina d'inici de Google quan es fa clic al botó. Comprova si l'usuari està connectat a Internet abans de redirigir-lo.

### Kata #12. Classes

Les **classes** són plantilles per als objectes.

Javascript crida un **mètode constructor** quan creem una nova instància d'una classe.

**Herència** és quan creem una classe pare amb propietats i mètodes que podem estendre a les classes filles.

Utilitzem la paraula clau **extends** per crear una subclasse.

La paraula clau **super** crida el constructor() d'una classe pare.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} fa un soroll.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} fa guau guau.`);
  }
}

const myDog = new Dog("Bobby");
myDog.speak(); // Output: "Bobby fa guau guau."
```

A DESENVOLUPAR:

### Catàleg Educació

El Departament d'Educació vol un catàleg de referència ràpida per a cada escola del territori.

Hem de crear classes per a escoles primàries i secundàries. Ja que aquestes classes comparteixen propietats i mètodes, cadascuna heretarà de la classe pare "Escola". Les classes pare i els tres fills tenen les següents propietats, getters, setters i mètodes:

**Escola**

- Propietats: nom (string), nivell (string: 'primària', 'secundària' o 'batxillerat') i nombreEstudiants (nombre)
- Getters: totes les propietats tenen getters
- Setters: la propietat nombre d'estudiants té un setter
- Mètodes: .informacioRapida() i .professorSubstitut( (aquest és un mètode estàtic)

**Primaria**

- Inclou tot el que té la classe Escola, més una propietat addicional
- Propietats: politicaMenjador (string)

**Secundària**

- No inclou cap propietat o mètode addicional

**Batxillerat**

- Inclou tot el que té la classe Escola, més una propietat addicional
- Propietats: equipsEsportius (array d'strings)

Crea el constructor() i els getters per a les quatre classes anteriors.

#### 1a Part

1. Crear Classe Escola Mare: Comencem creant una classe mare per a les classes Primària, Secundària i Batxillerat. Crea una classe buida anomenada "Escola".

2. Dins la classe Escola, crea un constructor() buit que accepti tres paràmetres. Els noms d'aquests paràmetres han de coincidir amb les propietats que s'han llistat.

3. Dins el constructor(), estableix les propietats de l'Escola. Afegix un guió baix (\_) davant de totes les propietats.

4. Crea getters per a les propietats nom, nivell i nombre d'estudiants. Cada getter ha de retornar el valor emmagatzemat a la propietat.

5. Crea un setter per a nombre d'estudiants. El mètode ha de comprovar primer si l'entrada (nouNombreEstudiants) és un nombre. Si és un nombre, aleshores estableix la propietat nombre d'estudiants. Si no ho és, registra el missatge 'Entrada no vàlida: el nombre d'estudiants ha de ser un nombre.'

6. Sota els teus getters, crea un mètode anomenat informacioRapida que enregistri la següent cadena al console: "L'ESCOLA NOM educa a NOMBRE D'ESTUDIANTS estudiants al nivell escolar NIVELL".
   (fes les substitucions per variables que toquin)

7. Sota .informacioRapida(), crea un mètode estàtic anomenat professorSubstitut. Aquest mètode rebrà un paràmetre, anomenat professorsSuplents. El paràmetre professorsSuplents acceptarà un array d'Strings.

Dins el mètode, genera una manera de triar aleatòriament dins professorsSuplents. Utilitza aquest número per accedir i retornar el professor suplent a l'índex generat aleatòriament.

#### 2a Part

1. Crea una classe buida "Primaria" que hereti de "Escola".

2. Dins la classe "Primaria ", crea un constructor() que accepti tres arguments.

3. Fes una crida a "super" a la primera línia del constructor de "Primaria". Passeu-hi qualsevol argument que utilitzi el constructor pare.

4. Ja que aquesta és la classe "Primaria", passa 'primaria' com a argument pel paràmetre "nivell" en el constructor pare.

5. Utilitza l'argument restant per establir la propietat "politicaMenjador".

6. Com que la nostra classe "Primaria" hereta les propietats i getters de "Escola", només hem de crear un nou getter a la classe "Primaria". Afegeix aquest getter a la classe "Primaria" i fer que retorni un string amb la política del menjador (per ex: "Menjador opcional. Menu vegetarià"). Cada getter ha de retornar el valor emmagatzemat a aquesta propietat.

A continuació, t'atreveixes amb la classe "Secundaria" i "Batxillerat" que hereta de la classe "Escola" també? A més de les propietats, els getters i els mètodes de "Escola", la classe "Batxillerat" inclou:

- Propietats: "equipsEsportius" (array d'strings)

- Getters: Un getter per al conjunt "equipsEsportius". El getter ha de mostrar tots els euips o disciplines esportives al console.

#### 3a Part

Anem a crear **instàncies** de la nostra classe. Recordem que això ens permet crear múltiples objectes amb les mateixes propietats i mètodes. Cada instància d'una classe és un objecte amb el seu propi estat, i que per tant es poden tenir objectes amb diferents valors per les seves propietats.

1. Comencem amb una escola de primària:

- Nom: Fortià Solà
- \# d'estudiants: 346
- Menjadors: "Menjador propi. Menú vegetarià opcional."

2. Crida a ".informacioRapida" de la teva nova instància.

3. Es necessita un substitut per l'escola. Crida al mètode estàtic ".professorSubstitut" i passa-li una llista de candidats (['Joan', 'Maria', 'Pep']). Des d'on el crides?

4. Anem ara a un cas de batxillerat:

- Nom: INS Cirviànum
- \# d'estudiants: 120
- Esports: ["Futbol","Basquet","Escacs","Tennis Taula"]

5. Comprova que pots obtenir el llistat de disciplines esportives!

# GOOD JOOOOOOB!!!

# WEEKEND BONUS TRACK: Kata #13. Moduls - Message Mixer

Message Mixer Inc. ofereix un servei de xifrat de missatges que transforma el text d'entrada mitjançant diversos xifrats i mostra el missatge xifrat a la consola.

Aquest servei proporciona tres mètodes de xifrat diferents:

1. Un "Caesar Cipher" en què els caràcters del missatge d'entrada es desplacen alfabèticament una quantitat determinada.
2. Un "Symbol Cipher" en què alguns caràcters seleccionats del missatge d'entrada es substitueixen per símbols visualment similars.
3. Un "Reverse Cipher" en què cada paraula del missatge d'entrada es gira in situ.

Per fer servir aquest servei, executa la comanda següent:

```
node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]
```

Aquí tens alguns exemples d'execució d'aquest programa:

```
$ node message-mixer.js caesar 4
Introduïu el missatge que voleu xifrar...
> hello world

Aquest és el vostre missatge xifrat:
> lipps asvph

$ node message-mixer.js 'reverse'
Introduïu el missatge que voleu xifrar...
> hello world

Aquest és el vostre missatge xifrat:
> olleh dlrow
```

En l'actualitat, Message Mixer Inc. ven el seu servei de xifrat com un programa en un sol fitxer anomenat `message-mixer.js`. Aquest sol fitxer inclou:

- Les funcions que realitzen els xifrats esmentats anteriorment.
- El codi per obtenir l'entrada de l'usuari.
- El codi per mostrar la sortida a l'usuari.

Message Mixer Inc. vol unir-se a la comunitat d'open-source permetent que altres desenvolupadors importin les seves funcions de xifrat als seus propis projectes.

En aquest projecte, ajudaràs Message Mixer Inc. a extreure i aïllar les seves funcions de xifrat en un mòdul anomenat `encryptors.js`, i després refactoritzaràs `message-mixer.js` per fer servir les funcions d'aquest mòdul.

Abans de començar, prova d'executar les comandes que es mostren més amunt al terminal. A continuació, familiaritza't amb com funciona el programa examinant els tres fitxers del directori de fitxers, amb un enfocament especial en `message-mixer.js`. A la part superior d'aquest fitxer trobaràs les tres funcions de xifrat de text. Cap al final del fitxer, hi ha codi que fa servir les variables d'entorn `process.argv`, `process.stdin`, i `process.stdout` per determinar quin mètode de xifrat fer servir, analitzar l'entrada de l'usuari i mostrar el missatge xifrat.

Aquí tens les instruccions en català per resoldre l'exercici:

**Extreure les funcions de xifrat**

1. Les tres funcions de xifrat que Message Mixer Inc. vol compartir estan definides a `message-mixer.js`. Són les següents:

   - `caesarCipher()`
   - `symbolCipher()`
   - `reverseCipher()`

   Primer, copia les definicions d'aquestes tres funcions a `encryptors.js`. Després, guarda `encryptors.js`.

2. Ara, per convertir `encryptors.js` en un mòdul, les seves funcions han de ser exportades.

   A dins de `encryptors.js`, assigna cada funció de xifrat com una propietat de l'objecte `module.exports`.

**Refactoritza el teu codi per utilitzar les funcions exportades**

3. Ara que has mogut les funcions de xifrat a `encryptors.js` i les has exportades, ara tens aquestes funcions duplicades.

   Primer, elimina les definicions d'aquestes tres funcions de `message-mixer.js`.

   Com a resultat, només hauries de tenir la lògica d'entrada i sortida de l'usuari. A més, l'execució del programa ara produirà errors de referència.

4. Ara pots reemplaçar les funcions eliminades important-les des de l'arxiu `encryptors.js`.

   Hi ha diverses maneres de fer això, no obstant, l'enfocament suggerit evitarà fer modificacions a la lògica d'entrada/sortida.

   A la part superior de `message-mixer.js`:

   - Declara una nova variable anomenada `encryptors`.
   - Després, importa l'objecte `module.exports` de `encryptors.js` i assigna l'objecte importat a `encryptors`.

5. L'objecte `module.exports` de `encryptors.js` ara està emmagatzemat a la variable `encryptors`.

   Extreu els tres mètodes de xifrat de `encryptors` i emmagatzema'ls en tres variables: `caesarCipher`, `symbolCipher` i `reverseCipher`.

6. Bé fet! Si has completat els passos correctament, ara hauries de ser capaç d'executar el programa de nou. Per exemple, intenta executar aquesta comanda al terminal:

   ```
   node message-mixer.js caesar 4
   ```

   I després, quan et demani, escriu el següent missatge:

   ```
   > cnawp fkx!
   ```

   Mouent les funcions de xifrat a un mòdul separat i exportant-les, has separat les preocupacions del programa, el que el fa més organitzat i fàcil de navegar. A més, ara pots utilitzar aquests mètodes de xifrat per construir un altre programa!

**Crea un nou programa utilitzant el mòdul**

7. Els desenvolupadors de Super Encoder LLC han sentit parlar del mòdul `encryptors.js` que acabes de publicar i volen fer servir les teves funcions de xifrat per crear un nou programa.

   Els desenvolupadors de Super Encoder volen que l'usuari pugui utilitzar el seu programa per xifrar missatges i desxifrar-los mitjançant les comandes següents:

   ```
   node super-encoder.js encode
   ```

   i

   ```
   node super-encoder.js decode
   ```

   Intenta executar aquestes comandes. Actualment mostren "undefined".

8. Obre `super-encoder.js`, on veuràs que la lògica d'entrada/sortida ja està definida.

   A la part superior del fitxer, hauries de veure que les funcions `encodeMessage()` i `decodeMessage()` estan incompletes. Serà la teva tasca fer servir les funcions de xifrat per completar aquestes dues funcions.

   Primer, a la part superior de `super-encoder.js`, importa les funcions de xifrat `caesarCipher()`, `symbolCipher()` i `reverseCipher()` de l'arxiu `encryptors.js`.

9. Utilitza els tres mètodes de xifrat per completar la funció `encodeMessage()` passant el paràmetre d'entrada `str` a una funció de xifrat i després passant el valor retornat a la següent funció de xifrat. `encodeMessage()` hauria de retornar el missatge codificat final.

   Algunes pautes:

   - Has d'utilitzar cada funció de xifrat com a mínim una vegada.
   - És a teva elecció en quin ordre utilitzes les funcions de xifrat.
   - També pots reutilitzar les funcions de xifrat per codificar el missatge.
   - `caesarCipher()` requereix un argument `amount`. Tria algun número entre 0 i 26 per a aquest argument i recorda la teva elecció per a `decodeMessage()`.
   - Quan hagis acabat, prova d'executar el programa de la següent manera:

     ```
     $ node super-encoder.js encode
     ```

10. El descodificar és el procés de prendre un missatge codificat i determinar el missatge original mitjançant la reversió del procés de codificació.

    Per exemple, fent servir `message-mixer.js`, podem codificar el missatge 'hello world' fent servir un xifrat de Cèsar amb un nombre de 4 com així:

    ```
    $ node message-mixer.js caesar 4
    Introduïu el missatge que voleu xifrar...
    > hello world

    Aquest és el vostre missatge xifrat:
    > lipps asvph
    ```

    Per a desxifrar el missatge 'lipps asvph', podem executar el programa en sentit contrari, com així:

    ```
    $ node message-mixer.js caesar -4
    Introduïu el missatge que voleu xifrar...
    > lipps asvph

    Aquest és el vostre missatge xifrat:
    > hello world
    ```

    Ara, a

`super-encoder.js`, defineix `decodeMessage()` per proporcionar una funció que inverteixi la codificació de `encodeMessage()`.

11. Si has completat tots els passos correctament, ara hauries de ser capaç de codificar el missatge "hello world" per produir un missatge codificat. Després, hauries de ser capaç de prendre el missatge codificat i desxifrar-lo per obtenir "hello world" de nou.

    Al terminal, executa el programa `super-encoder.js` per provar el teu codi.
