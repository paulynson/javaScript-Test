//Question One: Write a function named convertfahrenheitToCelsius which takes an input

// Convert fahrenheit to Celcius and comparing other datatypes input

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
    console.log(fahrenheit * (9 / 5) + 32);
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
