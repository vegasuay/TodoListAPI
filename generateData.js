
var config = require('./config');
var db = require('./bd/connection/db');
var User = require('./bd/models/auth/user');
var Client = require('./bd/models/auth/client');
var AccessToken = require('./bd/models/auth/accessToken');
var RefreshToken = require('./bd/models/auth/refreshToken');

User.remove({}, function(err) {
    var user = new User({ 
        username: config.get("default:user:username"), 
        password: config.get("default:user:password") 
    });
    
    user.save(function(err, user) {
        if(!err) {
            log.info("New user - %s:%s", user.username, user.password);
        }else {
            return log.error(err);
        }
    });
});

Client.remove({}, function(err) {
    var client = new Client({ 
        name: config.get("default:client:name"), 
        clientId: config.get("default:client:clientId"), 
        clientSecret: config.get("default:client:clientSecret") 
    });
    
    client.save(function(err, client) {

        if(!err) {
            log.info("New client - %s:%s", client.clientId, client.clientSecret);
        } else {
            return log.error(err);
        }

    });
});

AccessToken.remove({}, function (err) {
    if (err) {
        return log.error(err);
    }
});

RefreshToken.remove({}, function (err) {
    if (err) {
        return log.error(err);
    }
});

setTimeout(function() {
    db.disconnect();
}, 3000);