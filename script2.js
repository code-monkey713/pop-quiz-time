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
  console.log(startBtn);
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

function popQuiz() {
  clearContent();
  setTimer();
}

startBtn.addEventListener('click', popQuiz);