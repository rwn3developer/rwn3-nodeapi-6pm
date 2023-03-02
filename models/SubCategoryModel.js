const mongoose = require('mongoose');

const schema = mongoose.Schema({
    subcategory : {
        type : String,
        required : true
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
});

const subcategory = mongoose.model('subcategory',schema);
module.exports = subcategory;