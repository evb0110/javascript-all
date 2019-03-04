const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split(/\n/);
const lineToNumbers = line => line.split(/\s+/).map(str => Number(str));

const data = lines.map(lineToNumbers);
const [[n, m], ...queries] = data;


function arrayManipulation(n, queries) {
  var arr = [];
  var max = 0;
  // init each element of arr to 0
  for (let l = 0; l < n; l++) {
    arr[l] = 0;
  }
  // for each sum operation in queries
  for (let i = 0; i < queries.length; i++) {
    // update arr with number to add at index=queries[i][0]  and number to remove at index=queries[i][0]+1 => this will allow us to build each element of the final array by summing all elements before it. The aim of this trick is to lower time complexity
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < arr.length) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }
  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
  }
  for (let k = 0; k < arr.length; k++) {
    max = Math.max(max, arr[k]);
  }
  //max = Math.max(...arr); // not working for big arrays
  return max;
}

const result = arrayManipulation(n, queries);
console.log(result);