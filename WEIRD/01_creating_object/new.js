function Person(firstname = 'John', lastname = 'Smith') {
  this.firstname = firstname;
  this.lastname = lastname;
}

const john = new Person('Mary', 'Doe');
console.log(john);