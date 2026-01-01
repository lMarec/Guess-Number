const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function wait(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function askEasy() {
    rl.question("Guess a number (1–100)\n--> ", input => {
        const guess = Number(input);
        attempts++;

    if (guess === number) {
      console.log(`Correct! Attempts: ${attempts}`);
      rl.close();
    } else if (guess < 1 || guess > 100) {
      console.log("Number out of range, try again.");
      ask();
    } else if (guess > number) {
      console.log("Too high");
      ask();
    } else {
      console.log("Too low");
      ask();
    }
    wait(1);
  });
}

function askHard() {

    rl.question("Guess a number (1–100)\n--> ", input => {
        const guess = Number(input);
        attempts++;

    if (guess === number) {
      console.log(`Correct! Attempts: ${attempts}`);
      rl.close();
    } else if (guess < 1 || guess > 100) {
      console.log("Number out of range, try again.");
      ask();
    } else if (guess > number) {
      console.log("Too high");
      ask();
    } else {
      console.log("Too low");
      ask();
    }

    if (attempts >= 10) {
        console.log("Too many attempts! regenerating number...");
        number = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        ask();
    }
    wait(1);
  });
}

function askDifficulty() {
    rl.question("Choose difficulty (easy/hard)\n--> ", input => {
        const difficulty = input.toLowerCase();
        if (difficulty === "easy") {
            askEasy();
        } else if (difficulty === "hard") {
            askHard();
        } else {
            console.log("Invalid difficulty. Please choose 'easy' or 'hard'.");
            askDifficulty();
        }
    }); 
}

askDifficulty();