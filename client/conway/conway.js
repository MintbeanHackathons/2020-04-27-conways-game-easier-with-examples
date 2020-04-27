import {ConwaysGameEngine, defaultRules}, from '@monarchwadia/conways-game-engine';

const config = {
	rowsize: 10,
	colSize: 10,
	rules: defaultRules(),
	allowMultipeRuleMatches: false
}

const engine = ConwaysGameEngine(config);

