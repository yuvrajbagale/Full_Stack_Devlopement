// for each

const coding = ["js", "ruby", "py", "c++"];

// basic
// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    lgName: "javascript",
    lgfileName: "js",
  },
  {
    lgName: "Python",
    lgfileName: "py",
  },
  {
    lgName: "ruby",
    lgfileName: "rb",
  },
];
myCoding.forEach((item) => {
  //   console.log(item.lgName);
  console.log(item.lgName);
});
