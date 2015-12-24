var Backbone = require('backbone');

var User = Backbone.Model.extend({

  defaults: {
    id: undefined,
    name: undefined
  },

  url: '/mock/user/save/response.json',

});

module.exports = User;