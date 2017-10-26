var mongoose = require('mongoose');
var listorderSchema = new mongoose.Schema({
    username: String,
    listname: String,
    product: String,
    precio: String,
    count: String,
    sharedusers: [String]
});

var ListOrder= mongoose.model('ListOrder', listorderSchema);
module.exports = ListOrder;