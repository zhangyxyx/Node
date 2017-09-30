var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/test');

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
const Models={
    list:mongoose.model('list',list,'list')
}
module.exports=Models;