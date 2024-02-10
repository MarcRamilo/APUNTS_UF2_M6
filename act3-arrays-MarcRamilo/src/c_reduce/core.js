//reduce és una funció que rep un array i retorna un valor. Aquest valor pot ser un array, un objecte, un string, un number, etc.
//reduce rep dos parametres, el primer és una funció (acumulador), i el segon és el valor inicial (valor).
function sum(array) {
  //returns only those numbers that are even
  const resultat = array.reduce((total, i) => total + i, 0);
  return resultat;
}

function productAll(array) {
  const arraySeparat = array.flat(); //Flat separa l'array de l'array i retorna un array amb tots els elements.
  console.log(arraySeparat);
  const resultat = arraySeparat.reduce((total, i) => total * i, 1); //Començem amb posició 1 perque si comencem amb 0 el resultat sempre sera 0 perque 0*numero=0.
  console.log(resultat);
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

