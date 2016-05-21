var assert = require('assert');
var almost = require('almost-equal');
var w = require('./');

assert.almost = function (x, y) {
	var EPSILON = 10e-3;
	if (!almost(x, y, EPSILON)) assert.fail(x, y,
		`${x} ≈ ${y}`, '≈');

	return true;
};


assert.almost(w.a(1000), 1);
assert.almost(w.b(1000), 1);
assert.almost(w.c(1000), 1);
assert.almost(w.d(1000), 1);
assert.almost(w.z(1000), 1);
assert.almost(w.itu(1000), 1);