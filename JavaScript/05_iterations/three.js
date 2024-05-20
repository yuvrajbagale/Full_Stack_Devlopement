// for of
// ["", "", ""];
// [{},{},{}]
// const arr = [1, 2, 3, 4, 5];
// for (const i of arr) {
//   console.log(i);
// }

// const greetings = "Hello World";

// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

//maps

const map = new Map();
map.set("In", "India");
map.set("USA", "United States of America");
map.set("fr", "France");
// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObj = {
  game1: "NFS",
  game2: "GTA",
  game3: "FIFA",
};

// for (const [key, value] of myObj) {
//   console.log(key, ":-", value);
// }
// not working in objects
