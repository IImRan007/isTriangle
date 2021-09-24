const areaInputs = document.querySelectorAll(".input-area");
const checkOutputBtn = document.querySelector("#check-area-btn");
const output = document.querySelector("#output");

function triangleArea(base, height) {
  const area = (1 / 2) * (base * height);
  return area;
}

function calculateArea() {
  const area = triangleArea(
    Number(areaInputs[0].value),
    Number(areaInputs[1].value)
  );
  output.innerText = `Area is: ${area}cm²`;
}

checkOutputBtn.addEventListener("click", calculateArea);
