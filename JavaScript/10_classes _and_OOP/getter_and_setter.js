class User {
  constructor(email, passworld) {
    this.email = email;
    this.passworld = passworld;
  }
  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    return (this._email = value);
  }

  get passworld() {
    return `${this._passworld}hitesh`;
  }
  set passworld(value) {
    this._passworld = value;
  }
}

const yuvi = new User("yuvi@gmail.com", "abc123");
console.log(yuvi.passworld);
console.log(yuvi.email);
