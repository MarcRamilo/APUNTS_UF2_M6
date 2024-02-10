// Podem declarar variables per emmagatzemar dades utilitzant les paraules clau var, let, const.

// let: És la forma moderna de declaració de variable.
// var: És la declaració "old-school". Normalment, no s'utilitza gaire avui en dia però la podem trobar en codi antic.
// const: És com let, però el valor de la variable no pot ser alterat.
// Ja sabem prou com funcionen però està bé que coneguem algunes bones pràctiques. Fes un cop d'ull al següent recurs: https://es.javascript.info/variables i digues si la segÜent manera de declarar variables és correcta o no:
//------------SOLUCIÓ-EX3---------------// //const majuscules per a constants que sabem la variable i minjusucles quan no les sapiguiem.
let message; // correcte perque es declara la variable sense assignar-li cap valor amb valor undefined
const COLOR_RED = "#F00"; // correcte perque es declara la variable amb un valor constant
const pageLoadTime = /* el temps que ha trigat a carregar la pàgina */ ; // correcte està ben declarat per les majuscules i el valor.
const myBirthday = '18.04.1982'; //incorrecte perque ha de ser en majuscula
let 1a; //incorrecte perque no es pot començar una variable amb un numero
let user = 'John', age = 25, messages = 'Hola'; //incorrecte perque es declaren les variables un al cosatat del altre
let my-name; //incorrecte perque no es pot utilitzar el guio per declarar una variable
var mensaje = 'Hola'; //incorrecte perque no es declara la variable amb let o const sino amb var que es la forma antiga de declarar variables
const BIRTHDAY = '18.04.1982'; //correcte perque es declara la variable amb un valor constant
let num = 5; //correcte perque es declara la variable amb let i se li assigna un valor numeric


