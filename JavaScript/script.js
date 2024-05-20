// let myHeros = ["thor", "spiderman"];
// let dcHeros = ["batman", "black adam", "superman"];

// let heropower = {
//   thor: "hammer",
//   spiderman: "sling",

//   getSpiderPower: function () {
//     console.log(`Spidy power is ${this.spiderman}`);
//   },
// };

// Object.prototype.yuvraj = function () {
//   console.log(`yuvraj  is present in all objects`);
// };

// myHeros.yuvraj();

// gol :: Find True lenght
// String.prototype.truelength = function () {
//   console.log(`True lenght is ${this.trim().length}`);
// };

// let myName = "yuvraj  ";
// console.log(`Corrent string lenght is ${myName.length}`);
// console.log(myName.truelength());

// what is prototype?

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}

console.log(arr);
