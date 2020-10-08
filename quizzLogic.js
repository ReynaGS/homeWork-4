// Set up Global Variables, to be used later in the code.
var secondsLeft = 0;
var startQuizBtn;
var sectionOne;
var questionOneDiv;
var questionTwoDiv;
var questionThreeDiv;
var questionFourDiv;
var questionFiveDiv;
var lastDiv;
var resultsDiv;
var score = 0;
var timerInterval;

// Display Timer Value
function printer(message) {
  var timeLeftButton = document.getElementById('timeleft');
  timeLeftButton.innerText = message;
}
// Display Score

function scoreTrack(message) {
  var spanScore = document.querySelector('#displayHighscore');
  spanScore.innerText = 'Your Final Score Is ' + message;
}

// Timer Function
function setTime() {
  timerInterval = setInterval(function () {
    console.log('done' + secondsLeft);
    secondsLeft--;
    printer('Time ' + secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      secondsLeft = 0;
      printer('Time ' + secondsLeft);
      moveToEnd();
    }
  }, 1000);
}

function startQuiz(event) {
  sectionOne.hidden = true;
  questionOneDiv.hidden = false;
  secondsLeft = 20;
  setTime();
  // Assigning event to button 1
  var questionOne = document.querySelector('#b1q1');
  questionOne.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ2();
    // decrement time by 10 sec
  });
  // Assigning event to button 2

  var questionTwo = document.querySelector('#b2q1');
  questionTwo.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ2();
  });

  // Assigning event to button 3

  var questionThree = document.querySelector('#b3q1');
  questionThree.addEventListener('click', function () {
    score = score + 20;
    moveToQ2();
  });
}
function moveToQ2() {
  questionOneDiv.hidden = true;
  questionTwoDiv.hidden = false;

  // Assigning event to button 1
  var questionOne = document.querySelector('#b1q2');
  questionOne.addEventListener('click', function () {
    score = score + 20;
    moveToQ3();
  });
  // Assigning event to button 2

  var questionTwo = document.querySelector('#b2q2');
  questionTwo.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ3();
  });

  // Assigning event to button 3

  var questionThree = document.querySelector('#b3q2');
  questionThree.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ3();
  });
}

function moveToQ3() {
  questionTwoDiv.hidden = true;
  questionThreeDiv.hidden = false;

  var questionOne = document.querySelector('#b1q3');
  questionOne.addEventListener('click', function () {
    score = score + 20;
    moveToQ4();
  });
  // Assigning event to button 2

  var questionTwo = document.querySelector('#b2q3');
  questionTwo.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ4();
  });

  // Assigning event to button 3

  var questionThree = document.querySelector('#b3q3');
  questionThree.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ4();
  });
}
function moveToQ4() {
  questionThreeDiv.hidden = true;
  questionFourDiv.hidden = false;

  var questionOne = document.querySelector('#b1q4');
  questionOne.addEventListener('click', function () {
    score = score + 20;
    moveToQ5();
  });
  // Assigning event to button 2

  var questionTwo = document.querySelector('#b2q4');
  questionTwo.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ5();
  });

  // Assigning event to button 3

  var questionThree = document.querySelector('#b3q4');
  questionThree.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToQ5();
  });
}

function moveToQ5() {
  questionFourDiv.hidden = true;
  questionFiveDiv.hidden = false;

  var questionOne = document.querySelector('#b1q5');
  questionOne.addEventListener('click', function () {
    score = score + 20;
    moveToEnd();
  });
  // Assigning event to button 2

  var questionTwo = document.querySelector('#b2q5');
  questionTwo.addEventListener('click', function () {
    secondsLeft = secondsLeft - 10;
    moveToEnd();
  });
}
function moveToEnd() {
  questionOneDiv.hidden = true;
  questionTwoDiv.hidden = true;
  questionThreeDiv.hidden = true;
  questionFourDiv.hidden = true;
  questionFiveDiv.hidden = true;
  lastDiv.hidden = false;
  resultsDiv.hidden = true;
  clearInterval(timerInterval);
  scoreTrack(score);
}
// Function to load content inside after Dom is completed loaded.
window.onload = main;
function main() {
  startQuizBtn = document.querySelector('#startquiz');
  startQuizBtn.addEventListener('click', startQuiz);
  sectionOne = document.querySelector('#quizzStarter');
  questionOneDiv = document.querySelector('#question1');
  questionTwoDiv = document.querySelector('#question2');
  questionThreeDiv = document.querySelector('#question3');
  questionFourDiv = document.querySelector('#question4');
  questionFiveDiv = document.querySelector('#question5');
  lastDiv = document.querySelector('#lastDiv');
  resultsDiv = document.querySelector('#resultsDiv');
}
