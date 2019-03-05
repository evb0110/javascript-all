// makes unique array out of a sorted array

function unique(arr) {
  return arr.reduce((acc, el) => {
    if (acc[acc.length - 1] !== el) {
      return [...acc, el];
    } else {
      return acc;
    }
  }, []);
}

console.log(unique([1,1,2,2,2,3,3,3,3,3,4,4,4,4,5,5,5,6,7]))