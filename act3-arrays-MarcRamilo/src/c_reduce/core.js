//El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
function sum(array) {
 const resultat = array.reduce((accum,currVal) => accum + currVal,0);
 return resultat;
}

function productAll(array) {
  const arraySeparat = array.flat();
  const resultat = arraySeparat.reduce((accum,currVal)=> accum * currVal,1);
  return resultat;
}
//-----------solució-1-objectify---------------//
function objectify1(array) {
  const resultat = array.reduce((total, i) => {
    //total és un objecte buit, i és un array.
    total[i[0]] = i[1]; //total és un objecte buit, i és un array. Això vol dir que total[i[0]] és la key i[1] és el value.
    return total; //retorna un objecte amb la key i el value.
  }, {}); // {} és el valor inicial, un objecte buit.
  return resultat;
  //use destructuring for the array elements
  //On total és el resultat de la itereació anterior, incialment {}, i "i" és l'element actual de l'array.
}
//-----------solució-2-objectify---------------//
function objectify(array) {
  const resultat = array.reduce((total, [key, value]) => { //total és un objecte buit, [key, value] és un array per a cada element de l'array que fa el reduce.
    total[key] = value; //total és un objecte buit [key] és la key i value és el value.
    return total; //retorna un objecte amb la key i el value.
  }, {}); // {} és el valor inicial, un objecte buit.
  return resultat;
}

function luckyNumbers(array) {
  // return a fortune like sentence with lucky numbers
  const missastge = 'Your lucky numbers are: ';
  const resultat = array.reduce((accumulador, numero,index) => {
    if (index === array.length - 1) { //si l'index és igual a la llargada de l'array menys 1, retorna l'acumulador més el numero.
      return accumulador + 'and ' + numero; // l'acumaclador és el missatge inicial, i el numero és l'últim element de l'array.
    } else {
      return accumulador + numero + ', '; //si no és l'últim element de l'array, retorna l'acumulador més el numero que és l'element actual de l'array més una coma.
    }
  }, missastge);
 
  return resultat;
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers,
};

