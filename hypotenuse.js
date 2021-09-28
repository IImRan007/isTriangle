const inputSide = document.querySelectorAll(".input-side");
const checkHypotenuseBtn = document.querySelector("#check-hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
  const sum = a * a + b * b;
  return sum;
}

function calculateHypotenuse() {
  const sumOfSquares = calculateSumOfSquares(
    Number(inputSide[0].value),
    Number(inputSide[1].value)
  );
  const hypotenuseLength = Math.sqrt(sumOfSquares);

  if (!sumOfSquares) {
    output.innerText = "PLease input all the values";
  } else {
    output.innerText = `The length of the hypotenuse is ${hypotenuseLength.toFixed(
      2
    )}`;
  }
}

checkHypotenuseBtn.addEventListener("click", calculateHypotenuse);
