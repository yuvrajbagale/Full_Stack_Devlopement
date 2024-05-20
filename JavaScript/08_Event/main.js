// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }

// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("click inside the ul");
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl click");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("google click");
//   },
//   false
// );

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
  },
  false
);
// removeIt.parentNode.removeChild(removeIt);
