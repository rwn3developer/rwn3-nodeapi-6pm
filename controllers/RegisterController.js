
const RegisterModel = require('../models/RegisterModel');

const jwtData = require('jsonwebtoken'); //token create karshe;


const registerData = async(req,res) =>{
    try{
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;
        if(name != "")
        {
            if(email != ""){
                if(password != ""){
                    let register = await RegisterModel.create({
                        name : name,
                        email : email,
                        password : password,
                    });
                    if(register){
                        return res.json({"status" : "1","messege" : "User successfully register"})
                    }else{
                        return res.json({"status" : "0","messege" : "User not successfully register"})
                    }
                }else{
                    return res.json({"status" : "0","messege" : "password is required"})
                }
            }else{
                return res.json({"status" : "0","messege" : "Email is required"})
            }
        }else{
            return res.json({"status" : "0","messege" : "Name is required"})
        }
    }catch(err){
        return res.json({"status" : "0","messege" : err})
    }
}

const login = async(req,res) => {
    let email = req.body.email; 
    try{
        let user = await RegisterModel.findOne({email : email});
        
        if(!user || user.password != req.body.password){
            return res.json({"status" : "0","messege" : "Email and password not match"});
        }

        let token = jwtData.sign(user.toJSON(),"RNW",{expiresIn : 1000*60*60});
        return res.json({"status" : "1","token" : token});

    }catch(err){
        return res.json({"status" : "0","messege" : err})
    }
}

module.exports = {registerData,login};