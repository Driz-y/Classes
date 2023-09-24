//* Basic Types
var num: number = 101; // number type
let userName: String = "Emad Ahmad"; // string type
let isMarried: boolean = false; // boolean type
let isNull: null = null; // null type
let isUndefined: undefined = undefined; // undefined type
let isVoid: void = undefined; //  void type can be saved with undefined
let isAny: any = 101; // any type can be saved with any type
let isUnknown: unknown = "String"; // unknown type can be saved with any but can be defined by data received
function returnError(): never {
	throw new Error("Any Error");
} // Never type for Error
//*
//* Object Types
let student: {
	// Object or Any Can be used but defined values are mostly used
	name1: string;
	email: string;
	phone: number;
} = {
	name1: "Emmad",
	email: "<em.usmani@live.com>",
	phone: 1234567890,
};

let student2: { object } = {
	name: "Emmad",
	email: "<em.usmani@live.com>",
	phone: 1234567890,
};
//*

//* Array Types
let data: number[] = [1, 2, 3, 4, 5, 6]; // Number array type
let data1: string[] = ["Emmad", "Usmani", "Ali"]; // String array type
let tuple: [string, number, boolean] = ["Emmad", 101, true]; // Tuple type used to defined each array type in the same sequence and the values are fixed
//*
//* Union Types
let unionType: string | number = 101; // Union type can be used with two or more types
let unionType1: string | number | boolean = 101; // Union type can be used with two or more types
type SHAPE = {
	area: number;
};
type CIRCLE = {
	size: string;
};
let newShape: SHAPE | CIRCLE = {
	area: 100,
	size: "100",
};

let newShape2: SHAPE & CIRCLE = { area: 100, size: "100" }; // intersection  type
//*

//*  Contact Form
import { ContactForm } from "./types/types";

let newContact: ContactForm = {
	name: " Emad",
	email: "<em.usmani@live.com>",
	budget: 10000,
	message: "I need your help",
};
console.log(newContact);

// *

//* Enums   used to define const values such as admin or user

enum COLORS {
	RED,
	GREEN,
	BLUE,
}

const whatColor: number = COLORS.RED;
console.log("WhatColor", whatColor);

enum USERROLE {
	ADMIN,
	USER,
}

let newAdmin = {
	role: USERROLE.ADMIN,
	name: "Emad",
};

let newUser = {
	role: USERROLE.USER,
	name: "Yaseen",
};

//* Generics   mostly used type in coding general type

function swap<T>(arr: T[]): T[] {
	return [arr[1], arr[0]];
}

const result: number[] = swap<number>([10, 20]);
const result2: string[] = swap<string>(["naveed", "yaseen"]);
const result3: boolean[] = swap<boolean>([true, false]);

console.log("Result", result);
console.log("Result2", result2);
console.log("Result3", result3);

//*

//* Interfaces // only works in objects
import { StudentC } from "./types/types";
import { TeacherA } from "./types/types";

let newobj: StudentC & TeacherA = {
	phone: 1234567890,
	university: "UofA",
	name: "Emmad",
	email: "<EMAIL>",
};
console.log(newobj);

// //*

import { Todos } from "./types/types";
import { TodosResponse } from "./types/types";

let newTodo: Todos = {
	id: 1,
	todo: "Do something nice for someone I care about",
	completed: true,
	userId: 26,
};
console.log(newTodo.todo);

let newResponse: TodosResponse = {
	todos: [newTodo],
	total: 1,
	skip: 0,
	limit: 1,
};

console.log(newResponse.total);

//*

import { products } from "./types/types";

let apple: products = {
	id: 1,
	title: "iPhone 9",
	description: "An apple mobile which is nothing like apple",
	price: 549,
	discountPercentage: 12.96,
	rating: 4.69,
	stock: 94,
	brand: "Apple",
	category: "smartphones",
	thumbnail: "...",
	images: ["...", "...", "..."],
};

console.log(apple);

import { productData } from "./types/types";

let pData: productData = {
	total: 100,
	skip: 0,
	limit: 30,
};

console.log(pData.total);
