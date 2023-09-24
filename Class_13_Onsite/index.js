"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Basic Types
var num = 101; // number type
let userName = "Emad Ahmad"; // string type
let isMarried = false; // boolean type
let isNull = null; // null type
let isUndefined = undefined; // undefined type
let isVoid = undefined; //  void type can be saved with undefined
let isAny = 101; // any type can be saved with any type
let isUnknown = "String"; // unknown type can be saved with any but can be defined by data received
function returnError() {
    throw new Error("Any Error");
} // Never type for Error
//*
//* Object Types
let student = {
    name1: "Emmad",
    email: "<em.usmani@live.com>",
    phone: 1234567890,
};
let student2 = {
    name: "Emmad",
    email: "<em.usmani@live.com>",
    phone: 1234567890,
};
//*
//* Array Types
let data = [1, 2, 3, 4, 5, 6]; // Number array type
let data1 = ["Emmad", "Usmani", "Ali"]; // String array type
let tuple = ["Emmad", 101, true]; // Tuple type used to defined each array type in the same sequence and the values are fixed
//*
//* Union Types
let unionType = 101; // Union type can be used with two or more types
let unionType1 = 101; // Union type can be used with two or more types
let newShape = {
    area: 100,
    size: "100",
};
let newShape2 = { area: 100, size: "100" }; // intersection  type
let newContact = {
    name: " Emad",
    email: "<em.usmani@live.com>",
    budget: 10000,
    message: "I need your help",
};
console.log(newContact);
// *
//* Enums   used to define const values such as admin or user
var COLORS;
(function (COLORS) {
    COLORS[COLORS["RED"] = 0] = "RED";
    COLORS[COLORS["GREEN"] = 1] = "GREEN";
    COLORS[COLORS["BLUE"] = 2] = "BLUE";
})(COLORS || (COLORS = {}));
const whatColor = COLORS.RED;
console.log("WhatColor", whatColor);
var USERROLE;
(function (USERROLE) {
    USERROLE[USERROLE["ADMIN"] = 0] = "ADMIN";
    USERROLE[USERROLE["USER"] = 1] = "USER";
})(USERROLE || (USERROLE = {}));
let newAdmin = {
    role: USERROLE.ADMIN,
    name: "Emad",
};
let newUser = {
    role: USERROLE.USER,
    name: "Yaseen",
};
//* Generics   mostly used type in coding general type
function swap(arr) {
    return [arr[1], arr[0]];
}
const result = swap([10, 20]);
const result2 = swap(["naveed", "yaseen"]);
const result3 = swap([true, false]);
console.log("Result", result);
console.log("Result2", result2);
console.log("Result3", result3);
let newobj = {
    phone: 1234567890,
    university: "UofA",
    name: "Emmad",
    email: "<EMAIL>",
};
console.log(newobj);
let newTodo = {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
};
console.log(newTodo.todo);
let newResponse = {
    todos: [newTodo],
    total: 1,
    skip: 0,
    limit: 1,
};
console.log(newResponse.total);
let apple = {
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
let pData = {
    total: 100,
    skip: 0,
    limit: 30,
};
console.log(pData.total);
