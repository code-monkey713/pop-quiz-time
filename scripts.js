var startBtn = document.querySelector('.startBtn');
var timeEl = document.querySelector('.timer');
var mainEl = document.querySelector('.stagingArea');

function popQuiz() {

var secondsLeft = 5;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = 'Time: ' + secondsLeft;
    console.log(secondsLeft);
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  //timeEl.textContent = " ";

  //var imgEl = document.createElement("img");

  // imgEl.setAttribute("src", "images/pexels-lukas-628241.jpg");
  // mainEl.appendChild(imgEl);
  var paraEl = document.createElement('p');
  paraEl.textContent = "This is the end of the test!";
  mainEl.appendChild(paraEl);
  //alert('This is the end of the test!');
}

setTime();

  // // The array of questions for our quiz game.
  // var questions = [
  //   { q: "The sky is blue.", a: "t" },
  //   { q: "There are 365 days in a year.", a: "t" },
  //   { q: "There are 42 ounces in a pound.", a: "f" },
  //   { q: "The Declaration of Independence was created in 1745.", a: "f" },
  //   { q: "Bananas are vegetables.", a: "f" }
  // ];

  // // We start the game with a score of 0.
  // var score = 0;

  // // Loop over every question object
  // for (var i = 0; i < questions.length; i++) {
  //   // Display current question to user and ask OK/Cancel
  //   var answer = confirm(questions[i].q);

  //   // Compare answers
  //   if ((answer === true && questions[i].a === "t") ||
  //     (answer === false && questions[i].a === "f")) {
  //     // Increase score
  //     score++;
  //     // alert("Correct!");
  //   }
  //   else {
  //     // alert("Wrong!");
  //   }

  //   // Show total at end
  //   alert("You got " + score + "/" + questions.length);
  // }
}

startBtn.addEventListener('click', popQuiz);