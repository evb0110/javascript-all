function convert(time) {
  function normalize(number) {
    if (number < 10) {
      return '0' + number;
    }
    return '' + number;
  }

  const postfix = time.substr(-2);
  const hour = Number(time.substr(0, 2));
  const rest = time.substr(2, 6);

  if (hour == 12 && postfix == 'AM') { return '00' + rest }
  if (hour == 12 && postfix == 'PM') { return '12' + rest }
  if (postfix == 'AM') { return normalize(hour) + rest }
  let newHour = normalize(hour + 12);
  return newHour + rest;
}

console.log(convert('09:10:00PM'));
