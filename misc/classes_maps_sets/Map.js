const privateData = new Map();
class Client {
  constructor(name = 'Anonymous', phone = 123, address = 'Trafalgar sq, 5') {
    this.name = name;
    this.phone = phone;
    privateData.set(this, {
      name,
      phone,
      address
    });
  }
  getAddress() {
    return privateData.get(this).address;
  }
}

let john = new Client('john', '123', 'london')

console.log(john.getAddress());

let anon = new Client;
console.log(anon.getAddress());