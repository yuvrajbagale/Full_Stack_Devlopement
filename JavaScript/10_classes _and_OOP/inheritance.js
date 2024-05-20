class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Couser added by ${this.username}`);
  }
}

const chai = new Teacher("Chai", "chai@email.com", "123");

chai.logMe();

const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof Teacher);
