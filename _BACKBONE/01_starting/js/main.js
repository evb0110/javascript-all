// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song,
});

var songs = new Songs([
  new Song({ title: 'Song 1' }),
  new Song({ title: 'Song2' }),
  new Song({ title: 'Song3' }),
]);

songs.add(new Song({ title: 'Song 4' }));
