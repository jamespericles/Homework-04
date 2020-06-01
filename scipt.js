// Variables
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const startEl = document.getElementById("start");
const timerEl = document.getElementById("timer");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const score = document.getElementById("score");
let isWaiting = false;
let isRunning = false;
let seconds = 120;
let finalCountdown = false;
let runningQuestion = 0;

// Quiz questions
const questions = [
  {
    question: "What is the symbol to comment in JavaScipt?",
    answer: {
      choice1: "//",
      choice2: "/* */",
      choice3: "<-- -->",
      choice4: "/*/*/",
    },
    correctAnswer: "1",
  },
  {
    question: "What does HTML stand for?",
    answer: {
      choice1: "Hyper Text Meta Language",
      choice2: "Hyper Time Meta Language",
      choice3: "Hyper Text Markup Language",
      choice4: "Language Markup Hyper Text",
    },
    correctAnswer: "3",
  },
  {
    question: "What file extension should CSS files have?",
    answer: {
      choice1: ".css",
      choice2: ".cs",
      choice3: ".csss",
      choice4: ".cssc",
    },
    correctAnswer: "1",
  },
  {
    question: "What is JavaScript meant to add to a webpage?",
    answer: {
      choice1: "Functionality",
      choice2: "Stylings",
      choice3: "Elements such as <div> and <body>",
      choice4: "Words",
    },
    correctAnswer: "1",
  },
  {
    question: "What is the root tag of HTML?",
    answer: {
      choice1: "<body>",
      choice2: "<html>",
      choice3: "<title>",
      choice4: "<head>",
    },
    correctAnswer: "2",
  },
];

// Render questions
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
  choice3.innerHTML = q.choice3;
  choice4.innerHTML = q.choice4;
}

if (startEl) {
  startEl.addEventListener("click", startQuiz);
}

// Create timer
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

// Start quiz
function startQuiz() {
  startEl.style.display = "none";
  renderQuestion();
  gameTimer();
  gameTimer.style.display;
  quiz.style.display;
  countdownTimer = setInterval(gameTimer, 1000);
}
