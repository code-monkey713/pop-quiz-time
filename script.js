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
let score = 0;
const formProgress = document.getElementById('progressBar');
const quizAnswer = ['answer1-3', 'answer2-1', 'answer3-1', 'answer4-4', 'answer5-4'];

const nameEl = document.getElementById('initials');
const highScoreEl = document.getElementById('highScore');
// let highList = [];

const callStart = document.getElementById('start');
callStart.onclick = () => {
  event.preventDefault();
  instruct.classList.add('d-none');
  pageOne.classList.remove('d-none');
  quest1Btn.classList.remove('d-none');
  // textProgress.textContent.value = 'Part 1 of 5';
  formProgress.setAttribute('style', 'width:20%');
  formProgress.setAttribute('aria-valuenow', '20');
}

const quest1 = document.getElementById('question1');
quest1.onclick = () => {
  event.preventDefault();
  const answerto1 = document.querySelector("[name=answer1]:checked");
  localStorage.setItem('answerto1', answerto1.value);
  
  pageOne.classList.add('d-none');
  quest1Btn.classList.add('d-none');
  pageTwo.classList.remove('d-none');
  quest2Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:40%');
  formProgress.setAttribute('aria-valuenow', '40');
}

const quest2 = document.getElementById('question2');
quest2.onclick = () => {
  event.preventDefault();
  const answerto2 = document.querySelector("[name=answer2]:checked");
  localStorage.setItem('answerto2', answerto2.value);

  pageTwo.classList.add('d-none');
  quest2Btn.classList.add('d-none');
  pageThree.classList.remove('d-none');
  quest3Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:60%');
  formProgress.setAttribute('aria-valuenow', '60');
}

const quest3 = document.getElementById('question3');
quest3.onclick = () => {
  event.preventDefault();
  const answerto3 = document.querySelector("[name=answer3]:checked");
  localStorage.setItem('answerto3', answerto3.value);

  pageThree.classList.add('d-none');
  quest3Btn.classList.add('d-none');
  pageFour.classList.remove('d-none');
  quest4Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:80%');
  formProgress.setAttribute('aria-valuenow', '80');
}

const quest4 = document.getElementById('question4');
quest4.onclick = () => {
  event.preventDefault();
  const answerto4 = document.querySelector("[name=answer4]:checked");
  localStorage.setItem('answerto4', answerto4.value);

  pageFour.classList.add('d-none');
  quest4Btn.classList.add('d-none');
  pageFive.classList.remove('d-none');
  quest5Btn.classList.remove('d-none');
  formProgress.setAttribute('style', 'width:100%');
  formProgress.setAttribute('aria-valuenow', '100');
}


const quest5 = document.getElementById('question5');
quest5.onclick = () => {
  event.preventDefault();
  const answerto5 = document.querySelector("[name=answer5]:checked");
  localStorage.setItem('answerto5', answerto5.value);
  
  pageFive.classList.add('d-none');
  quest5Btn.classList.add('d-none');
  pageEnd.classList.remove('d-none');
  startOver.classList.remove('d-none');
  const scoreTable = document.getElementById('highScore');
  scoreTable.classList.remove('d-none');
}

const startAgain = document.getElementById('btnOver');
startAgain.onclick = () => {
  console.log('This is refreshing the page to start the game over.');
  location.reload();
}

const buttonSubmit = document.getElementById('form-submit');
buttonSubmit.onclick = () => {
  event.preventDefault();
  const name = nameEl.value.trim();
  if (!name) {
    alert("Please enter your intials!");
    return;
  }
  localStorage.setItem('name', name);
  localStorage.setItem('score', score);
}

//   } else if (buttonSubmit.value === 'submit') {
//     const favoriteAnimal = document.querySelector("[name=animal]:checked");
//     localStorage.setItem('favoriteAnimal', favoriteAnimal.value);
//     const cardBody = document.querySelector('.card-body');
//     cardBody.innerHTML = `
//       <h2>Thank you, ${localStorage.getItem('name')}</h2>
//       <p class="lead">We will email you at ${localStorage.getItem('email')} pictures of your favorite animal, the ${localStorage.getItem('favoriteAnimal')}
//       </p>`;

// need to add function for starting the timer and call it here
// const fave = document.getElementById('favorite-animal');
// if (favoriteAnimals.includes(fave.textContent.toLowerCase())) {
//   console.log('The favorite animal is allowed');
// }

// const animals = document.querySelectorAll('[name=animal]');
// const favoriteAnimals = ['cat', 'dog', 'meerkat', 'answer1-4'];
// const fave = document.getElementById('highScore');
// if (favoriteAnimals.includes(fave.textContent.toLowerCase())) {
//   console.log('The favorite animal is allowed');
// }