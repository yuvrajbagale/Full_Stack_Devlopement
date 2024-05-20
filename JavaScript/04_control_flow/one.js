// if

// if (true) {
// }
// if (false) {
// }

// <, >, <=, >=, !=, ==, ===
// !== negative singe check

// const temp = 41;

// if (temp >= 40) {
//   console.log("less than 50");
// } else {
//   console.log("temp is greater than 50");
// }

// scope

// const score = 200;

// if (score > 100) {
//   let power = "fly"; // var is Globle scope
//   console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

// const balance = 1000;

// if (balance > 500) console.log("test"); //do not this

// nesting / multipe condition
// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

// reallife use
const userloggedIn = true;
const debitCard = true;
const loggedInFromEmail = true;
const loggedInFromGoogle = false;
if (userloggedIn && debitCard) {
  console.log("user is logged in and debit card is available");
}

if (loggedInFromEmail || loggedInFromGoogle) {
  console.log("User loged in");
}
