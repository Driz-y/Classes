console.log("Class # 8 Onsite 8/20/2023");

// var i: number = 10;
// var result: number = 2 + 4 + ++i;
// var result: number = 2 + 4 + i++;

// // ++i;
// // i--;
// // --i;
// console.log("i", i);
// console.log("result", result);
//  // while Loop
// while (i > 10) {
// 	console.log("Naveed", i);

// 	--i;
// }
// //for Loop
// for (let index = 10; index < 20 + 1; index++) {
// 	console.log("Naveed", index);
// }

// // do while loop
// var i: number = 50;
// do {
// 	console.log("naveed");
// 	i++;
// } while (i <= 30);

//write a typescript program , that calculate sum of even numbers between 1 - 100

// let sum: number = 0;
// let list: number[] = [];

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		sum += 1;
// 		list.push(i);
// 		// console.log("i", i);
// 	}
// }
// console.log("i", list, sum);
// console.log("sum", sum, list);
// write a ts program , that calculate sum of odd numbers between 1 - 100
// let sum: number = 0;
// let list: number[] = [];

// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 !== 0) {
// 		sum = sum + 1;
// 		list.push(i);
// 		// console.log("i", i);
// 	}
// }
// console.log("sum", sum, list);

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 == 0) {
// 		sum += i;
// 	}
// }
// console.log(sum);

// var array: number[] = [20, 40, 60, 80, 100];

// function sumArray () {

// }

// create a function that takes an array of numbers as parameter. use a while loop to calculate and return the sum of all the numbers in the array
// function sumArray(array: number[]): number {
// 	let sum = 0;
// // 	let i = 0;
// // 	while (i < array.length) {
// // 		sum += array[i];
// // 		i++;
// // 	}
// // 	return sum;
// // }
// // console.log("result of function", sumArray([10, 20, 30, 40]));

//  Create a function that takes a positive integar as parameter and
//  a while loop to calculate and return the factorial of that number.

function factorial0(num1: number) {
	if (num1 > 0) {
		let result: number = num1;

		let multiplier = num1 - 1;
		while (multiplier > 0) {
			result *= multiplier;
			multiplier--;
		}
		console.log(result);

		return;
	}
}
console.log("number is zero or -ve");

factorial0(5);

// Other way to write factorial function using while loop

function factorial1(num: number): number {
	let result = 1;
	while (num > 1) {
		result *= num;
		num -= 1;
	}
	return result;
}
let num1 = 5;
console.log(`Factorial of ${num1} is: `);
console.log(factorial1(num1));
