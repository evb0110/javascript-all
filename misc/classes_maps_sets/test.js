let arr = [];

for (let i = 0; i < 1e7; i++) {
  arr.push(i);
}

for (let j = 0; j < 1e3; j++) {
  console.log(arr.includes(90000000))
} // 24 sec
