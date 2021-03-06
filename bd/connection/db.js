//Set up mongoose connection
var mongoose = require('mongoose');
var user=process.env.MONGODB_USER;
var pass=process.env.MONGODB_PASS;

var mongoDB = 'mongodb://'+user+':'+pass+'@cluster0-shard-00-00-cl1il.mongodb.net:27017,cluster0-shard-00-01-cl1il.mongodb.net:27017,cluster0-shard-00-02-cl1il.mongodb.net:27017/todolists?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(mongoDB, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
    console.log('MongoDB connection ok!');
  });
