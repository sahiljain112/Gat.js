var Gat =
	module.exports = {
		sum: () => {
			var result = 0;
				switch (typeof val) {
					case "number":
						result += val;
						break;
					case "string":
						var num = parseInt(val);
						if (!isNaN(num)) {
							result += num;
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
				}
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
		}
	}
