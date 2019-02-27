const arr = [1,2,3,4]

function subsetsOfTwo(arr) {
  const result = arr.reduce((acc,el,i) => {
    return [...acc, ...arr.slice(i+1).map(elem => [el, elem])]
  }, []);
  return result;
}

console.log(subsetsOfTwo(arr));