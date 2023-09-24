import inquirer from "inquirer";
try {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "Score",
            message: "Enter Your Marks Between 0 to 100",
        },
    ]);
    if (answer.Score > 100 || answer.Score < 0) {
        console.log("enter a valid number");
    }
    else
        answer.Score < 100 || answer.Score < 0;
    console.log("you are pass");
}
catch (error) {
    console.log("error", error);
}
// async function userInput() {
// 	{
// 		const result: QuestionAnswer = await inquirer.prompt([
// 			{
// 				type: "input",
// 				name: "Name",
// 				message: "enter your name",
// 			},
// 			{
// 				type: "input",
// 				name: "Age",
// 				message: "enter your age",
// 			},
// 			{
// 				type: "input",
// 				name: "City",
// 				message: "enter your city",
// 			},
// 			{
// 				type: "Number",
// 				name: "RollNumber",
// 				message: "enter your RollNumber",
// 			},
// 		]);
// 		console.log("result", result);
// 	}
// }
// userInput();
// // console.log("before pdf create");
// // async function createPdf() {
// // 	await // logic pdf create 2min
// // 	console.log("pdf file is created");
// // }
// // createPdf();
// // console.log("after pdf created");
// // const createwordFile = () => {};
// // createwordFile();
// // console.log("create word file");
