export const alphabet = 'abcdefghijklmnoprstuwxyzyzsssassss'.split('')

export function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
