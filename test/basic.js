'use strict'

const assert = require('assert')
const config = require('../')

describe('basic', function () {
	function isObject(obj) {
		return typeof obj === 'object' && obj !== null
	}

	it('test basic properties of config', function () {
		assert.ok(isObject(config.rules))
	})
})
