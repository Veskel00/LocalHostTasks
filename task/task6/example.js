import names from './names';

export function oneOf() {
  const array = ['PL', 'UK', 'USA'];
  const randomNumber = Math.floor(Math.random() * array.length);
  for (let i = 0; i < array.length; i++) {
    if (i === randomNumber) {
      return array[i];
    }
  }
}

export function getRandomName(array) {
  return array[(array.length * Math.random()) | 0];
}

export function getRandomSecondName(array) {
  return array[(array.length * Math.random()) | 0];
}

export function getRandomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomPhoneNumber() {
  const numberLength = 9;
  return parseInt((Math.random() * 9 + 1) * Math.pow(10, numberLength - 1), 10);
}

export function getEmail(name, secondName) {}

//Randomowe imię jakby co

// let name = '';
// const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// for (let i = 0; i < 8; i++) {
//   name += characters.charAt(Math.floor(Math.random() * characters.length));
// }
// return name;
