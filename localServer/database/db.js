var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test',{useMongoClient: true});

const db=mongoose.connection;
db.once('error',()=>console.log('error!'))
db.once('success',()=>console.log('success!'))

const list=mongoose.Schema({
    title:String,
    time:Date,
    sort:String,
    con:String,
    user:String,
    like:Number,
    collect:Number
})
const files=mongoose.Schema({
    file:String,
})
const Models={
    list:mongoose.model('list',list,'list'),
    files:mongoose.model('files',files,'files')
}
module.exports=Models;