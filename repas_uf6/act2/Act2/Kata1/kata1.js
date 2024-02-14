// Kata #1. Suma dels elements positius d’un array
// Implementa la funció sumPositiveElements(Array) que rep un array d'enters com a argument i retorna la suma total dels elements positius.

// function sumPositiveElements(arr) {
//   // Escriu aquí la teva solució
// }
// Tests:

// sumPositiveElements([]); // 0
// sumPositiveElements([1, 2, 3, 4, 5]); // 15
// sumPositiveElements([1, -2, 3, 4, 5]); // 13
// sumPositiveElements([-1, 2, 3, 4, -5]); // 9
// sumPositiveElements([-1, -2, -3, -4, -5]); // 0
function sumPositiveElements(arr){
   //Implementa la funció sumPositiveElements(Array) que rep un array d'enters com a argument 
   //i retorna la suma total dels elements positius.
   if(arr.length === 0){
    return 0;
   }
   let sum=0;
   for (let i=0;i<arr.length;i++){
      if (arr[i]>0) {
         sum+=arr[i];
      }
   }
   return sum;
};
module.exports = sumPositiveElements;
