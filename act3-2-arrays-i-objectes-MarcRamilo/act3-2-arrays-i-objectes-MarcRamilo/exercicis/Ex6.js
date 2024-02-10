// Exercici 6
// Tens la següent informació que t'arriba d'una API:
 // Exemple de solució
const poblacioCiutats = {
  Barcelona: 1620343,
  Madrid: 3334730,
  Valencia: 791413,
  Sevilla: 690566,
  Bilbao: 345821,
};
// Crea una funció que, donada aquesta informació, mostri per consola la població total de les ciutats.
function sumaPoblació(){
    let suma = 0;
    //For of
    // for (const poblacio of Object.values(poblacioCiutats)) {
    //     suma += poblacio;
    // }
    // return suma;
    // console.log(suma);
    //For in
    for (const poblacio in poblacioCiutats) {
        suma += poblacioCiutats[poblacio];
    }
    return suma;

}
sumaPoblació();
// Crea una funció que retorni únicament el nom de les ciutats amb una població superior a 1M.
function filtrePoblació(){
    //For of
    // for (const poblacio of Object.keys(poblacioCiutats)) {
    //     if (poblacioCiutats[poblacio] > 1000000) {
    //         console.log(poblacio);
    //     }
    // }
   //For in
    for (const poblacio in poblacioCiutats) {
     if (poblacioCiutats[poblacio] > 1000000) {
          console.log(poblacio);
     }
}
}

filtrePoblació();