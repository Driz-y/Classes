import inquirer from "inquirer";

async function userInput() {
	{
		const result = await inquirer.prompt([
			{
				type: "input",
				name: "name",
				message: "enter your name",
			},
			{
				type: "input",
				name: "age",
				message: "enter your age",
			},
		]);
		console.log("result", result);
	}
}
userInput();
console.log("after input");

// console.log("before pdf create");

// async function createPdf() {
// 	await // logic pdf create 2min

// 	console.log("pdf file is created");
// }

// createPdf();
// console.log("after pdf created");

// const createwordFile = () => {};

// createwordFile();
// console.log("create word file");
