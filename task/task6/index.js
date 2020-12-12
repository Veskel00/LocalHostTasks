import { v4 as uuidv4, v4 } from 'uuid';

import { getRandomName } from './example';
import { getRandomSecondName } from './example';
import { getRandomAge } from './example';
import { getRandomPhoneNumber } from './example';
import { getEmail } from './example';
import { oneOf } from './example';

import names from './names';
import secondNames from './secondNames';

export default function generateHuman() {
  const person = {
    _id: v4(),
    name: getRandomName(names),
    surname: getRandomSecondName(secondNames),
    email: getEmail(getRandomName, getRandomSecondName),
    age: getRandomAge(18, 85),
    phoneNr: getRandomPhoneNumber(),
    country: oneOf(),
  };
  return person;
}
