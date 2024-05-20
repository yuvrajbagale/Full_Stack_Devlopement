/*
=> Data types
=>variables and typeof
=>Date
=>loops
=>Conditions
=>OP
=>indexing
=>Math
=>Object and Array
=>
=>
=>
=>

*/

// let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "jack"];
// console.log(names);
// console.log(names.length); // it will give you lenght
// console.log(names[3]);
// console.log(names[names.length - 1]);

// names[4] = "vinay";
// console.log(names);

// one more way decleraing array

// let namess = new Array("Name 1", "Name 2"); // way of declaring array not recommded
// console.log(namess);

//Push ==> insert new values inside the array
// names.push("Sunny");
// console.log(names);

// Slice
// let a = ["a", "b", "c", "d", "e", "f", "g"];
// console.log(names.slice(1, 6));

// Splice
// let fruits = ["Apple", "Bada Apple", "Chota Apple", "Double Apple"];
// fruits.splice(2, 0, "Kharab Apple", "Achha Apple");
// console.log(fruits);

//Concatenation

//to connect two things

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [9, 10];

// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2, arr3));

// Fill

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr4.fill("yuvraj", 2, 4); // fill the 'yuvraj' names of index 2 and 4
// // console.log(arr4);

// let arr5 = [1, 2, 3, 4, 5];
// arr5.fill("yuvraj", "akshay", 1, 2);
// console.log(arr5);

//include
// let num = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(num.includes(7));

// indexof

// let num = [1, 2, 3, "yuvraj", 4, 5, 6, 7, 8, 9];
// console.log(num.indexOf("yuvraj"));

// isArray()
// let num = [1, 2, 3, "Yuvraj", 4, 5, 6, 7, 8, 9];
// let num1 = "yuvraj";
// console.log(Array.isArray(num1));
// console.log(Array.isArray(num));

//join

// let Array1 = [1, 2, 3, 4, 5, 6, 7];
// let var1 = Array1.join(" 1 ");
// console.log(var1);
// console.log(typeof var1);

//Keys

//For of

// last indexof
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(num.indexOf(9));

// let maths = [1, 4, 9, 16, 25];
// console.log(maths.map(Math.sqrt)); //

// pop

// let maths = [1, 4, 9, 16, 25];

// console.log(maths.pop());
// console.log(maths);

// reverse
// let maths = [1, 2, 3, 4, 5, 6, 7, 9];
// console.log(maths.reverse(16)); // reverser array using reverse functions

// shift()
// let maths = [1, 2, 3, 4, 5, 6, 7, 9];
// console.log(maths.shift()); // remove the first element from an array and return that removed element
// console.log(maths);

//sort

// let names = ["A", "D", "B", "C"];
// console.log(names.reverse(names.sort()));

// let names = ["a", "d", "b", "c"];
// console.log(names.sort());
// console.log(names.reverse(names.sort()));

// unshif
// let fruits = ["Apple", "Bada Apple", "Chotta Apple", "Double Apple"];

// fruits.unshift("Apple 1", "Grapes 2"); // added element in frist  position

// console.log(fruits);

// converting to Array

// let name = "Anurag";
// let array1 = name.split("");
// console.log(array1);

// for of

// let fruit = ["Apple", "Bada Apple", "Chota Apple", "Double Apple"];
// let Upperfruit = [];

// for (const badaletter of fruit) {
//   Upperfruit.push(badaletter.toUpperCase());
// }
// console.log(Upperfruit);

// Break And Continues
// for (let i = 0; i <= 5; i++) {
//   if (i == 3) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

//Array Methods in javascrip and Write a blog on it => Compulsory
