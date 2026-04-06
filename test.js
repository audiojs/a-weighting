import test from 'node:test'
import { strict as assert } from 'node:assert'
import { a, b, c, d, m, z } from './index.js'

let EPS = 1e-2

test('all weightings ≈ 1 at 1000 Hz', () => {
	assert.ok(Math.abs(a(1000) - 1) < EPS, `a(1000) = ${a(1000)}`)
	assert.ok(Math.abs(b(1000) - 1) < EPS, `b(1000) = ${b(1000)}`)
	assert.ok(Math.abs(c(1000) - 1) < EPS, `c(1000) = ${c(1000)}`)
	assert.ok(Math.abs(d(1000) - 1) < EPS, `d(1000) = ${d(1000)}`)
	assert.ok(Math.abs(m(1000) - 1) < EPS, `m(1000) = ${m(1000)}`)
	assert.equal(z(1000), 1)
})

test('a-weighting attenuates low and high frequencies', () => {
	assert.ok(a(100) < a(1000))
	assert.ok(a(20) < a(100))
	assert.ok(a(16000) < a(4000))
})

test('z-weighting is always 1', () => {
	assert.equal(z(20), 1)
	assert.equal(z(1000), 1)
	assert.equal(z(20000), 1)
})
