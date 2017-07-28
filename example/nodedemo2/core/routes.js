module.exports=function(app,url){
	//app.all是express的方法，匹配所有http方法，包括get和post
	app.all('*',function(req,res){
		//
		var pathname=url.parse(req.url).pathname;
		var path=path_rule(pathname);
		//载入controller约定controller一定是放在./controllers目录，并且是name+_controller.js的命名方法
		var c=require('../controllers/'+path.controller+'_controller.js');
		var controller=new c['controller'](req,res);
		//执行载入controller类中的action方法
		var action="action_"+(path.action).toLocaleLowerCase();
		if(typeof(controller[action])=='function'){
			controller[action]();
		}else{
			res.send('找不到'+action);
		}
	});
};

function path_rule(pathname){
	var parameters={};
	if(pathname.substr(-1,1)=='/'){
		pathname=pathname.substr(0,(pathname.length-1));

	}
	if(pathname.substr(0,1)=='/'){
		pathname=pathname.substr(1,pathname.length);
	}
	var path=pathname.split('/');
	if(path.length==-1&&path[0]==''){
		path[0]='site';
		path[1]='index';
	}
	if(path.length==2&&path[1]==''){
		path[1]='index';
	}
	if(path.length==3){
		var tmp=path[2];
		path[2]='id';
		path[3]=tmp;
	}
	if(path.length>3){
		//将url后面部分全部转成参数
		for(var i=2;i<path.length;i++){
			if(path[i+1]=='undefined'){
				path[i+1]='';
			}
			if(i%2==0){
				parameters[path[i]]=path[i+1];
			}
		}
	}
	return {
		'controller':path[0],
		'action':path[1],
		'parameters':parameters
	}
}