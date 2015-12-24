var Backbone = require('backbone');

function enableCrossDomain() {
  var proxiedSync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    options || (options = {});

    if (!options.crossDomain) {
      options.crossDomain = true;
    }
    if (!options.xhrFields) {
      options.xhrFields = {withCredentials: true};
    }

    return proxiedSync(method, model, options);
  };
}

function changePostOnGet() {
  var proxiedSync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options || (options = {});
    method = 'get';
    return proxiedSync(method, model, options);
  };
}

module.exports = {
  enableCrossDomain: enableCrossDomain,
  enableStaticResources: changePostOnGet,
  enableTestEnv: function() {
    enableCrossDomain();
    changePostOnGet();
  }
};