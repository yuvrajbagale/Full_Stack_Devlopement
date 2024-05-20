/*
const object = {
  rocket: "🚀",
  home: "🏡",
};
// for (k in object) {
//   console.log(object[k]);
// }

// string, number, bigint, boolean, null, undefine, symobol

const obj1 = {
  rocket: "🚀",
  fuel: 2,
  config: {
    name: "mars",
  },
};

obj1.fuel = 200;
obj1["Year"] = 2000;

// console.log(obj1);

// part 2

const obj2 = new Object(); // Constructor
obj2.redbook = "📕";
// obj2.bluebook = "📘";
obj2.myvalue = "1 read book";

// console.log(obj2);

// part 3
const powers = {
  fly: true,
  cordinate: Math.random() + 2,
};

const obj3 = Object.create(powers);
// console.log(obj3);
// console.log(obj3.cordinate);
// console.log(Object.getPrototypeOf(obj3));

// part 4
const obj4 = Object.create({});
Object.defineProperty(obj4, "book", {
  // icon: "📖",
  get: () => "📘",
  enumerable: true,
});

// console.log(obj4);
// console.log(Object.getPrototypeOf(obj4));
// console.log(obj4.book);

// for (k in obj4) {
//   console.log("value is:", k);
// }

//part 5
// let pen = "yuvraj";

const obj5 = {
  comics: "marvel",
  pen: "",
  printComic: function () {
    this.pen += "🖊️✒️🖋️"; // this is your object property
    // this is refer to the parent objects
    console.log(this);
    return this;
  },
  // printaComic: () => {
  //   // this.pen += "🖊️✒️🖋️"; // arrow function dont have acces to this keyworld dons't work doest have contacts
  //   console.log(this);
  // },
};

console.log(obj5.printComic().printComic().printComic());

// console.log(obj5.printComic());
// console.log(obj5.printaComic());
*/

// Practices Object

const obj = {
  foo: 1,
  propertyIsEnumerable() {
    return false;
  },
};
const obj1 = obj.propertyIsEnumerable("foo");
const obj2 = Object.prototype.propertyIsEnumerable.call(obj, "foo");

console.log(obj1);
console.log(obj2);
