var quizQuestions = [
  {
    question: 'This is question 1',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer two'
  },
  {
    question: 'This is question 2',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer three'
  },
  {
    question: 'This is question 3',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer four'
  },
  {
    question: 'This is question 4',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer one'
  },
  {
    question: 'This is question 5',
    answers: ['true', 'false'],
    correct: 'true'
  },
  {
    question: 'This is question 6',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer two'
  },
  {
    question: 'This is question 7',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer one'
  },
  {
    question: 'This is question 8',
    answers: ['true', 'false'],
    correct: 'false'
  },
  {
    question: 'This is question 9',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer one'
  },
  {
    question: 'This is question 10',
    answers: ['answer one', 'answer two', 'answer three', 'answer four'],
    correct: 'answer one'
  },
  ]


// var startBtn;
// var highScoreBtn;
// var highScoreEL = document.querySelector('.highScore');
// var timeEl = document.querySelector('.timer');
// //var mainEl = document.querySelector('.stagingArea');
// var mainEl = document.getElementById('staging');
// console.log(mainEl.innerHTML);


// function initialState() {

//   const scoreBtn = document.createElement('button');
//   const textScoreBtn = document.createTextNode('View High Scores');
//   //button.setAttribute('class', 'btn btn-primary startBtn');
//   scoreBtn.appendChild(textScoreBtn);
//   highScoreEL.appendChild(scoreBtn);
//   highScoreBtn = scoreBtn;
//   //secondsLeft = 2;
//   // const a = document.createElement('a');
//   // a.setAttribute('href', '#');
//   // const span = document.createElement('span');
//   // span.setAttribute('class', '');
//   // a.appendChild(span);
//   // a.innerHTML += 'View High Score';
//   // document.getElementById('highScore').appendChild(a);

//   mainEl.textContent += 'Click on the button to start the quiz!';

//   // This is to add the line break after the text
//   const paragraph = document.createElement('p');
//   mainEl.appendChild(paragraph);

//   // This is to create the button to start the 
//   const button = document.createElement('button');
//   const textBtn = document.createTextNode('Start the quiz!');
//   button.setAttribute('class', 'btn btn-primary startBtn');
//   button.appendChild(textBtn);
//   mainEl.appendChild(button);
//   startBtn = button;
// }

// initialState(); 

// function popQuiz() {

//   function question () {
//     console.log('This is the question function!');
    
//     const questionEl = document.createElement('p');
//     questionEl.textContent = "Question number one!";
//     //mainEl.appendChild(questionEl);
//     mainEl.innerHTML = questionEl.textContent;
//   }
  
//   function setTime() {
//     let secondsLeft = 30;
//     let timerInterval = setInterval(function () {
//       secondsLeft--;
//       timeEl.textContent = 'Time: ' + secondsLeft;
//       //console.log(secondsLeft);
//       if (secondsLeft === 0) {
//         clearInterval(secondsLeft);
//         //clearInterval(secondsLeft);
//         timeEl.textContent = '';
//         //sendMessage();
//       }
//     }, 1000);
//   }

//   question();

// function clearContent() {
//   mainEl.textContent = '';
//   // need a way to hide the high score area after the start quiz button is pressed and the div will not resize
//   // highScoreEL.textContent = '';
// }

// function sendMessage() {
//   //timeEl.textContent = " ";

//   //var imgEl = document.createElement("img");

//   // imgEl.setAttribute("src", "images/pexels-lukas-628241.jpg");
//   // mainEl.appendChild(imgEl);
//   clearContent();
//   var paraEl = document.createElement('p');
//   paraEl.textContent = "This is the end of the test!";
//   mainEl.appendChild(paraEl);
  
  
//   initialState();
//   //clearContent();
// }

// setTime();
// clearContent();



//   // // The array of questions for our quiz game.
//   // var questions = [
//   //   { q: "The sky is blue.", a: "t" },
//   //   { q: "There are 365 days in a year.", a: "t" },
//   //   { q: "There are 42 ounces in a pound.", a: "f" },
//   //   { q: "The Declaration of Independence was created in 1745.", a: "f" },
//   //   { q: "Bananas are vegetables.", a: "f" }
//   // ];

//   // // We start the game with a score of 0.
//   // var score = 0;

//   // // Loop over every question object
//   // for (var i = 0; i < questions.length; i++) {
//   //   // Display current question to user and ask OK/Cancel
//   //   var answer = confirm(questions[i].q);

//   //   // Compare answers
//   //   if ((answer === true && questions[i].a === "t") ||
//   //     (answer === false && questions[i].a === "f")) {
//   //     // Increase score
//   //     score++;
//   //     // alert("Correct!");
//   //   }
//   //   else {
//   //     // alert("Wrong!");
//   //   }

//   //   // Show total at end
//   //   alert("You got " + score + "/" + questions.length);
//   // }
// }

// startBtn.addEventListener('click', popQuiz);