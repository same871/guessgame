'use strict';

const canvas = document.getElementById('canvas');
const jsConfetti = new JSConfetti();

const checkNumber = () => {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.guess').value = '';

  if (!guess) {
    displayMessage('Enter a number');
  } else if (guess === number) {
    displayMessage(`Correct Guess! Your Score is ${score}`);
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector('.number').textContent = number;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('h1').textContent = 'Congratulations💥';
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 25,
      confettiNumber: 500,
    });
  } else if (guess !== number) {
    if (score > 1) {
      guess < number
        ? displayMessage(`Oops ${guess} Is Too Low! Try Another Guess.`)
        : displayMessage(`Oops ${guess} Is Too High! Try Another Guess.`);
      displayScore(--score);
    } else {
      document.querySelector('body').style.backgroundColor = '#7e8181';
      document.querySelector('h1').textContent = 'Game Over';
      displayMessage('Out Of Moves. Try Again 🤓');
      displayScore(0);
    }
  }
};

const tryAgain = () => {
  score = 20;
  number = generateRandomNumber();
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('h1').textContent = 'Guess My Number!';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const generateRandomNumber = () => {
  return Math.trunc(Math.random() * 1000) + 1;
};

let number = generateRandomNumber();
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score_ => {
  document.querySelector('.score').textContent = score_;
};

document.querySelector('.check').addEventListener('click', checkNumber);

document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkNumber();
  }
});

document.querySelector('.again').addEventListener('click', tryAgain);
