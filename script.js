"use strict";

let random = Math.floor(Math.random() * 100);
console.log(random);
const startGuess = () => {
  const guessNumber = () => {
    let num = prompt("Угадай число от 1 до 100");

    if (num === null) {
      alert("Игра окончена");
      return;
    }

    if (!Number(num)) {
      alert("Введи число!");
      guessNumber();
    } else if (num > random) {
      alert("Загаданное число меньше");
      guessNumber();
    } else if (num < random) {
      alert("Загаданное число больше");
      guessNumber();
    } else if (num == random) {
      confirm("Поздравляю, Вы угадали!!!");
    } else {
      alert("Введите число");
      guessNumber();
    }
  };

  guessNumber();
};

startGuess();
