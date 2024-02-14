var edatIntroduida;
var calcular;
var edatGos;

edatIntroduida = prompt("Introdueix la teva edat humana");

// if (edatIntroduida <= 1) {
//     // Si l'edat és menor que 1, es multiplica per 10.5 per a l'edat canina
//     edatGos =  10.5;
//     alert("Tens " + edatIntroduida + " any(s) i  " + edatGos + " any(s) canins.");
// } else if (edatIntroduida >= 1 && edatIntroduida <= 2) {
//     // Si l'edat és més gran o igual a 1 i menor que 2, es multiplica per 21.5 per a l'edat canina
//     edatGos = 21;
//     alert("Tens " + edatIntroduida + " any(s) i  " + edatGos + " any(s) canins.");
// } else if (edatIntroduida > 2) {
//      // Per a altres edats, es divideix per 7 per a l'edat canina
//      edatGos = 10.5 * 2 + (edatIntroduida - 2) * 4;
//      alert("Tens " + edatIntroduida + " any(s) i  " + edatGos + " any(s) canins.");
// } {

// }
if (edatIntroduida <= 2) {
  // Si l'edat és menor que 1, es multiplica per 10.5 per a l'edat canina
  edatGos = 10.5 * edatIntroduida;
  alert("Tens " + edatIntroduida + " any(s) i  " + edatGos + " any(s) canins.");
} else if (edatIntroduida > 2) {
  // Per a altres edats, es divideix per 7 per a l'edat canina
  edatGos = 10.5 * 2 + (edatIntroduida - 2) * 4;
  alert("Tens " + edatIntroduida + " any(s) i  " + edatGos + " any(s) canins.");
}
