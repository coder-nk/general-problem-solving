const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function numberOfSteps(x) {
  let steps = 0;

  while (x !== 1) {
    if (x % 2 === 0) {
      x /= 2;
    } else {
      x = 3 * x + 1;
    }
    steps++;
  }

  return steps;
}

rl.question("Enter a number: ", (userInput) => {
  const number = parseInt(userInput);

  if (!isNaN(number) && number > 0) {
    const steps = numberOfSteps(number);
    console.log(`Number of steps to reach 1: ${steps}`);
  } else {
    console.log("Invalid input");
  }

  rl.close();
});
