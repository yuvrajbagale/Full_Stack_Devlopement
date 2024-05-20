//Object literal
function multiplayBy5(num) {
  return num * 5;
}

multiplayBy5.power = 2;

console.log(multiplayBy5(5));
console.log(multiplayBy5.power);
console.log(multiplayBy5.prototype);

// this means this ne bulaya

//new key worlds

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
  console.log(`increment price is ${this.score}`);
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
tea.increment();
