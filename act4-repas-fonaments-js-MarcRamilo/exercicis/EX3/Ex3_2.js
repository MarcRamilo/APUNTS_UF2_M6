// Exercici 3.2:
// Realitza un petit codi que demani a l'usuari un número i mostri a través d'un alert si l'usuari ha introduït un número parell o senar.
let entrada = prompt('Introdueix un número entre 1 i 100:');
if (Number(entrada) % 2 == 0) {
  alert('El número introduït és parell');
} else {
  alert('El número introduït és senar');
}
