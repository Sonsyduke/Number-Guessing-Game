const highestNumber = Number(prompt("Enter a random number"));
const randomNumber = Math.floor(Math.random() * highestNumber) + 1;
let guesses = 0;
let guess;
guess = Number(prompt(`Enter a number between 1 - ${highestNumber}`));

while (true) {
  if (guess === randomNumber) {
    console.log(`CONGRATS YOU GOT IT RIGHT THE NUMBER WAS ${randomNumber}`);
    break;
  } else if (guess > randomNumber) {
    guess = Number(prompt(`Too High, try again`));
  } else if (guess < randomNumber) {
    guess = Number(prompt(`Too Low, try again`));
  }
  guesses++;
}
console.log(`You had ${guesses} tries`);
