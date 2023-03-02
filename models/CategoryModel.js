const mongoose = require('mongoose');

const schema = mongoose.Schema({
    category : {
        type : String,
        required : true
    }
});

const category = mongoose.model('category',schema);
module.exports = category;