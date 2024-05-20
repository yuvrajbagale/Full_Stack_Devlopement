// Array

const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]); // zero base index

// copy opreation in javascript making shallow copy and deep copy
// shallow copy - making same refernaces
// deep copy - dones not share same refernaces

//Methods

const myArr2 = new Array();
// console.log(myArr);

//Proprty and Prototype
// we have access prototype

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

//Array Methods
/*
myArr.push(6); // add value in last
myArr.push(7);
// myArr.pop();// delete last element of array */
// myArr.unshift(9); // add start value in array
// myArr.shift(); // remove elemnt in array in frist

// console.log(myArr.includes(9)); // false - boolean datatype return
// console.log(myArr.indexOf(9)); // returns the first occurance index position
// console.log(myArr.indexOf(3));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3); // not includeing 3

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1, 3); // orignal array manupulate orinale array
// console.log("c", myArr);
// console.log(myn2);

function rev(str) {
  let array = str.split("");
  let revArray = array.reverse();
  let revStr = revArray.join();
  return revStr;
}

console.log(rev("rohan"));
