module.exports = function itu (f) {
	var f2 = f*f;

	var h1 = -4.737338981378384e-24*f2*f2*f2 + 2.043828333606125e-15*f2*f2 - 1.363894795463638e-7*f2 + 1;
	var h2 = 1.306612257412824e-19*f2*f2*f - 2.118150887518656e-11*f2*f + 5.559488023498642e-4*f;

	return 8.128305161640991 * 1.246332637532143e-4 * f / Math.sqrt(h1*h1 + h2*h2);
};
