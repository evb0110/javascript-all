// n - the number of chapters
// k - number of problems on a page
// arr[i] - number of problems in ith chapter
//  problem is special if its number is the same as the page number

// n k
// arr

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
const [[n, k], arr] = input
  .split(/\n/)
  .map(line => line.split(/\s+/).map(s => +s));


// ======================================
function workbook(_, k, arr) {
  const arrayOfPages = makeArrayOfPages(k, arr);
  return arrayOfPages.filter((el, i) => el.includes(i+1)).length;
}

function makeArrayOfPages(k, arr) {
  return arr.reduce((acc, el) => {
    return [...acc, ...makeChapterToPages(k, el)]
  }, [])
}

function makeChapterToPages(k, chapter) {
  const result = [];
  for (let i = 1; i <= chapter; i++) {
    const numPage = Math.floor((i - 1) / k);
    if (result[numPage] == null) {
      result[numPage] = [];
    }
    result[numPage].push(i);
  }
  return result;
}
// ======================================

console.log(workbook(n, k, arr));
