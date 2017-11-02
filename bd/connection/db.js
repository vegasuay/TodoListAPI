//Set up mongoose connection
var mongoose = require('mongoose');
var user=process.env.MONGODB_USER;
var pass=process.env.MONGODB_PASS;

<<<<<<< HEAD
var mongoDB = 'mongodb://user:pass@cluster0-shard-00-00-cl1il.mongodb.net:27017,cluster0-shard-00-01-cl1il.mongodb.net:27017,cluster0-shard-00-02-cl1il.mongodb.net:27017/todolists?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
=======
var mongoDB = 'mongodb://'+user+':'+pass+'@cluster0-shard-00-00-cl1il.mongodb.net:27017,cluster0-shard-00-01-cl1il.mongodb.net:27017,cluster0-shard-00-02-cl1il.mongodb.net:27017/todolists?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
>>>>>>> 0489e72cc20d5ffdb73b261a95ccc2ce53089d8c
mongoose.connect(mongoDB, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
    console.log('MongoDB connection ok!');
  });
