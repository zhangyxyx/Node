var controller=function(req,res){
	this.res=res;
	this.req=req;
};
controller.prototype.action_index=function(){
	this.res.send('i am actionindex')
};
controller.prototype.action_about=function(){
	this.res.send(['boss系统','ver:0.01','author:zhang','data:2017-4-13'])
};
controller.prototype.action_login=function(){
	this.res.render("site/login",{
		"title":'Boss系统'
	})
}
exports.controller=controller
