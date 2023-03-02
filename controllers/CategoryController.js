const CategoryModel = require('../models/CategoryModel');

const addcategory = async(req,res) => {
    try{
        let category = CategoryModel.create({
            category : req.body.category
        });
        if(category){
            return res.json({"status" : "1","messege":"category successfully insert"})
        }else{
            return res.json({"status" : "0","messege":"category not insert"})
        }
    }catch(err){
        return res.json({"status" : "0","messege":err})
    }
}

module.exports = {addcategory};