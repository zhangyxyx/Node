const models = require('./db');
const express = require('express');
const ObjectID = require('mongodb').ObjectID;
const router = express.Router();
const util = require("util");

router.get('/',function(req,res){
    models.list.find(function(err,data){
        console.log(data)
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })
})

module.exports=router