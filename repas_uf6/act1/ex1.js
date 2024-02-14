// 1.  Genera un arxiu .js. Crea una variable que ens permeti d'entrada emmagatzemar aquesta temperatura a través d'una constant.
const Fahrenheit = prompt("Introdueix la temperatura en graus Fahrenheit: ");

// 2.  Cerca la fórmula necessària per convertir els graus entre les dues unitats.

const Celsius = (Fahrenheit - 32) * (5/9);

// 3.  Crea una nova variable que et permeti emmagatzemar el resultat de la conversió de Fahrenheit a Celsius i aplica la fórmula per tal que puguis fer aquesta conversió.
const FahrenheitConvert = (Celsius * 9/5) + 32;

// 4.  Amb l'ús de l'[objecte math](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math), cerca la manera que el valor en graus Celsius sigui el número enter sense els decimals (per ex. 10,66 → 10)
// 5. Fent ús d'interpolació d'strings, fes que la consola mostri la temperatura en graus Celsius "La temperatura es TEMPERATURA graus Celsius"
alert(`La temperatura es ${Math.floor(Celsius)} graus Celsius.`);



// cons tempereatura=100;
//let celsius
//celsius = (temperatura - 32) * 5/9
//console.log("resultat" + Math.floor(Celcius))