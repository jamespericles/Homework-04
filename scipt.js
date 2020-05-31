const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const startEl = document.getElementById("start");
const timerEl = document.getElementById("timer");
let isWaiting = false;
let isRunning = false;
let seconds = 120;
let finalCountdown = false;
let countdownTimer;

const quizQuestions = [
  {
    question: "INSERT QUESTION HERE?",
    answer: {
      1: "INSERT ANSWER HERE",
      2: "INSERT ANSWER HERE",
      3: "INSERT ANSWER HERE",
      4: "INSERT ANSWER HERE",
    },
    correctAnswer: "INSERT 1-4",
  },
  {
    question: "INSERT QUESTION HERE?",
    answer: {
      1: "INSERT ANSWER HERE",
      2: "INSERT ANSWER HERE",
      3: "INSERT ANSWER HERE",
      4: "INSERT ANSWER HERE",
    },
    correctAnswer: "INSERT 1-4",
  },
];

function gameTimer() {
  let minutes = Math.round((seconds - 30) / 60);
  let remainingSeconds = seconds % 60;
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById("timer").innerHTML = minutes + ":" + remainingSeconds;
  if (finalCountdown) {
    clearInterval(countdownTimer);
  } else {
    isWaiting = true;
    seconds--;
  }
}
countdownTimer = setInterval(gameTimer, 1000);
