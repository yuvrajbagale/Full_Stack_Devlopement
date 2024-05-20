const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0);
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js courese",
    price: 2999,
  },
  {
    itemName: "py courese",
    price: 9999,
  },
  {
    itemName: "ruby courese",
    price: 999,
  },
  {
    itemName: "c++ courese",
    price: 3999,
  },
];

const priceToPey = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPey);
