'use strict';

const Robot = require('./robot.js')

class WallE extends Robot {
	constructor(name, purpose) {
		super(name, purpose);
	}

	work() {
		console.log(`Wall-E cleans the planet`);
	}
}

module.exports = WallE;