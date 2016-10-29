var Gat = require('../index.js');

var arr = [1, 2, 3, [4, 5]];
var n = 5;
var nStr = "13";
var c = new Gat.Complex(3, 4).add(new Gat.Complex(5, -2));
var cStr = "Re: " + c.x + " Im: " + c.y;
console.log("\nSum of (arr, n, nStr) -> ([1, 2, 3, [4, 5]], 5, \"13\") Correspondingly: " + Gat.sum(arr, n, nStr));
console.log("\nAverage of arr = [1, 2, 3, [4, 5]]: " + Gat.average(arr));
console.log("\nFactorial of n = 5: " + Gat.factorial(n));
console.log("\nSigma: i = 3 to 5, i ^ 2: " + Gat.sigma(3, 5, (i) => {
	return (i * i);
}));
console.log("\nQuadratic solution for (a, b, c) -> (1, -1, -2): " + Gat.quadratic(1, -1, -2));
console.log("\nAdding Complex number (3 + 4i) with Complex number (5 - 2i) (Code: (new Gat.Complex(3, 4).add(new Gat.Complex(5, -2)))) (Note: this code returns an object, I took out the real and imaginary part in order to print them.): " + cStr)
console.log("\nChecking wheather 73 is prime or not (Code: Gat.isPrime(73)): " + Gat.isPrime(73));
console.log("\nCube root of 8: " + Gat.cbrt(8));
console.log("\nGCD of (64, 56): " + Gat.gcd(64, 56));
