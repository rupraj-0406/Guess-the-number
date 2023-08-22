'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; //generate random number between 1 to 20(both included)

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //   console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔ No number !!!');
    // document.querySelector('.message').textContent = '⛔ No number !!!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('✔ Correct Number!!!');
    // document.querySelector('.message').textContent = '✔ Correct Number!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess < 1 || guess > 20) {
    if (score > 1) {
      displayMessage('😶 Out of range...');
      // document.querySelector('.message').textContent = '😶 Out of range...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🙁 You lose the game !!!');
      // document.querySelector('.message').textContent ='🙁 You lose the game !!!';

      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? '📈 Too High !!!' : '📉 Too Low !!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent ='🙁 You lose the game !!!';

      displayMessage('🙁 You lose the game !!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High !!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🙁 You lose the game !!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low !!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '🙁 You lose the game !!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//1st task
document.querySelector('.again').addEventListener('click', function () {
  //2nd task
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generate random number between 1 to 20(both included)

  score = 20;

  //3rd task
  displayMessage('Start guessing...');
  //document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  //4rth task
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
