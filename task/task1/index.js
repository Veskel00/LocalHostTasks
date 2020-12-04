import { randomChunkSize } from './example';

function aggregateIntoChunks(array) {
  const arrayOfChunks = [];
  console.log('test');
  while (array.length) {
    const singleChunk = array.splice(0, randomChunkSize(4, 7));
    if (singleChunk.length < 4) {
      array.splice(singleChunk.length, randomChunkSize(4, 7));
    } else {
      arrayOfChunks.push(singleChunk);
    }
  }

  return arrayOfChunks;
}

export default aggregateIntoChunks;
