function addStrings(str1, str2) {
  const maxLength = Math.max(str1.length, str2.length) + 1;
  const [s1, s2] = [str1, str2].map(s => s.padStart(maxLength, '0'))
  const arr = [...s1].map((el, i) => [Number(el), Number(s2[i])]);
  const stringResult = arr.reduceRight(({ sumString, carry }, el) => {
    const { added: newAdded, carry: newCarry } = addDigits(el, carry);
    const newSumstring = newAdded + sumString;
    return {
      sumString: newSumstring,
      carry: newCarry,
    }
  }, {
    sumString: '',
    carry: 0,
  }).sumString;
  return stringResult.replace(/^0/, '')
}

function multiplyStringByNumber(str, num) {
  let current = '0';
  for (let i = 0; i < num; i++){
    current = addStrings(current, str);
  }
  return current;
}

function addDigits([m, n], c = 0) {
  const sum = m + n + c;
  const added = (sum % 10);
  const carry = ((sum - added) / 10);
  return {
    added,
    carry
  }
}

function longFactorial(n) {
  if (n == 0) {
    return '1';
  }
  return multiplyStringByNumber(longFactorial(n - 1), n);
}

function extraLongFactorials(n) {
  console.log(longFactorial(n))
}

extraLongFactorials(300);
