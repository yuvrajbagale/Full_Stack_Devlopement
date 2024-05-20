// fetch("https://api.github.com/users/yuvrajbagale").then().catch().finally();
// /create a promises
//
const promisesOne = new Promise((resolve, reject) => {
  //Do an async task
  //DB calls, Cryptography, network
  setTimeout(() => {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
});

promisesOne.then(() => {
  console.log("promises consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async 2 resolved");
});

const promisesThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "abc@example.com" });
  }, 1000);
});

promisesThree.then(function (user) {
  console.log(user);
});

const promisesFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "yuvraj", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

promisesFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("the promise is etther resolved or rejected"));

// async await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javscript", password: "123" });
    } else {
      reject("Error : Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const responce = await promiseFive;
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
