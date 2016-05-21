module.exports = function a (f) {
	var f2 = f*f;
	return 1.2588966 * 148840000 * f2*f2 /
	((f2 + 424.36) * Math.sqrt((f2 + 11599.29) * (f2 + 544496.41)) * (f2 + 148840000));
};
