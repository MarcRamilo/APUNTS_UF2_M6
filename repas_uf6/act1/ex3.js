let nomJugador = prompt("Hola com et dius?");
let preguntaJugador = prompt("Diguem una pregunta?");
let numeroAleatori = Math.floor(Math.random() * 8);
let respostaRandom = '';

nomJugador ? console.log(`Hola, ${nomJugador}!`) : console.log('Hola!');

console.log(`${nomJugador} pregunta: ${preguntaJugador}`);

switch (numeroAleatori) {
  case 0:
    respostaRandom = 'És cert';
    break;
  case 1:
    respostaRandom = 'Está decidit';
    break;
  case 2:
    respostaRandom = 'Torna-hu a provar';
    break;
  case 3:
    respostaRandom = 'No hi ha predicció per ara ';
    break;
  case 4:
    respostaRandom = 'No segueixis';
    break;
  case 5:
    respostaRandom = 'El meu sistema diu que no';
    break;
  case 6:
    respostaRandom = 'No sembla bona idea';
    break;
  case 7:
    respostaRandom = 'Sembla que si';
  case 8:
    respostaRandom = 'Sembla que no';  
  default:
    console.log(`Hi ha hagut un error. Torna-hu a provar.`);
}

// function respostaAleatories(){
//     respostes = [
//     "resp1",
//     "resp2",
//     "resp3",
//     "resp4",
//     "resp5",
//     "resp6",
//     "resp7",
//     "resp8",
// ]
// };
// const respostaAleatories = respostes[Math.floor(Math.random() * respostes.length)]
console.log(`Resposta de la bola màgica: ${respostaRandom}`);
