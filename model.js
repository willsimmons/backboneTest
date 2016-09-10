
  var app = {}; // this app object holds the models which are backbone objects
  app.Todo = Backbone.Model.extend({
    //properties that we want the model to have
    defaults: {
      title: '',
      completed: false
    }
  });

