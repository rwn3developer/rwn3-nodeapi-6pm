const express = require('express');

const routes = express.Router();

const registercontroller = require('../controllers/RegisterController');
const admincontroller = require('../controllers/AdminController');
const categorycontroler = require('../controllers/CategoryController');
const subcategorycontroler = require('../controllers/SubcategoryController');
const exsubcategorycontroler = require('../controllers/ExsubcategoryController');


const passport = require('passport');


routes.post('/registerData',registercontroller.registerData);
routes.post('/admininsert',admincontroller.admininsert);
routes.get('/adminview',passport.authenticate('jwt',{session : false}),admincontroller.adminview);
routes.delete('/admindelete',passport.authenticate('jwt',{session : false}),admincontroller.admindelete);
routes.put('/adminupdate',passport.authenticate('jwt',{session : false}),admincontroller.adminupdate);
routes.post('/login',registercontroller.login);
routes.post('/addcategory',categorycontroler.addcategory);
routes.post('/addsubcategory',subcategorycontroler.addsubcategory);
routes.get('/viewsubcategory',subcategorycontroler.viewsubcategory);
routes.post('/addexsubcategory',exsubcategorycontroler.addexsubcategory);
routes.get('/exviewsubcategory',exsubcategorycontroler.exviewsubcategory);


module.exports = routes;