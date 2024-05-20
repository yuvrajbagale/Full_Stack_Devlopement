// Array.prototype.extraProperty = "yvvraj";

// const myNewArray = [1, 2, 3, 4, 5];
// for (let v in myNewArray) {
//   if (myNewArray.hasOwnProperty(v)) console.log(v);
// }

/* Display the original properties of an array.
A. Concept -> By using prototype we can insert new properties in an array, but those will not be considered as original properties. 
So, to get original properties just add a check to array elements using hasOwnProperty syntax.
*/

// Array.prototype.customForEachOne = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

Array.prototype.customForEachTwo = function (callback, thiscontext) {
  if (typeof callback !== "function") {
    throw `not a function`;
  }
  const length = this.length;

  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thiscontext, this[i], i, this);
    }
    i++;
  }
};

const myArr = [1, 2, 3, 4, 5];

function logElement(elements, index) {
  console.log(`${index} : ${elements}`);
}

myArr.customForEachTwo(logElement);
