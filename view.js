//we'ere also going have collection.js from the step before, 
//referenced in this step - skip to line 23!!!!
var app = {}; // app object
  //model maker/class
  app.Todo = Backbone.Model.extend({
    //properties that we want the model to have by default, but we can change them
    defaults: {
      title: '',
      completed: false
    }
  });

  //a collection is a group of models, it's class/
  app.TodoList = Backbone.Collection.extend({
    model: app.Todo,
    //this local storage property would normally be a url
    localStorage: new Store("backbone-todo")
  });

  //instance of the collection
  app.todoList = new app.TodoList();
//

var TodoView = Backbone.View.extend({
  //the view is going to add list items from the todo model
  el: '.items',
  //we want to put them in the div that we created for the todos (above), and we want them to be li's
  //a tagName will wrap our template in li's in this case
  tagName: 'li',
  // inserting a template: which will be used in render
  // having a - will escape html
  // remember title, that's the string portion of a todo's model (what we want)
  template: function(){
    _.template("<input class=toggle type=checkbox><label><%- title %></label>").html()
  },
  //this runs when the view is instantiated, puts the html where we want it
  //jquery finds our div
  initialize: function() {
    this.render();
  },
  //we have access to 
  render: function() {
    //in the .item's div, insert this templated html, and turn this views's model into JSON
    // and since title is a key in this model's JSON, we will see the title on the page
    this.$el.html(this.template(this.model.toJSON()));
    return this;
    //this return could allow us to chain all this file'sJS if we needed to
  }
});

var view = new app.todoView({model:todo});