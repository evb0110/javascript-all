class Events {
  constructor(obj) {
    this.events = {}
    this.obj = obj;
  }

  on (event, callback) {
    callback = callback.bind(this.obj);
    if (this.events[event]) {
      this.events[event].push(callback)
    } else {
      this.events[event] = [callback]
    }
  }
  
  trigger (event) {
    for (let callback of this.events[event]) {
      callback();
    }
  }
}

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.events = new Events(this);
    this.on = this.events.on.bind(this.events);
    this.trigger = this.events.trigger.bind(this.events);
  }

  present() {
    console.log(`I am ${this.name}, my age is ${this.age} years`);
  }

  second() {
    console.log('second');
  }
}

const john = new User('John', 24);
john.on('present', john.present);
john.on('present', john.second);

john.trigger('present');
