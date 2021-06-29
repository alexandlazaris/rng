var maxLength = 5;
var generatedNumbers = [];
var dups = 0;
var rndInt = 0;

const generate = () => {
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
};

const generateObjects = (numbersToGenerate) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
  let canStart = numbersToGenerate > 0 ? true : false;
  if (canStart) {
    var numbersMap = new Map();
    while (numbersMap.size != numbersToGenerate) {
      rndInt = Math.floor(Math.random() * numbersToGenerate) + 1;
      if (!numbersMap.has(rndInt)) {
        console.log(`${rndInt} is unique`);
        numbersMap.set(rndInt, { value: rndInt, counter: 1 });
      } else {
        console.log(`${rndInt} is NOT unique`);
        let counter = numbersMap.get(rndInt).counter;
        counter += 1;
        numbersMap.set(rndInt, { value: rndInt, counter: counter });
      }
    }
  } else {
    console.log(`Error. ${numbersToGenerate} is too small a size to generate.`);
  }
  console.table(numbersMap);
  return numbersMap;
};

exports.generate = generate;
exports.generateObjects = generateObjects;
