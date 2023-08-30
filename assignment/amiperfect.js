const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findFactors(n) {
  const factors = [1]; 
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function classifyNumber(n) {
  const factors = findFactors(n);
  const sumOfFactors = factors.reduce((sum, factor) => sum + factor, 0);

  if (sumOfFactors === n) {
    return "Perfect";
  } else if (sumOfFactors > n) {
    return "Abundant";
  } else {
    return "Deficient";
  }
}

rl.question("Enter a number: ", (userInput) => {
  const number = parseInt(userInput);

  if (!isNaN(number)) {
    const classification = classifyNumber(number);
    console.log(`Classification: ${classification}`);
  } else {
    console.log("Invalid input");
  }

  rl.close();
});
