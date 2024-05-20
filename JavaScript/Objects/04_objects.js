// Singleton and constructor

const tinderUser = new Object();
// console.log(tinderUser); // singleton object

tinderUser.id = "1123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

const regulerUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      fristname: "yuvraj",
      lastName: "Bagele",
    },
  },
};
// console.log(regulerUser.fullname.userfullname.fristname);
// console.log(regulerUser.fullname?.userfullname.fristname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};

// const obj3 = {
//   obj1,
//   obj2,
// };

// console.log(obj3); not work

// object assign() static method copies all enumerable own properties for one and more source object to a target objects. its return modified traget object
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2 }; // sprad opreter
// console.log(obj3);

//database se value
const users = [
  {
    id: 1,
    email: "y@gmail.com",
  },
  {
    id: 1,
    email: "u@gmail.com",
  },
  {
    id: 1,
    email: "v@gmail.com",
  },
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 1,
    email: "yva@gmail.com",
  },
];

// users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//important methods

//Api objects destucering

const course = {
  coursename: "js i hindi",
  price: "999",
  courseInstuctor: "hitesh",
};

// course.courseInstuctor

const { courseInstuctor: instructor } = course;

// console.log(courseInstuctor);
console.log(instructor);

// reactjs

// const navbar = ({ company }) => {

// };
// navbar((company = "hitesh"));

//API

// {
//   "name": 'yuvraj',
//   "coursename": 'js inn hindi',
//   'price': 'free'
// }

// fetch mothed in api

[{}, {}, {}];
