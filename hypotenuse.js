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

  output.innerText = `The length of the hypotenuse is ${hypotenuseLength}`;
}

checkHypotenuseBtn.addEventListener("click", calculateHypotenuse);
