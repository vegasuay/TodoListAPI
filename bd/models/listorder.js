var mongoose = require('mongoose');

// Define our listorder schema
var listorderSchema = new mongoose.Schema({
    username: String,
    listname: String,
    product: String,
    precio: String,
    count: String,
    sharedusers: [String]
});

// Export the mongoose model
module.exports = mongoose.model('ListOrder', listorderSchema);