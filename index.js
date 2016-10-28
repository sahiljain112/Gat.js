var Gat =
	module.exports = {
		sum: (...args) => {
			var result = 0;
			var err = new Error("One of the arguments is Invalid.");
			for (val of args) {
				switch (typeof val) {
					case "number":
						result += val;
						break;
					case "string":
						var num = parseInt(val);
						if (!isNaN(num)) {
							result += num;
						} else {
							throw err;
						}
						break;
					case "object":
						if (Array.isArray(val)) {
							for (val2 of val) {
								result += Gat.sum(val2);
							}
						}
						break;
					default:
						throw err;
				}
			}
			return result;
		},
		average: (arr) => {
			if (!Array.isArray(arr)) {
				throw new Error('Input is not an array.');
			}
			var result = Gat.sum(arr) / [].concat.apply([], arr).length;
			return result;
		},
		factorial: (n) => {
			var result = 1;
			for (var i = 1; i <= n; i++) {
				result *= i;
			}
			return result;
		}
	}
