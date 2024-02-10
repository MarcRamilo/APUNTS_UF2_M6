//-----Classificar el Número:---//

// Tens un número num i vols assignar la cadena 'Positiu' si és positiu, 'Negatiu' si és negatiu, i 'Zero' si és igual a zero. Utilitza una expressió ternària per aconseguir-ho.
// expresión_condicional ? expresion1 : expresion2;
let num = prompt('Introdueix un número:');
num > 0 ? alert('Positiu') : num < 0 ? alert('Negatiu') : alert('Zero');
