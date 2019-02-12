function Messenger(name) {
  this.name = name;
}

function MultiMessenger(name, logo) {
  Messenger.call(this, name);
  this.logo = logo; // <-
}

// MultiMessenger.prototype = Object.create(Messenger.prototype);
// MultiMessenger.prototype.constructor = MultiMessenger;

const viber = new MultiMessenger('Viber', 'V');
console.log(viber.name); // Viber
console.log(viber.logo); // V