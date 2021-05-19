//Question 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

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
