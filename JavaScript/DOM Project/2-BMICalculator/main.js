const form = document.querySelector("form");
// const height = parseInt(document.querySelector("#height").value); // this is

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
  // massege display

  const bmiValue = parseFloat(results.innerText);
  if (bmiValue < 18.5) {
    msg.innerText = "Underweight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    msg.innerText = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    msg.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    msg.innerText = "Obese";
  }
});
