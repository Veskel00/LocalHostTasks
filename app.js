//Task 1
import aggregateIntoChunks from './task/task1/index';
import { alphabet } from './task/task1/example';

const chunks = aggregateIntoChunks(alphabet);

//console.log(chunks);

//Task 2

//Tools to Test Functions in Task 2
const arrayToTests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Functions from index.js-----------------------

//Map Function

function callbackToMapFunction(currentValue, index, array) {
  return currentValue * 5;
}

import { mapFn } from './task/task2/index';
const exampleMapFunction = mapFn(arrayToTests, callbackToMapFunction);

//FilterFunction

import { filterFn } from './task/task2/index';

function callbackToFilterFunction(value, index, array) {
  return value > 7;
}

const exampleFilterFunction = filterFn(arrayToTests, callbackToFilterFunction);

//ReduceFunction
import { reduceFn } from './task/task2/index';

const exampleReduceFunction = reduceFn(arrayToTests, function (a, b) {
  return a + b;
});

//ReduceRightFunction

import { reduceRightFn } from './task/task2/index';

const exampleReduceRightFunction = reduceRightFn(arrayToTests, function (a, b) {
  return a + b;
});

//EveryFunction
