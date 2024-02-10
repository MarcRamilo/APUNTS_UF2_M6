// Exercici 1: Mode modern - "use strict"
// Durant molt de temps, JavaScript va evolucionar sense tenir problemes de compatibilitat. Es van afegir noves característiques sense que la funcionalitat canviés. L'any 2015, amb la "famosa" versió del llenguatge ECMAScript 2015 o ES6, es van introduir moltes millores i canvis i van modificar algunes d'existents. Per garantir la retrocompatibilitat, gran part d'aquestes millores no s'apliquen automàticament. Per a poder utilitzar-les, cal indicar a l'intèrpret que volem utilitzar el mode modern. Per això, s'ha d'afegir la següent línia al principi del fitxer: 'use strict';.

// Busca com està afectant 'use strict' en cada cas:
// Exemple 1
// function myFunction() {
//   'use strict';
//   x = 3.14;
//   return x * 2;
// }
// Exemple 2
// function myFunction() {
//   'use strict';
//   let x = 3.14;
//   delete x;
//   return x * 2;
// }
//Amb use ctrict s'han de declarar les variables amb let, const o var.
//------------SOLUCIÓ-EX1---------------
// La declaració 'use strict'; activa el mode estricta en JavaScript. Això significa que el codi s'executa en un entorn més segur i restringit, amb menys llibertat per cometre errors.
// En el cas de la funció myFunction(), la declaració 'use strict'; fa que la variable x no es pugui declarar sense utilitzar la paraula clau var, let o const. En aquest cas, la variable x s'està declarant sense utilitzar cap d'aquestes paraules clau, per la qual cosa es produeix un error en mode estricte.
function myFunction1() {
  'use strict';
  let x = 3.14;
  return x * 2;
}
myFunction1();
//------------SOLUCIÓ-EX2---------------
// Busca com està afectant 'use strict' en cada cas:
//S'intenta eliminar la variable x, que no ha estat declarada.
//Millor possar undefined o aplicar variable buida o nula millor que aplicar delete.
function myFunction2() {
  'use strict';
  let x = 3.14;
  x = null;
  return x * 2;
}
myFunction2();
