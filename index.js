// A-weighting: attempt to approximate human ear frequency sensitivity
export function a(f) {
	let f2 = f * f
	return 1.2588966 * 148840000 * f2 * f2 /
		((f2 + 424.36) * Math.sqrt((f2 + 11599.29) * (f2 + 544496.41)) * (f2 + 148840000))
}

// B-weighting: attempt to approximate human ear frequency sensitivity at moderate loudness
export function b(f) {
	let f2 = f * f
	return 1.019764760044717 * 148840000 * f * f2 /
		((f2 + 424.36) * Math.sqrt(f2 + 25122.25) * (f2 + 148840000))
}

// C-weighting: attempt to approximate human ear frequency sensitivity at high loudness
export function c(f) {
	let f2 = f * f
	return 1.0069316688518042 * 148840000 * f2 /
		((f2 + 424.36) * (f2 + 148840000))
}

// D-weighting: measuring aircraft noise
export function d(f) {
	let f2 = f * f
	return (f / 6.8966888496476e-5) * Math.sqrt(
		(
			((1037918.48 - f2) * (1037918.48 - f2) + 1080768.16 * f2) /
			((9837328 - f2) * (9837328 - f2) + 11723776 * f2)
		) / ((f2 + 79919.29) * (f2 + 1345600))
	)
}

// ITU-R 468 noise weighting
export function m(f) {
	let f2 = f * f
	let h1 = -4.737338981378384e-24 * f2 * f2 * f2 + 2.043828333606125e-15 * f2 * f2 - 1.363894795463638e-7 * f2 + 1
	let h2 = 1.306612257412824e-19 * f2 * f2 * f - 2.118150887518656e-11 * f2 * f + 5.559488023498642e-4 * f
	return 8.128305161640991 * 1.246332637532143e-4 * f / Math.sqrt(h1 * h1 + h2 * h2)
}

// Z-weighting (zero/flat weighting)
export function z() {
	return 1
}
