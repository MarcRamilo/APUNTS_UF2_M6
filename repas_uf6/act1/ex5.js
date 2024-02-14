function calcularEdat(dataNaixement) {
  // Obtenim la data actual
  const avui = new Date();

  // Convertim la data de naixement en un objecte Date
  const dataNac = new Date(dataNaixement);

  // Calculem la diferència d'anys entre la data actual i la data de naixement
  let edat = avui.getFullYear() - dataNac.getFullYear();

  // Comparem el mes i el dia de naixement amb el mes i el dia actuals
  const mesActual = avui.getMonth() + 1;
  const diaActual = avui.getDate();

  if (
    mesActual < dataNac.getMonth() + 1 ||
    (mesActual === dataNac.getMonth() + 1 && diaActual < dataNac.getDate())
  ) {
    edat--; // Restem 1 a l'edat si l'aniversari encara no ha passat aquest any
  }

  return edat; // Retornem l'edat calculada
}
function assignarNumeroIHoraInici(dataRegistre,dataNaixement,inscripcioAnticipada) {
  // Calculem l'edat del corredor utilitzant la funció anterior
  const edat = calcularEdat(dataNaixement);

  // Declarem variables per al número de cursa i l'hora d'inici
  let numeroCursa;
  let horaInici;

  // Comprovem si l'edat és igual a 18
  if (edat === 18) {
    numeroCursa = "Dirigir-se al punt d'informació";
    horaInici = "Dirigir-se al punt d'informació";
  } else {
    // Si l'edat no és 18, verifiquem si és major o igual a 18 i si s'ha registrat anticipadament
    if (edat >= 18 && inscripcioAnticipada) {
      numeroCursa = Math.floor(Math.random() * 900) + 1000; // Número de cursa igual o superior a 1000
      horaInici = "9:30 a.m.";
    } else {
      numeroCursa = Math.floor(Math.random() * 1000); // Número de cursa per sota de 1000
      horaInici = "11:00 a.m.";
    }
  }

  // Si l'edat és menor de 18, l'hora d'inici és sempre 12:30 p.m.
  if (edat < 18) {
    horaInici = "12:30 p.m.";
  }

  // Retornem un objecte amb el número de cursa i l'hora d'inici
  return { numeroCursa, horaInici };
}

const dataRegistre = new Date(); // Data de registre actual
const dataNaixement = new Date("2005-01-15"); // Data de naixement del corredor (exemple: 15 de gener de 2005)
const inscripcioAnticipada = true; // Canviar a true si el corredor es registra anticipadament

// Truquem la funció `assignarNumeroIHoraInici` amb les dades del corredor
const { numeroCursa, horaInici } = assignarNumeroIHoraInici(
  dataRegistre,
  dataNaixement,
  inscripcioAnticipada
);

console.log(`Número de cursa: ${numeroCursa}`);
console.log(`Hora d'inici: ${horaInici}`);
