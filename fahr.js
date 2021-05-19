//Question 1. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

const convertfahrenheitToCelsius = (fahrenheit) => {
  if (fahrenheit === null || fahrenheit === undefined) {
    console.log(`Kindly enter a value for farenheit`);
  }
  if (fahrenheit instanceof Array) {
    console.log(
      `${JSON.stringify(fahrenheit)} is not a valid number but an array.`
    );
  } else if (fahrenheit instanceof Object) {
    console.log(
      `${JSON.stringify(fahrenheit)} is not a valid number but an object.`
    );
  } else if (
    (typeof fahrenheit === 'number' || typeof fahrenheit === 'string') &&
    /^[0-9]+$/.test(fahrenheit)
  ) {
    let myAns = fahrenheit * (9 / 5) + 32;
    console.log(myAns.toFixed(4));
  } else {
    console.log(
      `${JSON.stringify(fahrenheit)} is not a valid number but a string.`
    );
  }
};

convertfahrenheitToCelsius([1, 2, 3]);
convertfahrenheitToCelsius({ name: 'Helen' });
convertfahrenheitToCelsius('Tope');
convertfahrenheitToCelsius(20);
