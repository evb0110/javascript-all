// https://stackoverflow.com/a/47644519/7730888

const number = 1234567890;

console.log(addCommas(number));

function addCommas(number) {
  const chunks = number.toString().match(/.{1,3}(?=(.{3})*$)/g);
  return chunks.join(',')
}
