var Gat =
	module.exports = {
		sum: () => {
			var result = 0;
			for (val of arguments) {
				// var err = new Error(`Argument number ${args.indexOf(val)} isn't valid.`);
				console.log(val);
				switch (typeof val) {
					case "number":
						console.log("NUMBER: " + val);
						result += val;
						break;
					case "string":
						console.log("STRING: " + val);
						var num = parseInt(val);
						if (!isNaN(num)) {
							result += num;
						}
						break;
					case "object":
						console.log(`OBJECT`);
						console.log(val);
						if (Array.isArray(val)) {
							console.log("ARRAY");
							for (val2 of val) {
								result += Gat.sum(val2);
							}
						}
						break;
					default:
						throw new Error();
				}
				return result;
			}
		},
		average: (arr) => {
			var result = Gat.sum(arr) / arr.length;
			return result;
		},
		factorial: (n) => {
			var result = 1;
			for (var i = 1; i <= n; i++) {
				result *= i;
			}
			return result;
		},
		test: (n) => {
			console.log(this);
		}
	}
