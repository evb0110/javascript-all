// https://stackoverflow.com/a/47147597/7730888

function getAllSubsets(theArray) {
  return theArray.reduce(
    (acc, value) => (
      [...acc, ...acc.map(set => [...set, value])]
    ),
    [
      []
    ]
  );
}

console.log(getAllSubsets([1, 2, 3]));
