// Exercici 5.2
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('¿Tienes permiso de tus padres?');
  }
}
// Escriu la funció de dalt, però aquest cop fent servir un operador ?. També ho podem fer fent servir l'operador ||. Inclus més curt. Investiga com fer-ho.
// Usant l'operador ||:
function checkAge1(age) {
  return age > 18 || confirm('¿Tienes permiso de tus padres?');
}
// Usant l'operador ?:
function checkAge2(age) {
  return age > 18 ? true : confirm('¿Tienes permiso de tus padres?');
}
// // Usant l'operador ??
// function checkAge(age) {
//   return (age > 18) ?? confirm('¿Tienes permiso de tus padres?');
// }
