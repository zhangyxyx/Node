//http的库 可以发起http请求
var superagent=require('superagent');
//解析http返回的html内容 可以理解为一个nodejs的jquery
var cheerio=require('cheerio');
var url=require('url');
//获取文件
var fs=require("fs");
var request=require('request');
//初始url
var targeturl='https://movie.douban.com/chart';
//利用事件机制解决回调函数深度嵌套的问题
var eventproxy=require('eventproxy');
var ep=new eventproxy()
//多线程并发控制
var async=require('async')

fetPage(targeturl);
function fetPage(start){
    getdata(start)
}
function getdata(newurl){
superagent.get(newurl).end(function(err,res){
    if(err){
        return console.error(err)
    }
    console.log('爬虫开始')
    var $=cheerio.load(res.text);//利用cheerio开始解析页面
    var repoUrls=[];//保存url
    var titleArray=[];
    console.log($('.item .pl2').length)
    $(".item .pl2").each(function(index,element){
        var $element=$(element);
        var href=url.resolve('https://movie.douban.com',$element.find("a").attr('href'))
     
        repoUrls.push(href)

        //获取每个仓库名字
        var $title=$element.find("a").contents()

        $title=$title[0].data.substr(0,$title.length-1)
        titleArray.push($title)

        var news={
            //名字
            title:$(".item .nbg").attr("title"),
            //路径
            url:href
        }

        saveImage($,news);
        saveFile($,news)
    })
    repoUrls=repoUrls.slice(0,2)

    concurrencyCount=0;//当前并发记录
    var fetchUrl=function(repoUrl,callback){
        concurrencyCount++
        console.log('现在的并发数是',concurrencyCount,',正在抓取的是',repoUrl)
        superagent.get(repoUrl).end(function(err,res){
            var $=cheerio.load(res.text);
            //对也面内容进行解析
            var httpGitUrl=$('.item').attr('value')

            return ({
                title:$(".item .nbg").attr("title"),
                url:repoUrl,
                httpGitUrl:httpGitUrl
            })
            concurrencyCount--;
            callback(null,repoUrl)
        });
       
    }

    async.mapLimit(repoUrls,5,function(repoUrl,callback){
        //对每个url进行相关处理
        fetchUrl(repoUrl,callback)
    },function(err,result){
        console.log('final');

    }
    )
})
}
//保留文件
function saveFile($,news){
    $(".item .pl").each(function(index,item){
        var x=$(this).text();
        console.log(news)
        x=x+"\n";
        fs.appendFile('./data/'+news+'.txt',x,'utf-8',function(err){
            if(err){
                console.log(err)
            }
        })
    })
}
//保留图片资源
function saveImage($,news){
    $(".item .nbg img").each(function(index,item){
        var img_title=$(this).attr("alt");//获取图片名字
        var img_filename=img_title+'.jpg';
        var img_src=$(this).attr("src");//获取图片的路径
        //采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err)
            }
        });

        request(img_src).pipe(fs.createWriteStream('./image/'+img_filename))
    })
}