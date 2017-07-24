var http=require('http');
var fs=require('fs');
var cheerio=require('cheerio');
var request=require('request');
var i=0;
var url = "http://www.ss.pku.edu.cn/index.php/newscenter/news/2391"; 
 function fetchPage(x){
     startRequest(x);
 }

 function startRequest(x){
     http.get(x,function(res){
         var html='';//用来存储哦请求网页的整个html内容
         var titles=[];
         res.setEncoding('utf-8');
         //监听data事件 每次取一块数据
         res.on('data',function(chunk){
             html+=chunk;
         });
         //监听end事件，如果整个网页内容的html都获取完毕么就执行回调函数
         res.on('end',function(){
             var $=cheerio.load(html);//采用cheerio模块解析html
             var time=$('.article-info a:first-child').next().text().trim();
             var news_item={
                 //获取文章标题
                 title:$('div.article-title a').text().trim(),
                 //获取文章发布的时间
                 Time:time,
                 //获取文章的url
                 link:"http://www.ss.pku.edu.cn"+$("div.article-title a").attr("href"),
                 //获取供稿单位
                 author:$("[title=供稿]").text().trim(),
                 //i是用来判断获取了多少篇文章的
                 i:i=i+1
             };
             console.log(news_item);
             var news_title=$('div.article-title a').text().trim();
             savedContent($,news_title);//存储每篇文章的内容以及标题
             savedImg($,news_title);//存储哦每篇文章的图片和图片标题
             //下一篇文章的utl
             var nextLink='http://www.ss.pku.edu.cn'+$("li.next a").attr('href');
             strl=nextLink.split('-');//去掉url后面的中文
             str=encodeURI(strl[0]);
             //通过控制i来控制爬去多少篇文章
             if(i<=500){
                 fetchPage(str)
             }
         });
     }).on('error',function(err){
        console.log(err)
     })
 }
 //这个函数的作用 在本地存储爬去到的新闻内容资源
 function savedContent($,news_title){
     $('.article-content p').each(function(index,item){
         var x=$(this).text();
         var y=x.substring(0,2).trim();
         if(y==''){
             x=x+'\n';
             //讲新闻文本内容一段一段添加到/data文件夹下面，并用新闻标题来命名文件
             fs.appendFile('/data/'+news_title+'.txt',x,'utf-8',function(err){
                 if(err){
                     console.log(err)
                 }
             })
         }
     })
 }
 //这个函数作用：在本地存储哦所爬去的图片资源
 function savedImg($,news_title){
     $('.article-content img').each(function(index,item){
        var img_title=$(this).parent().next().text().trim();
        if(img_title.length>35||img_title==''){
            img_title="NULL";
        }
        var img_filename=img_title+'.jpg';
        var img_src='http://www.ss.pku.edu.cn'+$(this).attr('src');//获取图片的url
        //采用request模块，向服务器发起一次请求，获取图片资源
        request.head(img_src,function(err,res,body){
            if(err){
                console.log(err)
            }
        });
        request(img_src).pipe(fs.createWriteStream('./image'+news_title+'---'+img_filename));

     })
 }
 fetchPage(url);//主程序开始