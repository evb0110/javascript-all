function plusminus(arr) {
  const size = arr.length;
  const pnz = arr.reduce((acc, el) => {
    const newAcc = {...acc};
    if (el > 0) {
      newAcc.p++;
    } else if (el == 0) {
      newAcc.z++;
    } else if (el < 0) {
      newAcc.n++;
    }
    return newAcc;
  }, {p:0,z:0,n:0});
  const { p, n, z } = pnz;
  console.log((p/size).toPrecision(6));
  console.log((n/size).toPrecision(6));
  console.log((z/size).toPrecision(6));
}


const array = [-4,3,-9,0,4,1];
plusminus(array);