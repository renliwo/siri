var inquirer = require("inquirer");

var questions = require("../config/questions");

module.exports = inquirer.prompt(questions);
