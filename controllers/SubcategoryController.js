const SubcategoryModel = require('../models/SubCategoryModel');
const CategoryModel = require('../models/CategoryModel');
const addsubcategory = async(req,res) => {
    try{
        let subategory = await  SubcategoryModel.create({
            categoryId : req.body.categoryId,
            subcategory : req.body.subcategory
        });
        if(subategory){
            return res.json({"status" : "1","messege":"subcategory successfully insert"})
        }else{
            return res.json({"status" : "0","messege":"subcategory not insert"})
        }
    }catch(err){
        return res.json({"status" : "0","messege":err})
    }
}
const viewsubcategory = (req,res) => {

    CategoryModel.aggregate([
        {
            $lookup:
            {
                from:"subcategories",
                localField:"_id",
                foreignField:"categoryId",
                as:"subcategory"
            }
        }
    ],(err,data)=>{
        if(err){
            return res.json({"status" : "0","messege" : "Record not fetch"});
        }
        return res.json({"status" : "1","messege" : data});
    });
}

module.exports = {addsubcategory,viewsubcategory};