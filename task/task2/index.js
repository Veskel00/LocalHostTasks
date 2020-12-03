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
function reduceRightFn(array, callback, initial) {
  console.log('123');
}
