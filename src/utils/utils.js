const randomCodeGen = () => {
  const randomChars =
    'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const randomNumberGen = () => {
  let sequence = [];
  let availableNumbers = [];
  for (let i = 1; i < 11; i++) {
    availableNumbers.push(i);
  }
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * availableNumbers.length);
    sequence.push(availableNumbers[number]);
    availableNumbers.splice(number, 1);
  }
  return sequence;
};

const hasDuplicates = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i != j) {
        return true;
      }
    }
  }
  return false;
};

module.exports = { randomCodeGen, randomNumberGen, hasDuplicates };
