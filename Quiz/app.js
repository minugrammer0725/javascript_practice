const correctAnswers = ["B", "A", "B", "A"];

const form = document.querySelector(".quiz-form ");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 100 / correctAnswers.length;
    }
  });

  // console.log(`Total Score: ${score}`);

  // take me to the top
  scrollTo(0, 0);

  // show correct percentage
  let i = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${i}%`;
    i++;
    if (i > score) {
      clearInterval(timer);
    }
  }, 5);

  // display the result
  result.classList.remove("d-none");
});
