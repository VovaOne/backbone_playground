var Backbone = require('backbone');


var Router = Backbone.Router.extend({
  routes: {
    '': 'redirectToInfo',
    'info': 'openInfoPage'
  },

  redirectToInfo: function(param) {
    debugger;
  },

  openInfoPage: function(param) {
    debugger;
  }
});


Backbone.history.start();


module.exports = Router;