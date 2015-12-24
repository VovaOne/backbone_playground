var User = require('./model/user');
var Config = require('./config/config');
var Routes = require('./router/router');
var App = require('./view/app-view');

Config.enableTestEnv();

var user = new User();
user.set({
  name: 'Vova'
});

user.save();

new App({model: user});


