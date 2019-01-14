// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');
console.log("=================")

// Challenge 1
function addTwo(num) {
  return num + 2;

}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));
console.log("=================")


// Challenge 2
function addS(word) {
  return word + 's';

}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));
console.log("=================")

// Challenge 3
function map(array, callback) {
  const newArray = [];
  for (let i=0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
	return newArray;
}

console.log(map([1, 2, 3], addTwo));
console.log("=================")

// Challenge 4
function forEach(array, callback) {
	for (let i=0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!
forEach([1,2,3], x => console.log(x));
console.log("=================")


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  let newArray = [];
  forEach(array, function(el) {
    newArray.push(callback(el));
  });
  return newArray;
}

console.log(mapWith([1,2,3], (a) => a * 2));
console.log("=================")


//Extension 2
function reduce(array, callback, initialValue) {

}

//Extension 3
function intersection(...arrays) {
	return arrays.reduce((acc, el) => binaryIntersection(acc, el));
}
function binaryIntersection(arr1, arr2) {
    return arr1.filter((el) => ~arr2.indexOf(el));
}
console.log(binaryIntersection([1, 2, 3], [0, 3, 1]));
console.log("=================")

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
console.log("=================")

//Extension 4
function union(...arrays) {
	return arrays.reduce((acc, el) => {
     return binaryUnion(acc,el);
  });
}
function binaryUnion(arr1, arr2) {
  const arr2minus1 = arr2.filter((el) => !~arr1.indexOf(el));
  return [...arr1, ...arr2minus1];
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

console.log("=================")

//Extension 5
function objOfMatches(array1, array2, callback) {
 const result = array1.reduce((acc,el,i) => {
   if (callback(el) === array2[i]) return {...acc, [el]: array2[i]};
   return acc;
 }, {});
 return result;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
console.log("=================")

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  return arrVals.reduce((acc,el,i) => ({...acc, [el]: arrCallbacks.map(fn => fn(el))}), {});
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

