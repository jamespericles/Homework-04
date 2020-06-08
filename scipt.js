// Variables
const quiz = document.getElementById("quiz");
const questionEl = document.getElementsByClassName("choice");
const answerEl = document.getElementById("answer");
const startEl = document.getElementById("start");
const timerEl = document.getElementById("timer");
const choice1 = document.getElementById("1");
const choice2 = document.getElementById("2");
const choice3 = document.getElementById("3");
const choice4 = document.getElementById("4");
const scoreEl = document.getElementById("score");
const header = document.getElementById("main-header");
const endGame = document.getElementById("endGame");
const initialsLocation = document.getElementById("initialsLocation");
const scoreLocation = document.getElementById("scoreLocation");
const timeLocation = document.getElementById("timeLocation");

let isWaiting = false;
let isRunning = false;
let seconds = 120;
let finalCountdown = false;
let runningQuestion = 0;
let score = 0;
let countdownTimer;
let highScore = localStorage.getItem("highScore");

// Quiz questions
let questions = [
  {
    question: "What is the symbol to comment in JavaScipt?",
    choice1: "//",
    choice2: "/* */",
    choice3: "<-- -->",
    choice4: "/*/*/",
    correct: "1",
    incorrect: "2",
    incorrect: "3",
    incorrect: "4",
  },
  {
    question: "What does HTML stand for?",
    choice1: "Hyper Text Meta Language",
    choice2: "Hyper Time Meta Language",
    choice3: "Hyper Text Markup Language",
    choice4: "Language Markup Hyper Text",
    correct: "3",
    incorrect: "1",
    incorrect: "2",
    incorrect: "4",
  },
  {
    question: "What file extension should CSS files have?",
    choice1: ".css",
    choice2: ".cs",
    choice3: ".csss",
    choice4: ".cssc",
    correct: "1",
    incorrect: "2",
    incorrect: "3",
    incorrect: "4",
  },
  {
    question: "What is JavaScript meant to add to a webpage?",
    choice1: "Functionality",
    choice2: "Stylings",
    choice3: "Elements",
    choice4: "Words",
    correct: "1",
    incorrect: "2",
    incorrect: "3",
    incorrect: "4",
  },
  {
    question: "What is the root tag of HTML?",
    choice1: "body",
    choice2: "html",
    choice3: "title",
    choice4: "head",
    correct: "2",
    incorrect: "1",
    incorrect: "3",
    incorrect: "4",
  },
];
if (startEl) {
  startEl.addEventListener("click", startQuiz);
}

// Create score board
scoreEl.innerHTML = score;

// Create timer
function gameTimer() {
  let minutes = Math.round((seconds - 30) / 60);
  let remainingSeconds = seconds % 60;
  remainingSeconds.toPrecision(2);
  if (remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }
  document.getElementById("timer").innerHTML = minutes + ":" + remainingSeconds;
  if (finalCountdown) {
    scoreRender();
    endQuiz();
  } else {
    isWaiting = true;
    seconds--;
  }
  if (minutes == 0 && remainingSeconds == "00") {
    endQuiz();
    scoreRender();
  }
}

// Start quiz
function startQuiz() {
  startEl.style.display = "none";
  header.style.display = "none";
  for (let i = 0; i < questionEl.length; i++) {
    questionEl[i].style.display = "inline-block";
  }
  renderQuestion();
  quiz.style.display = "block";
  gameTimer(seconds);
  countdownTimer = setInterval(gameTimer, 1000);
}
const lastQuestion = questions.length - 1;

// Render questions
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choice1.innerHTML = q.choice1;
  choice2.innerHTML = q.choice2;
  choice3.innerHTML = q.choice3;
  choice4.innerHTML = q.choice4;
}

// check answer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    scoreEl.innerHTML = score;
    runningQuestion++;
  } else {
    // answer is incorrect
    seconds = seconds - 10;
    gameTimer(seconds);
    renderQuestion();
    alert("Try again!");
  }
  count = 0;
  if (runningQuestion <= lastQuestion) {
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(gameTimer);
    scoreRender();
  }
}
function formSubmit() {
  const initials = document.getElementById("initials").value;
  initialsLocation.textContent = initials;
  initialsLocation.setAttribute("class", "row");
  localStorage.setItem("initials", initials);
}
// End quiz elements
function endQuiz() {
  timerEl.style.display = "none";
}
function scoreRender() {
  endGame.style.display = "block";
  quiz.style.display = "none";
  choice1.style.display = "none";
  choice2.style.display = "none";
  choice3.style.display = "none";
  choice4.style.display = "none";
  clearInterval(gameTimer);

  // Store score in users localStorage
  if (highScore !== null) {
    if (score > highScore) {
      localStorage.setItem("highScore", score);
    }
  } else {
    localStorage.setItem("highScore", score);
  }
  if (countdownTimer !== null) {
    localStorage.setItem("time", countdownTimer);
  }
  scoreLocation.textContent = score;
  scoreLocation.setAttribute("class", "row");
  timeLocation.innerText = timer;
  timeLocation.setAttribute("class", "row");
}
