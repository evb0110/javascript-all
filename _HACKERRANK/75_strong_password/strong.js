const numbers = '0123456789';
const lower_case = 'abcdefghijklmnopqrstuvwxyz';
const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const special_characters = '!@#$%^&*()-+';

const input = 'ck';

function minimumNumber(n, password) {
  const numbers = '0123456789';
  const lower_case = 'abcdefghijklmnopqrstuvwxyz';
  const upper_case = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const special_characters = '!@#$%^&*()-+';
  
  let toAdd = 0;
  if (![...numbers].some(el => password.includes(el))) toAdd++;
  if (![...lower_case].some(el => password.includes(el))) toAdd++;
  if (![...upper_case].some(el => password.includes(el))) toAdd++;
  if (![...special_characters].some(el => password.includes(el))) toAdd++;
  return Math.max(toAdd, 6 - n);
}

console.log(minimumNumber(2, input));
