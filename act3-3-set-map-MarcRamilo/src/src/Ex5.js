// Exercici 5: Filtrar anagrammes
// Un anagrama és una paraula que es pot formar a partir d'una altra reordenant les seves lletres.
//Per exemple, listen és un anagrama de silent. O en català amor és un anagrama de roma.

// Escriu una funció que, donada una llista de paraules, retroni un array lliure d'anagrames.
//Per exemple, donada la llista ['listen', 'silent', 'amor', 'roma', 'poma'], la funció retornaria ['listen', 'amor', 'poma']

let arr = ['listen', 'silent', 'amor', 'roma', 'poma'];
//Utiltzar sort, set (Map)
function anagram(arr) {
  const anagrama = new Set();
  const anagramaLlista = [];
  arr.forEach((paraula) => {
    const paraulaOrdenada = paraula.split('').sort().join('');
    if (!anagrama.has(paraulaOrdenada)) {
      anagrama.add(paraulaOrdenada);
      anagramaLlista.push(paraula);
    }
  });
  return anagramaLlista;
}

console.log(anagram(arr)); // ['listen', 'amor', 'poma']
