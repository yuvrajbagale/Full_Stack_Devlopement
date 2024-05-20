// let myName = "Yuvraj     ";

// console.log(myName.turelength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",

  getSpiderPowers: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.yuvraj = function () {
  console.log(`yuvraj is present in all Objects`);
};

Array.prototype.heyYuvraj = function () {
  console.log(`yuvraj says hello`);
};

// heroPower.yuvraj();
// myHeros.yuvraj();
// myHeros.heyYuvraj();
// heroPower.heyYuvraj();

//inheritance

const User = {
  name: "Yuvraj",
  age: 20,
};

const Teacher = {
  makevideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "js Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher: __proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiOurCode    ";

String.prototype.trueLenght = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherUsername.trueLenght();
"yuvraj".trueLenght();
"iceTea".trueLenght();
