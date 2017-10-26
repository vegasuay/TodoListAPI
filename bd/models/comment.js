var mongoose = require('mongoose');
var commentSchema = new mongoose.Schema({
    username: {type: String, index: {unique: true}},
    listaname: String,
    fecha: { type: Date, default: Date.now },
    title: String
});

var Comment= mongoose.model('Comment', commentSchema);
module.exports = Comment;