var superagent=require('superagent');
var cheerio=require('cheerio');
var url=require('url');
var fs=require("fs");
var request=require('request');
var targeturl='https://movie.douban.com/chart';

var eventproxy=require('eventproxy');
var ep=new eventproxy()

var async=require('async')

superagent.get(targeturl).end(function(err,res){
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
            title:$title,
            //路径
            url:href
        }
        console.log($)
        saveImage($,news)
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

function saveImage($,news){
    $(".item .nbg img").each(function(index,item){
        var img_title=$(this).attr("alt");
        console.log(img_title)
        var img_filename=img_title+'.jpg';
        var img_src=$(this).attr("src");

        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err)
            }
        });
        request(img_src).pipe(fs.createWriteStream('./image/'+news+'---'+img_filename))
    })
}