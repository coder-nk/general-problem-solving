const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertPIN(pin) {
  const binary = pin.toString(2);
  const texts = [];

  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === '1') {
      if (i === binary.length - 1) {
        texts.push('pop');
      } else if (i === binary.length - 2) {
        texts.push('double rip');
      } else if (i === binary.length - 3) {
        texts.push('hide your mints');
      } else if (i === binary.length - 4) {
        texts.push('fall');
      }
    }
    if (i === binary.length - 5 && binary[binary.length - i - 1] === '1') {
      texts.reverse();
    }
  }

  return texts;
}

rl.question("Enter a PIN: ", (userInput) => {
  const pin = parseInt(userInput);

  if (!isNaN(pin) && pin >= 0) {
    const texts = convertPIN(pin);
    console.log("Output:", texts);
  } else {
    console.log("Invalid input");
  }

  rl.close();
});
