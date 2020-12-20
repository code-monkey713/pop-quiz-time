const instruct = document.getElementById('instruction');
const start = document.getElementById('startIns');
const pageOne = document.getElementById('page-1');
const pageTwo = document.getElementById('page-2');
const pageThree = document.getElementById('page-3');
const pageFour = document.getElementById('page-4');
const pageFive = document.getElementById('page-5');
const pageEnd = document.getElementById('page-end');
//const textProgress = document.getElementById(textContent('textStatus'));
//console.log(textProgress);
const buttonTwo = document.getElementById('btnQuest2');
const buttonThree = document.getElementById('btnQuest3');
const buttonFour = document.getElementById('qbtnQuest4');
const buttonFive = document.getElementById('btnQuest5');
const buttonEnd = document.getElementById('btnOver');
const nameEl = document.getElementById('initials');
const highScoreEl = document.getElementById('highScore');
let highList = [];
let score;
// const emailEl = document.getElementById('email');
const animals = document.querySelectorAll('[name=animal]');
const formProgress = document.getElementById('form-progress');
const favoriteAnimals = ['cat', 'dog', 'meerkat', 'answer1-4'];

const fave = document.getElementById('highScore');
if (favoriteAnimals.includes(fave.textContent.toLowerCase())) {
  console.log('The favorite animal is allowed');
}
const buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', function (event) {
  event.preventDefault();
  if(buttonStart.value === 'start') {
    console.log('This is start of quiz!');
    start.classList.add('d-none');
    pageOne.classList.remove('d-none');
    buttonStart.classList.add('d-none');
    console.log(buttonTwo);
    buttonTwo.classList.remove('d-none');
    // buttonStart.value = 'question1';
    buttonStart.textContent = 'Submit';
    // textProgress.textContent.value = 'Part 1 of 5';
    formProgress.setAttribute('style', 'width:20%');
    formProgress.setAttribute('aria-valuenow', '20');
    //debugger;
    
    const favoriteAnimal = document.querySelector("[name=animal]:checked");
    localStorage.setItem('favoriteAnimal', favoriteAnimal.value);
    // const cardBody = document.querySelector('.card-body');
    // cardBody.innerHTML = 'You are correct';
  }});

const buttonQuest1 = document.getElementById('question2');
buttonQuest1.addEventListener('click', function (event) {
  event.preventDefault();
  if (buttonStart.value === 'question1') {
    console.log('This is question 2');
    pageOne.classList.add('d-none');
    pageTwo.classList.remove('d-none');
    buttonStart.value = 'question2';
    formProgress.setAttribute('style', 'width:40%');
    formProgress.setAttribute('aria-valuenow', '40');
    debugger;
  }
});
  // } else {
  //   
  // if(buttonStart.value === 'question1') {
  //   console.log('This is question 2');
  //   pageOne.classList.add('d-none');
  //   pageTwo.classList.remove('d-none');
  //   buttonStart.value = 'question2';
  //   formProgress.setAttribute('style', 'width:40%');
  //   formProgress.setAttribute('aria-valuenow', '40');
  //   debugger;
  // }
  // if(buttonStart.value === 'question2') {
  //   console.log('This is question 3');
  //   pageTwo.classList.add('d-none');
  //   pageThree.classList.remove('d-none');
  //   buttonStart.value = 'question3';
  //   formProgress.setAttribute('style', 'width:60%');
  //   formProgress.setAttribute('aria-valuenow', '60');
  //   debugger;
  // }
  // if(buttonStart.value === 'question3') {
  //   console.log('This is question 4');
  //   pageThree.classList.add('d-none');
  //   pageFour.classList.remove('d-none');
  //   buttonStart.value = 'question4';
  //   formProgress.setAttribute('style', 'width:80%');
  //   formProgress.setAttribute('aria-valuenow', '80');
  //   debugger;
  // }
  // if(buttonStart.value === 'question4') {
  //   console.log('This is question 5');
  //   pageFour.classList.add('d-none');
  //   pageFive.classList.remove('d-none');
  //   buttonStart.value = 'question5';
  //   formProgress.setAttribute('style', 'width:100%');
  //   formProgress.setAttribute('aria-valuenow', '100');
  //   debugger;
  // }
  // if(buttonStart.value === 'question5') {
  //   console.log('Enter your initials to store score');
  //   pageFive.classList.add('d-none');
  //   pageEnd.classList.remove('d-none');
  //   highScoreEl.classList.remove('d-none');
  //   buttonStart.value = 'startover';
  //   buttonStart.textContent = 'Start over!';
  //   debugger;
  //   // formProgress.setAttribute('style', 'width:100%');
  //   // formProgress.setAttribute('aria-valuenow', '100');
  // }
  // if (buttonStart.value === 'next') {
  //   const name = nameEl.value.trim();
  //   const email = emailEl.value.trim();
  //   if (!name && !email) {
  //     alert("Please enter name and email!");
  //     return;
  //   }
  // } else {
  //   debugger;
  //   location.reload();
  // }
  // need to add function for starting the timer and call it here
  
  // need to call keepScore function after the last question is answered 

// function for storing end user initials and high score
// function keepScore() {
//   const buttonSubmit = document.getElementById('form-submit');
//   buttonSubmit.addEventListener('click', function (event) {
//     event.preventDefault();
//     if (buttonSubmit.value === 'next') {
//       const name = nameEl.value.trim();
//       const email = emailEl.value.trim();
//       if (!name && !email) {
//         alert("Please enter name and email!");
//         return;
//       }

//       localStorage.setItem('name', name);
//       localStorage.setItem('score', score);
//     }});
// const fave = document.getElementById('favorite-animal');
// if (favoriteAnimals.includes(fave.textContent.toLowerCase())) {
//   console.log('The favorite animal is allowed');
// }

// function for storing end user initials and high score
// function keepScore() {
//   const buttonSubmit = document.getElementById('form-submit');
//   buttonSubmit.addEventListener('click', function (event) {
//     event.preventDefault();
//     if (buttonSubmit.value === 'next') {
//       const name = nameEl.value.trim();
//       const email = emailEl.value.trim();
//       if (!name && !email) {
//         alert("Please enter name and email!");
//         return;
//       }

//       localStorage.setItem('name', name);
//       localStorage.setItem('score', score);
//     }}};

//   {
//     pageOne.classList.add('d-none');
//     pageTwo.classList.remove('d-none');
//     formProgress.setAttribute('style', 'width:20%');
//     formProgress.setAttribute('aria-valuenow', '20');
//   } else if (buttonSubmit.value === 'submit') {
//     const favoriteAnimal = document.querySelector("[name=animal]:checked");
//     localStorage.setItem('favoriteAnimal', favoriteAnimal.value);
//     const cardBody = document.querySelector('.card-body');
//     cardBody.innerHTML = `
//       <h2>Thank you, ${localStorage.getItem('name')}</h2>
//       <p class="lead">We will email you at ${localStorage.getItem('email')} pictures of your favorite animal, the ${localStorage.getItem('favoriteAnimal')}
//       </p>`;

//     formProgress.setAttribute('style', 'width:100%');
//     formProgress.setAttribute('aria-valuenow', '100');

//     buttonSubmit.value = 'start-over';
//     buttonSubmit.textContent = 'Start over';
//   } else {
//     location.reload();
//   }