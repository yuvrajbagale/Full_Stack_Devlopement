// function sayMyName() {
//   console.log("Y");
//   console.log("U");
//   console.log("V");
//   console.log("R");
//   console.log("A");
//   console.log("J");
// }

// sayMyName(); //sayMyName is referance and sayMyName() exucutions

// function addTwoNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// const result = addTwoNumber(5, 3);
// console.log("Result:", result);

function addTwoNumber(num1, num2) {
  //   let result = num1 + num2; //scope
  //   return result;
  //   console.log(result);
  return num1 + num2;
}
const result = addTwoNumber(3, 5);

// console.log("Result:", result);

function logginUserMasseage(username) {
  if (!username /*username === undefined/*/) {
    return `Please Enter the username`;
  }
  return `${username} just logged in`;
}

// console.log(logginUserMasseage("yuvraj"));
// console.log(logginUserMasseage()); // undefined

// immediately invoked function expressions(IIFE)

// function chai() {
//   console.log("DB connected");
// }

// chai();

// right two IIFE with parameter
(function chai() {
  console.log("DB connected");
})();

((name) => {
  console.log(`DB connected two ${name}`);
})("yuvraj");
