const inputs = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function calculateSumOfTriangles(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfTriangles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );

  if (sumOfAngles === 180) {
    output.innerText = "YaY! The angles form a triangle";
  } else {
    output.innerText = "Sorry! The angles don't form a triangle";
  }
}

checkBtn.addEventListener("click", isTriangle);
