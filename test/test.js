var Gat = require('../index.js');

var arr = [1, 2, 3, [4, 5]];
var n = 5;
var nStr = "13";
console.log("Sum of (arr, n, nStr) -> ([1, 2, 3, [4, 5]], 5, \"13\") Correspondingly: " + Gat.sum(arr, n, nStr));
console.log("Average of arr = [1, 2, 3, [4, 5]]: " + Gat.average(arr));
console.log("Factorial of n = 5: " + Gat.factorial(n));
console.log("Sigma: i = 3 to 5, i ^ 2: " + Gat.sigma(3, 5, (i) => {
	return (i * i);
}));
console.log("Quadratic solution for (a, b, c) -> (1, -1, -2): " + Gat.quadratic(1, -1, -2));
