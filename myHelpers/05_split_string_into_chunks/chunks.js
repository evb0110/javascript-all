function chunksImperative(string, n) {
  const result = [];
  for (let i = 0; i < string.length; i += n) {
    result.push(string.slice(i, i + n));
  }
  return result;
}

function chunksFunctional(string, n) {
  const result = [...string].reduce(
    (acc, el) => {
      let { counter: myCounter, idx: myIdx, arr: myArr } = acc;
      myArr = [...myArr];
      myArr[myIdx] = (myArr[myIdx] || '') + el;
      if (myCounter == n - 1) {
        myCounter = 0;
        myIdx++;
      } else {
        myCounter++;
      }
      return { counter: myCounter, idx: myIdx, arr: myArr };
    },
    { counter: 0, idx: 0, arr: [] },
  );
  return result.arr;
}

const str = 'abcdefhijklmnopqrstuvwxyz';

let result = chunksImperative(str, 7);
console.log(result);
result = chunksFunctional(str, 7);
console.log(result);
