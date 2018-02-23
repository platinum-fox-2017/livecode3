'use strict';

const Robot = require('./robot.js')

class BayMax extends Robot {
	constructor(name, purpose) {
		super(name, purpose);
	}

	heal() {
		console.log(`Hi, I am BayMax, how may I help you?`);
	}
}

module.exports = BayMax;