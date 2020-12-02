import testArray from './example';

function callback(value, index, array) {
  return value >= 10;
}

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
  const initialArray = [];
  array.forEach((item, index, array) => {
    if (callback(item, index, array)) {
      initialArray.push(item);
    }
  });
  return initialArray;
}

//function like reduce method

export function reduceFn(array, callback, initial) {
  console.log('Hello World!');
}
