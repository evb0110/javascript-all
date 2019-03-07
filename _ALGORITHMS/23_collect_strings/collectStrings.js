function collectStrings(obj) {
  return Object.values(obj).reduce((acc, el) => {
    if (typeof el === 'object') {
      return [...acc, ...collectStrings(el)];
    } else if (typeof el === 'string') {
      return [...acc, el]
    }
    return acc;
  }, [])
}



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));
