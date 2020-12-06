export function findPhraseInArray(array, wordToSearch) {
  const arrayOfResults = [];

  array.map((wordInArray) => {
    if (wordInArray === wordToSearch) {
      arrayOfResults.push([array.indexOf(wordInArray), wordInArray]);
    }
  });

  if (arrayOfResults.length < 1) {
    const result = array.find((wordLikeWordToSearch) => wordLikeWordToSearch.match(wordToSearch));
    arrayOfResults.push([array.indexOf(result), result]);
  }
  if (arrayOfResults[0][0] > -1) {
    return arrayOfResults;
  } else {
    return Error('Podana fraza nie występuje w tablicy');
  }
}
