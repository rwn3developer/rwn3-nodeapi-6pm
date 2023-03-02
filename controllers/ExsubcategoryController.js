const ExsubCategoryModel = require('../models/ExsubCategoryModel');
const CategoryModel = require('../models/CategoryModel');
const addexsubcategory = async(req,res) => {
    try{
        let subategory = await ExsubCategoryModel.create({
            categoryId : req.body.categoryId,
            subcategoryId : req.body.subcategoryId,
            exsubcategory : req.body.exsubcategory
        });
        if(subategory){
            return res.json({"status" : "1","messege":"exsubcategory successfully insert"})
        }else{
            return res.json({"status" : "0","messege":"exsubcategory not insert"})
        }
    }catch(err){
        return res.json({"status" : "0","messege":err})
    }
}   


const exviewsubcategory = (req,res) => {
   
    CategoryModel.aggregate([      
        {
            $lookup:
                
               {
                 from: "subcategories",
                 localField: "_id",
                 foreignField: "categoryId",
                 as: "subcategory"
               }
         },
         {
            $unwind : "$subcategory",
         },
         {
            
            $lookup:
               {
                 from: "exsubcategories",
                 localField: "subcategory._id",
                 foreignField: "subcategoryId",
                 as: "exsubcategory"
               }
         },

    // ExsubCategoryModel.aggregate([
    //     {
    //         $lookup : {
    //             from : "subcategories",
    //             localField : "subcategoryId",
    //             foreignField : "_id",
    //             as : "exsubcategory"
    //         }
    //     },
    //     {
    //         $unwind : "$exsubcategory"
    //     },
    //     {
    //         $lookup : {
    //             from : "categories",
    //             localField : "categoryId",
    //             foreignField : "_id",
    //             as : "category"
    //         }
    //     },
    //     {
    //         $unwind : "$category"
    //     },
        
    ],(err,data)=>{     

        if(err){
            if(data)
            return res.json({"status" : "0","messege" : "Record not fetch"});
        }
        return res.json({"status" : "1","messege" : data});
    });
}


module.exports = {addexsubcategory,exviewsubcategory};