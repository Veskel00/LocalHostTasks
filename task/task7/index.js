export function getMyAge(input) {
  if (typeof input === 'string') {
    const birthDate = new Date(input);
    const today = Date.now() - birthDate.getTime();
    const ageDate = new Date(today);
    return Math.abs(ageDate.getFullYear() - 1970);
  } else if (typeof input === 'number') {
    const today = new Date();
    const birthDate = new Date(input.toString());
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
  } else {
    const today = Date.now() - input.getTime();
    const ageDate = new Date(today);
    return Math.abs(ageDate.getFullYear() - 1970);
  }
}
