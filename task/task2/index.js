import testArray from './example';

//function like map method

export function mapFn(array, callback) {
  const resultOfMapFunction = [];
  array.forEach((item, index) => {
    return resultOfMapFunction.push(callback(item, index, array));
  });
  return resultOfMapFunction;
}

//function like filter method

export function filterFn(array, callback) {
  const resultOfFilterFunction = [];
  array.forEach((arrayElement, index, array) => {
    if (callback(arrayElement, index, array)) {
      resultOfFilterFunction.push(arrayElement);
    }
  });
  return resultOfFilterFunction;
}

//function like reduce method

export function reduceFn(array, callback, initialValue) {
  let accumulator = initialValue;
  let i = 0;
  if (initialValue === undefined) {
    accumulator = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

//function like reduce right method;
export function reduceRightFn(array, callback, initialValue) {
  let accumulator = initialValue;
  let index = array[array.length - 1];
  if (initialValue === undefined) {
    accumulator = array[array.length - 1];
    index = array.length - 2;
    for (; index >= 0; index--) {
      accumulator = callback(accumulator, array[index], index, array);
    }
    return accumulator;
  } else {
    array.forEach((item, index) => {
      accumulator = callback(accumulator, item, index, array);
    });
    return accumulator;
  }
}

//function like every method

export function everyFn(array, callback) {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

//function like some method

export function someFn(array, callback) {
  for (let arrayElement of array) {
    if (callback(arrayElement, array.indexOf(arrayElement), array)) {
      return true;
    }
  }
  return false;
}
