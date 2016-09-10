
  var app = {}; // this app object holds the models which are backbone objects
  app.Todo = Backbone.Model.extend({
    //properties that we want the model to have by default, but we can change them
    defaults: {
      title: '',
      completed: false
    }
  });

  //a collection is a group of models
  app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    //this local storage property would normally be a url
    localStorage: new Store("backbone-todo")
  });

  //instance of the collection
  app.todoList = new app.TodoList();

  //try it out in the console with the below commands
  // var todoList = new app.TodoList()
  // todoList.create({title: 'Learn Backbone\'s Collection'}); // notice: that `completed` will be set to false by default.
  // var lmodel = new app.Todo({title: 'Learn Models', completed: true});
  // todoList.add(lmodel);
  // some other backbone commands
  // todoList.pluck('title');     // ["Learn Backbone's Collection", "Learn Models"]
  // todoList.pluck('completed'); // [false, true]
  // JSON.stringify(todoList); 
