var secondsLeft = 15;

function printer(message) {
  var timeLeftButton = document.getElementById('timeleft');
  timeLeftButton.innerText = message;
}

function setTime() {
  var timerInterval = setInterval(function () {
    console.log('done' + secondsLeft);
    secondsLeft--;
    printer('Time ' + secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

setTime();

//  define dependencies

//     var score = 0 ;
//     function for time;
//     function for total score
//
//

//  TO START THE GAME

//       Ask user:  "would like to take HTML Quizz now?;
//    -window.confirm("Would you like to take the quizz now?");-

//   if user confirms,

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

//       If questionOne === q3C,true, ++score, else ?};

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
