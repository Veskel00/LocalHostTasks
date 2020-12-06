//Task 1
import aggregateIntoChunks from './task/task1/index';
import { alphabet } from './task/task1/example';

const chunks = aggregateIntoChunks(alphabet);

//console.log(chunks);

//Task 2

//Array to Test Functions from Task 2
const arrayToTests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Functions from index.js-----------------------

//Map Function

import { mapFn } from './task/task2/index';
const exampleMapFunction = mapFn(arrayToTests, function (value, index, array) {
  return value * 5;
});

//FilterFunction

import { filterFn } from './task/task2/index';

const exampleFilterFunction = filterFn(arrayToTests, function (value, index, array) {
  return value < 5;
});

//ReduceFunction

import { reduceFn } from './task/task2/index';

const exampleReduceFunction = reduceFn(arrayToTests, function (value, index, array) {
  return value + index;
});

//ReduceRightFunction

import { reduceRightFn } from './task/task2/index';

const exampleReduceRightFunction = reduceRightFn(arrayToTests, function (value, index, array) {
  return value + index;
});

//EveryFunction

import { everyFn } from './task/task2/index';

const exampleEveryFunction = everyFn(arrayToTests, function (value, index, array) {
  return value >= 1;
});

//someFn;

import { someFn } from './task/task2/index';

const exampleSomeFunction = someFn(arrayToTests, function (value, index, array) {
  return value > 5 && index < 9;
});

//Task 3

//Task 4
import inputData from './task/task4/example';
import { findPhraseInArray } from './task/task4/index';

const exampleFindPharseInArray = findPhraseInArray(inputData, 'Jak');

//Task 5
