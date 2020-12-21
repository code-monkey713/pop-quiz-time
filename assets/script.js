// variables and object for this project
const instruct = document.getElementById('instruction');
const pageOne = document.getElementById('page-1');
const pageTwo = document.getElementById('page-2');
const pageThree = document.getElementById('page-3');
const pageFour = document.getElementById('page-4');
const pageFive = document.getElementById('page-5');
const pageEnd = document.getElementById('page-end');
const textProgress = document.getElementById('textStatus');
const quest1Btn = document.getElementById('question1');
const quest2Btn = document.getElementById('question2');
const quest3Btn = document.getElementById('question3');
const quest4Btn = document.getElementById('question4');
const quest5Btn = document.getElementById('question5');
const startOver = document.getElementById('btnOver');
const timerEl = document.getElementById('timer');
let secondsLeft = 60;
let score = 0;
const formProgress = document.getElementById('progressBar');
const quizAnswer = ['answer1-4', 'answer2-1', 'answer3-1', 'answer4-4', 'answer5-4'];

const nameEl = document.getElementById('initials');
const highScoreEl = document.getElementById('highScore');

// function for setting the timer
function setTime() {
  var timerInterval = setInterval(function() {
    timerEl.classList.remove('d-none');
    secondsLeft--;
    timerEl.textContent = 'Timer: ' + secondsLeft;
    if(secondsLeft === 0) {
      timerEl.classList.add('d-none');
      clearInterval(timerInterval);
    }
  }, 1000);
};

// code to run when the quiz starts
const callStart = document.getElementById('start');
callStart.onclick = () => {
  event.preventDefault();
  setTime();
  instruct.classList.add('d-none');
  pageOne.classList.remove('d-none');
  quest1Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:0%');
  formProgress.setAttribute('aria-valuenow', '0');
};

// question 1 answered
const quest1 = document.getElementById('question1');
quest1.onclick = () => {
  event.preventDefault();
  const answerto1 = document.querySelector("[name=answer1]:checked");
  const choice1 = answerto1.value;
  if (quizAnswer.includes(choice1)) {
    score += 10;
  } else {
    secondsLeft -= 10;
  }
  localStorage.setItem('answerto1', answerto1.value);
  pageOne.classList.add('d-none');
  quest1Btn.classList.add('d-none');
  pageTwo.classList.remove('d-none');
  quest2Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:20%');
  formProgress.setAttribute('aria-valuenow', '20');
};

// question 2 answered
const quest2 = document.getElementById('question2');
quest2.onclick = () => {
  event.preventDefault();
  const answerto2 = document.querySelector("[name=answer2]:checked");
  const choice2 = answerto2.value;
  if (quizAnswer.includes(choice2)) {
    score += 10;
  } else {
    secondsLeft -= 10;
  }
  localStorage.setItem('answerto2', answerto2.value);
  pageTwo.classList.add('d-none');
  quest2Btn.classList.add('d-none');
  pageThree.classList.remove('d-none');
  quest3Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:40%');
  formProgress.setAttribute('aria-valuenow', '40');
};

// question 3 answered
const quest3 = document.getElementById('question3');
quest3.onclick = () => {
  event.preventDefault();
  const answerto3 = document.querySelector("[name=answer3]:checked");
  const choice3 = answerto3.value;
  if (quizAnswer.includes(choice3)) {
    score += 10;
  } else {
    secondsLeft -= 10;
  }
  localStorage.setItem('answerto3', answerto3.value);
  pageThree.classList.add('d-none');
  quest3Btn.classList.add('d-none');
  pageFour.classList.remove('d-none');
  quest4Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:60%');
  formProgress.setAttribute('aria-valuenow', '60');
};

// question 4 answered
const quest4 = document.getElementById('question4');
quest4.onclick = () => {
  event.preventDefault();
  const answerto4 = document.querySelector("[name=answer4]:checked");
  const choice4 = answerto4.value;
  if (quizAnswer.includes(choice4)) {
    score += 10;
  } else {
    secondsLeft -= 10;
  }
  localStorage.setItem('answerto4', answerto4.value);
  pageFour.classList.add('d-none');
  quest4Btn.classList.add('d-none');
  pageFive.classList.remove('d-none');
  quest5Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:80%');
  formProgress.setAttribute('aria-valuenow', '80');
};

// question 5 answered
const quest5 = document.getElementById('question5');
quest5.onclick = () => {
  event.preventDefault();
  const answerto5 = document.querySelector("[name=answer5]:checked");
  const choice5 = answerto5.value;
  if (quizAnswer.includes(choice5)) {
    score += 10;
  } else {
    secondsLeft -= 10;
  };
  localStorage.setItem('answerto5', answerto5.value);
  pageFive.classList.add('d-none');
  quest5Btn.classList.add('d-none');
  pageEnd.classList.remove('d-none');
  startOver.classList.remove('d-none');
  const scoreTable = document.getElementById('highScore');
  scoreTable.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:100%');
  formProgress.setAttribute('aria-valuenow', '100');
  timerEl.classList.add('d-none');
  clearInterval(secondsLeft);
};

// restarting the quiz
const startAgain = document.getElementById('btnOver');
startAgain.onclick = () => {
  location.reload();
};

// end user submit initials and score to be saved on local storage
const buttonSubmit = document.getElementById('form-submit');
buttonSubmit.onclick = () => {
  event.preventDefault();
  const name = nameEl.value.trim();
  if (!name) {
    alert("Please enter your intials!");
    return;
  };
  localStorage.setItem('name', name);
  localStorage.setItem('score', score);
};