// // let numbers: number[] = [2, 3, 3, 4, 6, 5];

// // for (let i = 0; i < numbers.length; i++) {
// // 	if (numbers[i] % 2 === 0) {
// // 		{
// // 			numbers.splice(i, 1);
// // 			i--;
// // 		}
// // 	}
// // }

// // console.log(numbers);
// // [2,3,4]
// // [3,4]
// //[3]

// map => return same length array
// filter => return same length or less
// foreach => return nothing

let numbers: number[] = [2, 3, 3, 4, 6, 5, 45, 28, 1000, 10000633];

// // [even,odd]

// function updatedArray(arr: number[]) {
// 	let updatedArray = arr.map((number) => {
// 		if (number % 2 === 0) {
// 			return "even";
// 		} else {
// 			return "odd";
// 		}
// 	});
// 	return updatedArray;
// }
// console.log(updatedArray(numbers));

// // [2,3,3,4)

// const func = () => {
// 	return 2 + 2;
// };

// let numb = func();
// console.log("🚀 ~ file: index.ts:44 ~ numb:", numb);

let addNumbers = numbers.filter((item)) => {
    if (item %2 != 0) {
        return true;
    }
}
console.log(addNumbers);
console.log("Original Array",Array);



