var Gat =
	module.exports = {
		sum: (arr) => {
			var ret = 0;
			for (var i = 0; i < arr.length; i++) {
				ret += arr[i];
			}
			return ret;
		}
	}
