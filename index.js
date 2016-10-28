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
		Complex: (a, b) => {
			this.x = a;
			this.y = b;
			this.multiply = function(c) {
				return new Complex(((this.x * c.x) - (this.y * c.y)), ((this.x * c.y) + (this.y * c.x)));
			}
			this.add = function(c) {
				return new Complex(this.x + c.x, this.y + c.y);
			}
			this.multiplyByN = function(n) {
				return new Complex(this.x * n, this.y * n);
			}
			this.subtract = function(c) {
				return this.add(new Complex(-c.x, -c.y));
			}
			this.divideBy = function(cz) {
				var a = this.x;
				var b = this.y;
				var c = cz.x;
				var d = cz.y;
				var denom = ((c * c) + (d * d));
				var re = (((a * c) + (b * d)) / denom);
				var im = (((b * c) - (a * d)) / denom);
				return new Complex(re, im);
			}
			this.toThePowerOf = function(n) {
				var c = this;
				for (var i = 1; i < n; i++) {
					c = c.multiply(c);
				}
				return c;
			}
			this.getReciprocal = function() {
				var one = new Complex(1, 0);
				return (one.divideBy(this));
			}
		}
	}
