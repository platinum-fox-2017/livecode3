'use strict';

const WallE = require('./walle.js')
const BayMax = require('./baymax.js')
const AutoBot = require('./autobot.js')

class RobotFactory {
	static produceRobot(robot, count) {
		let arrRobot = [];

		for (let i = 1; i <= count; i++) {
			switch (robot) {
				case "wall-e" :
					arrRobot.push(new WallE('Wall-E', 'worker'))
					break;

				case "baymax" :
					arrRobot.push(new BayMax('BayMax', 'medic'))
					break;

				case "autobot" :
					arrRobot.push(new AutoBot('AutoBot', 'defender'))
					break;
			}
		}

		return arrRobot;
	}
}

module.exports = RobotFactory;