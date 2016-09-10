jQuery(document).ready(function() {
  var AppView = Backbone.View.extend({
  //everything has an element, notice the css tag to match
  el: '#container',
  // inserting a template: which will be used in render
  // having a - will escape html, = will let html work
  // regular % % will allow for javascript to work
  template: _.template("<h3> Hello <%-who %></h3>"),
  //this runs when the view is instantiated
  initialize: function() {
    this.render();
  },
  //we have access to el via jQuery so we can do the following
  //render, similar to react
  render: function() {
    this.$el.html(this.template({who:'placeholder activate!'}));
  }
});

var appView = new AppView();
});