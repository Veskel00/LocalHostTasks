export const alphabet = 'abcdefghijklmnoprstuwxyz'.split('')

export function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
