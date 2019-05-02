// **************************************************
function anagram(s) {
  if (s.length % 2) return -1;
  const left = s.slice(0, s.length / 2);
  const right = s.slice(s.length / 2);
  const hystLeft = hystogram([...left]);
  const hystRight = hystogram([...right]);
  let result = 0;
  for (const k in hystRight) {
    let addition = hystRight[k] - (hystLeft[k] || 0);
    if (addition < 0) addition = 0;
    console.log(`${k}: ${addition}`)
    result += addition;
  }
  return result;
}

function hystogram(arr) {
  const result = {};
  for (const el of arr) {
    result[el] = ++result[el] || 1;
  }
  return result;
}

// **************************************************

const str = 'fdhlvosfpafhalll';
console.log(anagram([...str]));
