'use strict';

const Robot = require('./robot.js')

class AutoBot extends Robot {
	constructor(name, purpose) {
		super(name, purpose);
	}

	defend() {
		console.log(`AutoBot, let's roll!`);
	}
}

module.exports = AutoBot;