
  var app = {}; // this app object holds the models which are backbone objects
  app.Todo = Backbone.Model.extend({
    //properties that we want the model to have
    defaults: {
      title: '',
      completed: false
    }
  });

// run these in console.to test them out
// var todo = new app.Todo({title: 'Learn Backbone.js', completed: false}); // create object with the attributes specified.
// todo.get('title'); // "Learn Backbone.js"
// todo.get('completed'); // false
// todo.get('created_at'); // undefined
// todo.set('created_at', Date());
// todo.get('created_at');