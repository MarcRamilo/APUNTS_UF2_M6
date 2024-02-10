//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
function multiplyBy10(array) {
   const resultat = array.map((number)=> number * 10);
   return resultat;
}

function shiftRight(array) {
  const resultat = array.map((e,index, array)=>{
    if (index === 0) {
      return array[array.length - 1];
    } else{
      return array[index - 1];
    }
   
  });

  return resultat;
}

function onlyVowels(array) {
  const resultat = array.map((i)=>{
    const paraula = i.split('');
    const paraulaSeparada = paraula.filter((char)=> 'aieou'.includes(char))
    const paraulaFinal = paraulaSeparada.join('');
    return paraulaFinal;
  })
  return resultat;
}

function doubleMatrix(array) {
  const resultat = array.map((i) =>{
    const resultat2 = i.map((j)=> j * 2);
    return resultat2;
  })
  return resultat;
}

module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix,
};
