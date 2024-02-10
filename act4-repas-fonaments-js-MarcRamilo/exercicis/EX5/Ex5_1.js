// Exercici 5.1
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('¿Tus padres te permitieron?'); //confirm retorna true o false depenent de si l'usuari clica acceptar o cancelar.
  }
}
checkAge(18);
// Funcionarà el codi si borrem else? Per què?
//Encara que no hi hagi el else, el codi no funcionarà igualment, perque la funció no retornarà res si l'edat és igual o inferior a 18.
//Si no hi ha el else, la funció retornarà undefined, ja que no hi ha cap return que retorni un valor.
