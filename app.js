//Task 1
import aggregateIntoChunks from './task/task1/index';
import { alphabet } from './task/task1/example';

const chunks = aggregateIntoChunks(alphabet);

//Task 2

//Array to Test Functions from Task 2
const arrayToTests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//Functions from index.js-----------------------

//Map Function

import { mapFn } from './task/task2/index';
const mapFunction = mapFn(arrayToTests, (value, index, array) => value * 5);

//FilterFunction

import { filterFn } from './task/task2/index';

const filterFunction = filterFn(arrayToTests, (value, index, array) => value < 5);

//ReduceFunction

import { reduceFn } from './task/task2/index';

const reduceFunction = reduceFn(arrayToTests, (value, index, array) => value + index);

//ReduceRightFunction

import { reduceRightFn } from './task/task2/index';

const reduceRightFunction = reduceRightFn(arrayToTests, (value, index, array) => value - index);

//EveryFunction

import { everyFn } from './task/task2/index';

const everyFunction = everyFn(arrayToTests, (value, index, array) => value > 15);

//someFn;

import { someFn } from './task/task2/index';

const someFunction = someFn(arrayToTests, (value, index, array) => {
  return value > 1 && index < 1;
});

//Task 3

import data from './task/task3/example';
import { filterWith } from './task/task3/index';

const filterWithExample = filterWith(data, 'Ebony Jimenez');

//Task 4
import inputData from './task/task4/example';
import { findPhraseInArray } from './task/task4/index';

const findPharseInArray_ = findPhraseInArray(inputData, 'ja');

//Task 5

//first Array
import { generateArrayWithRandomNumbers } from './task/task5/index';

const generateArrayWithRandomNumbers_ = generateArrayWithRandomNumbers(10, 1, 10);

//second Array

import { generateArrayOfArrays } from './task/task5/index';

const generateArrayOfArrays_ = generateArrayOfArrays(10, 10, 1, 10);

//Task 6
// DO ZROBIENIA! ------------------------------
import generateHuman from './task/task6/index';

const generateHuman_ = generateHuman();

//task 7

import { getMyAge } from './task/task7/index';

const getMyAge_ = getMyAge('1900');

//task 8
