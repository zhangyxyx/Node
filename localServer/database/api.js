const models = require('./db');
const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const util = require("util");
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({ dest: 'uploads/' });

router.post('/files',multipartMiddleware,function(req,res){
    console.log(req.body);
    console.log(req.files)
    
})
router.get('/get',function(req,res){
    var rf=require("fs");  
    var data=rf.readFileSync("./json.txt","utf-8");  
    console.log(data);  
    console.log("READ FILE SYNC END"); 
})
module.exports=router