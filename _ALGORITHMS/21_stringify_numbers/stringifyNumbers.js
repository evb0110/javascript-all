let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj))

function stringifyNumbers(obj) {
  let newObj = {};
  for (const [key, val] of Object.entries(obj)) {
    if (Array.isArray(val)) {
      newObj = {
        ...newObj,
        [key]: val.map(el => stringifyNumbers(el))
      }
      continue;
    }
    if (typeof val === 'object') {
      newObj = {
        ...newObj,
        [key]: stringifyNumbers(val)
      };
      continue;
    }
    if (typeof val === 'number') {
      newObj = {
        ...newObj,
        [key]: String(val)
      };
      continue;
    }
    newObj = {
      ...newObj,
      [key]: val
    }
  }
  return newObj;
}