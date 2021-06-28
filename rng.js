var maxLength = 5;
var generatedNumbers = [];
var dups = 0;
var rndInt = 0;

function generate() {
  while (generatedNumbers.length != maxLength) {
    rndInt = Math.floor(Math.random() * maxLength) + 1;
    if (!generatedNumbers.includes(rndInt)) {
      console.log(`new number is ${rndInt}`);
      generatedNumbers.push(rndInt);
    } else {
      console.log(`${rndInt} is already used, skipping`);
      dups++;
    }
  }
  console.table(generatedNumbers);
  console.log(`Duplicates: ${dups}`);
  return generatedNumbers;
}

module.exports = generate;
