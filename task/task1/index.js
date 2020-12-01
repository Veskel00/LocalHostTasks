import { alphabet } from './example'
import { randomNumber } from './example';

function aggregateIntoChunks(array) {
    const chunkedArray = [];

    while (array.length) {
        const chunk = array.splice(0, randomNumber(4, 7));
        if (chunk.length < 4) {
            array.splice(chunk.length, randomNumber(4, 7))
        } else {
            chunkedArray.push(chunk);
        }
    }
    return chunkedArray;

}

const chunks = aggregateIntoChunks(alphabet);

export default chunks;