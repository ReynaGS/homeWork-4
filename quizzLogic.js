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
    // incrementar el score
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
    // incrementar el score
  });
}
function moveToQ4() {}

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

//        then  start Var = timeLeft, and
//        procceed to display var questionOne ,
//        if questionOne === correct,
//        then count++ and display next question,
//        else, display "wrong!"and next question.
//
//       Ask following question , apply same conditions as before.

//       repeat until questionFive is answer or until the time is up.

//       At this point Display quizz is over, ask user for its initials
//       display score.
//
//       store score and initials with highscores
//
//
//       ** all this while time is counting down from 7500 msecs **

//   else display "come back when you're ready"

//      Questions to ask and possible answers:
//           - create variables for questions.

//     1- var questionOne =  "What does HTML Stand for?" ;
//           - var q1A = "HeyTypeMe";
//           - var q2B = "HyperTex Main Lenguage";
//           - var q3C = "Hypertext Markup Language";

//       If questionOne === q3C,true, ++score, else - 10 seconds time ?};

//     2- var questionTwo = "How is an HTML Element define?";

//           -var q2A = "<tagname> Content </tagname>";
//           -var q2B = "tagname = value";
//           -var q2c = "<tagname /content>";

//       If questionTwo === q2A,true, ++score, else ?};

//     3- var questionThree = "How are HTML headings define?";

//           - var q3A = "<h1> to <h6>";
//           - var q3B = "<p1> to <p6>";
//           - var q3C = "<head> </head>";

//     If questionThree === q3A,true, ++score, else ?};

//     4- var questionFour = "What defines de body of a HTML document?"
//          - var q4A = "<body>";
//          - var q4B = "<html>";
//          - var q4C = "<head>";

//     If questionFour === q4A,true, ++score, else ?};

//     5-  var questionFive = "A paragraph always starts on a new line?:;
//         - var q5A = "True";
//         - var q5B = "False";
//     If questionFive === q5A,true, ++score, else ?};
