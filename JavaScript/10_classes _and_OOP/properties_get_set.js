// function base getter and setters

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
}

const chai = new User("User@gmail.com", "User");
console.log(chai.email);
