// Sums all the numbers in the array. If array contains an item that is not a number, throws an error.
Array.prototype.sum = function() {
		for (var j = 0; j < this.length; j++) {
			if (typeof this[j] != "number") {
				throw new Error("Could not calculate sum of item of type " + typeof this[j] + " at position " + j);
			}
		}
		var sum = 0;
		for (var i = 0; i < this.length; i++) {
			sum += this[i];
		}
		return sum;
	}
	// Uses the sum() function and divides by the length of the array to get the average. throws an error if array contains something that is not a number.
Array.prototype.avg = function() {
		for (var j = 0; j < this.length; j++) {
			if (typeof this[j] != "number") {
				throw new Error("Could not calculate average of item of type " + typeof this[j] + " at position " + j);
			}
		}
		var avg = this.sum() / this.length;
		return avg;
	}
	// Calculates the factorial of n, if fits all requierements to do a factorial.
function factorial(n) {
	if (typeof n != "number") {
		throw new Error("Could not calculate factorial of input of type " + typeof n);
	} else if (n != Math.floor(n)) {
		throw new Error("Could not calculate factorial of a fraction / a number with a decimal point.");
	} else if (n < 1) {
		throw new Error("Could not calculate factorial of a number smaller than 1.")
	} else {
		if (n == 1) {
			return 1;
		} else {
			return (n * factorial(n - 1));
		}
	}
}
// Get the highest number in an array.
Array.prototype.max = function() {
		for (var i = 0; i < this.length; i++) {
			if (typeof this[i] != "number") {
				throw new Error("Could not calculate max of item of type " + typeof this[i] + " at position " + i);
			}
		}
		var maxed = Math.max.apply(null, this);
		return maxed;
	}
	// Get the smallest number in an array.
Array.prototype.min = function() {
		for (var i = 0; i < this.length; i++) {
			if (typeof this[i] != "number") {
				throw new Error("Could not calculate min of item of type " + typeof this[i] + " at position " + i);
			}
		}
		var minimized = Math.min.apply(null, this);
		return minimized;
	}
	// Sort an array from the smallest number to the biggest number.
Array.prototype.sortDown = function() {
		for (var i = 0; i < this.length; i++) {
			if (typeof this[i] != "number") {
				throw new Error("Could not sort item of type " + typeof this[i] + " at position " + i);
			}
		}
		var helper = this;
		var finalArr = [];
		for (var i = 0; i < helper.length; i++) {
			var minim = helper.min();
			finalArr.push(minim);
			helper[helper.indexOf(minim)] = Infinity;
		}
		return finalArr;
	}
	// Sort an array from the biggest number to the smallest number.
Array.prototype.sortUp = function() {
		for (var i = 0; i < this.length; i++) {
			if (typeof this[i] != "number") {
				throw new Error("Could not sort item of type " + typeof this[i] + " at position " + i);
			}
		}
		var helper = this;
		var finalArr = [];
		for (var i = 0; i < helper.length; i++) {
			var maxi = helper.max();
			finalArr.push(maxi);
			helper[helper.indexOf(maxi)] = -1 * Infinity;
		}
		return finalArr;
	}
	// Get median of an array.
Array.prototype.median = function() {
		for (var j = 0; j < this.length; j++) {
			if (typeof this[j] != "number") {
				throw new Error("Could not calculate median of item of type " + typeof this[j] + " at position " + j);
			}
		}
		var helper = this.sortUp();
		if (helper.length % 2 == 1) {
			return helper[Math.floor(helper.length / 2)];
		} else {
			return (helper[Math.floor(helper.length / 2)] + helper[Math.ceil(helper.length / 2) - 1]) / 2;
		}
	}
	// Turn RGB to hexadecimal notation.
function rgbToHex(red, green, blue) {
	if (red > 255 || red < 0 || isNan(red) || blue > 255 || blue < 0 || isNan(blue) || green > 255 || green < 0 || isNan(green)) {
		throw new Error("Couldn't calculate Hexadcimal Notation of values entered");
	}
	var hRed = red.toString(16);
	var hBlue = blue.toString(16);
	var hGreen = green.toString(16);
	var str = "#" + hRed + hBlue + hGreen;
	str = str.toUpperCase();
	return str;
}
// Turn a given a number to a given base.
function valToBaseNotTen(val, base) {
	if (isNaN(val) || isNan(base)) {
		throw new Error("Couldn't calculate the given base form of the values entered");
	}
	return val.toString(base);
}
// Turn a given number of a given base to decimal.
function valInBaseToDec(val, baseNotTen) {
	if (isNaN(val) || isNan(baseNotTen)) {
		throw new Error("Couldn't calculate the given base form of the values entered");
	}
	return parseInt(val.toString(), baseNotTen);
}
// Decide weather a number is prime or not.
function isPrime(num) {
	if (isNaN(num)) {
		throw new Error("Couldn't calculate if the given value of type " + typeof num + " is prime or not")
	}
	var primes = [];
	var divisors = [];
	for (var i = 2; i <= num; i++) {
		if (num % i === 0) {
			divisors.push(i);
		}
	}
	if (divisors.length == 1) {
		return true;
	} else {
		return false;
	}
}
// Return an array of all the factors of a given number.
function factorize(n) {
	if (isNaN(n)) {
		throw new Error("Given value is not a number. (" + typeof n + ").")
	}
	if (isPrime(n)) {
		return n;
	}
	var arr = [];
	for (var i = 2; i <= n; i++) {
		if (n % i == 0 && isPrime(i)) {
			arr.push(i);
			break;
		}
	}
	arr.push(n / arr[0]);
	if (!isPrime(arr[arr.length - 1])) {
		arr.push(factorize(arr[arr.length - 1]));
		arr.splice(arr.length - 2, 1);
	}
	var final = arr.reduce(function(a, b) {
		return a.concat(b);
	}, [])
	return final;
}
