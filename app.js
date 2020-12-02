//Task 1
import aggregateIntoChunks from './task/task1/index';
import { alphabet } from './task/task1/example';

const chunks = aggregateIntoChunks(alphabet);

//console.log(chunks)

//Task 2

//Tools to Test Functions
const arrayToTests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function callback(value, index, array) {
  return value > 5;
}
//Functions from index.js-----------------------

//Map Function
import { mapFn } from './task/task2/index';
const exampleMapFunction = mapFn(arrayToTests, callback);

//FilterFunction

import { filterFn } from './task/task2/index';

const exampleFilterFunction = filterFn(arrayToTests, callback);

//ReduceFunction

import { reduceFn } from './task/task2/index';
