var Backbone = require('backbone');
var _ = require('underscore');
var AppTemplate = require('./app-template');

var AppView = Backbone.View.extend({

  el: "#app",

  className: "document-row",

  template: _.template(AppTemplate),


  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});


module.exports = AppView;