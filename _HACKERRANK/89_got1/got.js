function gameOfThrones(s) {
  const hyst = hystogram(s);
  const nums = Object.values(hyst);
  const numberOfOdds = nums.reduce((acc, el) => acc + (el % 2), 0);
  return numberOfOdds < 2 ? 'YES' : 'NO';
}

function hystogram(s) {
  return [...s].reduce((acc, l) => {
    acc[l] = ++acc[l] || 1;
    return { ...acc };
  }, {});
}

console.log(gameOfThrones('abccbadkjsdafhs'));
