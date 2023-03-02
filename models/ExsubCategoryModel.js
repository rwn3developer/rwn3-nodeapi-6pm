const mongoose = require('mongoose');

const schema = mongoose.Schema({
    exsubcategory : {
        type : String,
        required : true
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    subcategoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "subcategory"
    },
});

const exsubcategory = mongoose.model('exsubcategory',schema);
module.exports = exsubcategory;