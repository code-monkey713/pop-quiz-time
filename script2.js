let highScoreEL = document.getElementById('highScore');
//console.log(highScoreEL);
let gameTimerEl = document.getElementById('timer');
//console.log(timer);
let mainEl = document.getElementById('stage');
//console.log(timer);

initialState(); 

function initialState() {
  const scoreBtn = document.createElement('button');
  const textScoreBtn = document.createTextNode('View High Scores');
  scoreBtn.appendChild(textScoreBtn);
  highScoreEL.appendChild(scoreBtn);
  highScoreBtn = scoreBtn;

  mainEl.textContent += 'Click on the button to start the quiz!';
  // extra line break
  const paragraph = document.createElement('p');
  mainEl.appendChild(paragraph);
  //start startBtn
  const startBtn = document.createElement('startBtn');
  const textBtn = document.createTextNode('Start the quiz!');
  startBtn.setAttribute('class', 'btn btn-primary startBtn');
  startBtn.setAttribute('id', 'startBtn');
  startBtn.appendChild(textBtn);
  //console.log(startBtn);
  mainEl.appendChild(startBtn);
}

function clearContent() {
  mainEl.innerHTML = '';
  // need a way to hide the high score area after the start quiz button is pressed and the div will not resize
  // highScoreEL.innerHTML = '';
}

function setTimer() {
  // console.log('The timer is starting!');
  let secondsLeft = 3;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    gameTimerEl.textContent = 'Time: ' + secondsLeft;
    //console.log(secondsLeft);
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      clearInterval(secondsLeft);
      gameTimerEl.textContent = '';
      //sendMessage();
      console.log('Out of time!');
    }
  }, 1000);
}

function setQuestions () {
  // console.log('This is setting the questions.');
  const question = document.createElement('h1');
  const text = document.createTextNode('This is question 1!');
  mainEl.appendChild(text);

  const lineOne = document.createElement('p');
  mainEl.appendChild(lineOne);

  const answer1Btn = document.createElement('button');
  const answer1Text = document.createTextNode('Answer one to question!');
  //answer1Btn = setAttribute('id', 'answer1');
  answer1Btn.appendChild(answer1Text);
  mainEl.appendChild(answer1Btn);

  const lineTwo = document.createElement('p');
  mainEl.appendChild(lineTwo);

  const answer2Btn = document.createElement('button');
  const answer2Text = document.createTextNode('Answer two to question!');
  //answer1Btn = setAttribute('id', 'answer1');
  answer2Btn.appendChild(answer2Text);
  mainEl.appendChild(answer2Btn);

  const lineThree = document.createElement('p');
  mainEl.appendChild(lineThree);

  const answer3Btn = document.createElement('button');
  const answer3Text = document.createTextNode('Answer three to question!');
  //answer1Btn = setAttribute('id', 'answer1');
  answer3Btn.appendChild(answer3Text);
  mainEl.appendChild(answer3Btn);

  const lineFour = document.createElement('p');
  mainEl.appendChild(lineFour);

  const answer4Btn = document.createElement('button');
  const answer4Text = document.createTextNode('Answer four to question!');
  //answer1Btn = setAttribute('id', 'answer1');
  answer4Btn.appendChild(answer4Text);
  mainEl.appendChild(answer4Btn);
}

function popQuiz() {
  clearContent();
  //setTimer();
  setQuestions();
}

startBtn.addEventListener('click', popQuiz);