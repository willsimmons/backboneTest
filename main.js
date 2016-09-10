jQuery(document).ready(function() {
  var AppView = Backbone.View.extend({
  //everything has an element, notice the css tag to match
  el: '#container',
  //this runs when the view is instantiated
  initialize: function() {
    this.render();
  },
  //we have access to el via jQuery so we can do the following
  //render, similar to react
  render: function() {
    this.$el.html('Testing Backbone');
  }
});

var appView = new AppView();
});