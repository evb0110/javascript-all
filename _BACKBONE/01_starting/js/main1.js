// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
  validate: function(attrs) {
    if (!attrs.title) return 'title?';
  },
});
var song = new Song({});

var Animal = Backbone.Model.extend({
  walk: function() {
    console.log('animal walking...');
  },
});

var Dog = Animal.extend({
  bark: () =>  {
    console.log("I'm barking")
  }
});
var dog = new Dog();
