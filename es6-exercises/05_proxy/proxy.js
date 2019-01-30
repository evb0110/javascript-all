let handler = {
  get: (target, propName) => {
    // console.log(target);
    // console.log(propName);
    return `${propName}: ${target[propName]}`;
  }
}

let newObj = new Proxy({}, handler);
newObj.name = 'Rob';
newObj.job = 'Instructor';
console.log(newObj.name);
console.log(newObj.job);

let obj = { a: 1, b: 2};
console.log();