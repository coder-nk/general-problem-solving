const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function hitEfficiency(k, l, m, n, total) {
  let hitCount = 0;

  for (let i = 1; i <= total; i++) {
    if (i % k !== 0 && i % l !== 0 && i % m !== 0 && i % n !== 0) {
      hitCount++;
    }
  }

  return total - hitCount;
}

rl.question("Enter K: ", (kInput) => {
  const k = parseInt(kInput);

  rl.question("Enter L: ", (lInput) => {
    const l = parseInt(lInput);

    rl.question("Enter M: ", (mInput) => {
      const m = parseInt(mInput);

      rl.question("Enter N: ", (nInput) => {
        const n = parseInt(nInput);

        rl.question("Enter Total: ", (totalInput) => {
          const total = parseInt(totalInput);

          if (!isNaN(k) && !isNaN(l) && !isNaN(m) && !isNaN(n) && !isNaN(total)) {
            const efficiency = hitEfficiency(k, l, m, n, total);
            console.log("Output:", efficiency);
          } else {
            console.log("Invalid input");
          }

          rl.close();
        });
      });
    });
  });
});
