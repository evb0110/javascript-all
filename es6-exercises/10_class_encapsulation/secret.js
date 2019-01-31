class SecretNumber {
  constructor (secret) {
    if (Number.isNaN(Number(secret))) throw (`secret should be a number`)

    this.increment = function(inc)  {
      secret += inc;
    }

    this.getSecret = function()  {
      console.log(secret);
    }
  }
}

const secretObject = new SecretNumber(50);
secretObject.increment(-8);
secretObject.getSecret();
console.log(secretObject);