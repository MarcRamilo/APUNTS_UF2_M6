// Exercici 3.1
// Crea una funció que, donat un array de nombres, retorni la suma d'aquests nombres fent ús de for...of.

const numeros = [1,2,3,4,5,6,7,8,9,10];

function sumaNumeros(numeros) {
    let suma = 0;
    for (const numero of numeros) {
        suma += numero;
    }
    return suma;
}
sumaNumeros(numeros);

const sumaNumeros2 = numeros.reduce((acc, numero) => acc + numero, 0);
sumaNumeros2;
