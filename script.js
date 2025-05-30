const startBtn = document.getElementById('start-button');
const questionText = document.getElementById('question');
const choicesDiv = document.getElementById('choices');
const timer = document.getElementById('timer');
const scoreDisplay = document.getElementById('score-display');

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

const questions = [
  {
    question: "🧠 Which number comes after 21, 34, 55?",
    choices: ["60", "68", "89", "74"],
    answer: "89"
  },
  {
    question: "👀 What color was in the center square? (Imagine red)",
    choices: ["Blue", "Green", "Red", "Yellow"],
    answer: "Red"
  },
  {
    question: "🐴 Every cow in the barn slept through the storm except the...",
    choices: ["Horse", "Pig", "Dog", "Farmer"],
    answer: "Horse"
  }
];

function showQuestion() {
  clearInterval(timerInterval);
  if (currentQuestion >= questions.length) {
    questionText.textContent = "🎉 Quiz Complete!";
    choicesDiv.innerHTML = "";
    startBtn.textContent = "Restart";
    scoreDisplay.textContent = `Your Score: ${score}`;
    return;
  }

  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => {
      if (choice === q.answer) {
        score += 10;
      }
      currentQuestion++;
      showQuestion();
    };
    choicesDiv.appendChild(btn);
  });

  timeLeft = 10;
  timer.textContent = `⏱️ Time: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `⏱️ Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      currentQuestion++;
      showQuestion();
    }
  }, 1000);
}

startBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  scoreDisplay.textContent = "";
  showQuestion();
};
