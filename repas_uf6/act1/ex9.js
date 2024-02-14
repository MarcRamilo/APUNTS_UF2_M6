// The scope of `random` is too loose
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => { // Remove the parameter 'random' here
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

const name = 'Nala';

const logEvent = (event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(event);
logTime(days);

/*-----CORRECIONS-------*/
// Variable random fora de l'abast apropiat:

/*La variable random s'ha declarat fora de qualsevol funció, el que significa que té un àmbit global. 
Això pot ser problemàtic perquè es vol utilitzar dins de la funció getRandEvent(). 
Per resoldre això, la variable random hauria de ser declarada dins de la funció o passada com a argument.*/ 

//Variable days declarada amb àmbits limitats
/*Dins de la funció getTrainingDays(), la variable days s'està declarant amb let dins de cada bloc if. 
Això significa que cada variable days té un àmbit limitat només a aquest bloc if, i no és accessible 
fora d'aquest bloc. Això pot provocar errors quan intentis retornar el valor de days. 
Per resoldre-ho, pots declarar days abans dels blocs if i assignar-li un valor dins de cada bloc.*/ 

//Variable name amb àmbit innecessàriament limitat:
/*Les funcions logEvent i logTime declaren la variable name amb àmbit local. 
Aquesta variable no canvia dins de les funcions i no necessita un àmbit limitat. 
Pots declarar name a un àmbit superior i utilitzar-lo com a argument de les funcions.*/