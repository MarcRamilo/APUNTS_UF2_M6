// <!-- FA EL NÚMERO FACTORIAL -->
// <!-- EX 5! = 5*(4)*(3)*(2)*(1)  -->
// function factorial(n){
//     if (n === 0){
//         return 1;
//     } else{
//         return n * factorial(n - 1);
//     }
// }
function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

console.log(factorialRecursivo(4));