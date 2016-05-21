module.exports = function b (f) {
	var f2 = f*f;
	return 1.019764760044717 * 148840000 * f*f2 /
	((f2 + 424.36) * Math.sqrt(f2 + 25122.25) * (f2 + 148840000));
};
