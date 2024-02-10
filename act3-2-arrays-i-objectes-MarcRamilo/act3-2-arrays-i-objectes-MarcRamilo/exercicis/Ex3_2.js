// Exercici 3.2
// Fes-ne un altra amb el mateix objectiu que l'anterior però fent ús d'algun mètode de l'objecte Array.
const numeros = [1,2,3,4,5,6,7,8,9,10];

function sumaNumeros(numeros) {
    let suma = 0;
    numeros.forEach(numero => {
        suma += numero;
    });
    return suma;
}
sumaNumeros(numeros);
