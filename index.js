var Gat =
	module.exports = {
		sum: (arr) => {
			var ret = 0;
			for (var i = 0; i < arr.length; i++) {
				ret += arr[i];
			}
			return ret;
		}
		factorial: (n) => {
			var ret = 1;
			for (var i = 1; i <= n; i++) {
				ret *= i;
			}
			return ret;
		}
	}
