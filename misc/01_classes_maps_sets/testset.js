let arr = [];

for (let i = 0; i < 1e7; i++) {
  arr.push(i);
}

const mySet = new Set(arr);

for (let j = 0; j < 1e3; j++) {
  console.log(mySet.has(90000000))
} // 4.3 sec
