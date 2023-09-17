import * as inquirer from "inquirer";

async function calculator() {
	const questions = [
		{
			type: "input",
			name: "num1",
			message: "Enter first number:",
			validate: function (value) {
				var valid = !isNaN(parseFloat(value));
				return valid || "Please enter a number";
			},
			filter: Number,
		},
		{
			type: "input",
			name: "num2",
			message: "Enter second number:",
			validate: function (value) {
				var valid = !isNaN(parseFloat(value));
				return valid || "Please enter a number";
			},
			filter: Number,
		},
		{
			type: "list",
			name: "operation",
			message: "Choose the operation:",
			choices: ["+", "-", "*", "/"],
		},
	];

	const answers = await inquirer.prompt(questions);
	let result;

	switch (answers.operation) {
		case "+":
			result = answers.num1 + answers.num2;
			break;
		case "-":
			result = answers.num1 - answers.num2;
			break;
		case "*":
			result = answers.num1 * answers.num2;
			break;
		case "/":
			if (answers.num2 !== 0) {
				result = answers.num1 / answers.num2;
			} else {
				console.log("Error! Division by zero.");
				return;
			}
			break;
	}

	console.log(`The result is: ${result}`);
}

calculator();
