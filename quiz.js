const quizForm = document.querySelector(".quiz-form");
const submitQuizBtn = document.querySelector("#btn-submit-quiz");
const quizOutput = document.querySelector("#quiz-output");

const correctAnswers = ["90°", "Right Angled"];

function calculateScore(e) {
  e.preventDefault();
  const data = new FormData(quizForm);
  let index = 0,
    score = 0;

  for (let entry of data.values()) {
    if (entry === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  quizOutput.innerText = `Your Score is ${score}`;
}

submitQuizBtn.addEventListener("click", calculateScore);
