//Question Two: Write a function named checkYuGiOh which takes an input n

// Check For YuGIOH

const getMyString = (value) => {
  let replaceValue = [];
  if (value % 2 === 0) {
    replaceValue.push('Yu');
  }
  if (value % 3 === 0) {
    replaceValue.push('Gi');
  }
  if (value % 5 === 0) {
    replaceValue.push('Oh');
  }

  return replaceValue.length > 0 ? replaceValue.join('-') : value;
};

const checkYuGiOh = (n) => {
  const myAnswer = Array(n)
    .fill()
    .map((_, index) => getMyString(index + 1));

  console.log(myAnswer);

  return myAnswer;
};

checkYuGiOh(5);
