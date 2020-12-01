export const alphabet = 'abcdefghijklmnoprstuwxyzzaqwewqeqw'.split('')

//function to get random size of chunks
export function randomChunkSize(minSize, maxSize) {
    return Math.round(Math.random() * (maxSize - minSize) + minSize);
}
