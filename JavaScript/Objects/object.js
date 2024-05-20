// Singleton => litterale se banta hai to not singleton
// constract se banta hai to singleton
// Object.create; // making singleton

// object literals

// const JsUser = {}; //empty object

// Symbol
const mySym = Symbol("key1");

const JsUser = {
  name: "yuvraj",
  "full name": "Yuvraj Bagale",
  [mySym]: "myke1",
  age: 28,
  gender: "male",
  location: "india",
  email: "example@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Sunday"],
};
console.log(JsUser);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "newEmail@gmail.com";
// Object.freeze(JsUser); // stop to adding values
JsUser.email = "frozen@gmail.com";
// console.log(JsUser);

// Function add to Object

JsUser.greeting = function () {
  console.log(`hello Js Users`);
};
JsUser.greetingTwo = function () {
  console.log(`hello Js Users, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// access all value . only some point use have use [] to access to values
