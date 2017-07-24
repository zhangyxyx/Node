# MyNode
<span>demo文件里面放的都是刚开始看node的时候一个语法一个语法敲的例子</span></br>
<span>nodedemo1是照着别人的项目写的<a href="http://www.nodebeginner.org/index-zh-cn.html#about">地址</a></span></br>
<span>nodedemo2同样是照着别人的项目写的<a href="http://blog.csdn.net/as17618/article/details/17791735">地址</a></span>
<h3>Node crawler</h3>
<p>这个文件夹里面是node实现爬虫的效果</p>
<p>具体使用的技术有：</p>
<ul>
  <li>superagent可以发起http请求</li>
  <li>cheerio解析http返回的html内容，可以理解为一个Node.js版的 jquery，使用方式跟jquery相同</li>
  <li>fs设置文件，在获取到图片的路径之后，可以实现将图片保存在本地</li>
  <li>request采用这个模块，向服务器发起请求，获取图片资源</li>
  <li>eventproxy：利用事件机制解决回调函数深度嵌套的问题</li>
  <li>async：多线程并发控制</li>
</ul>
<p>简要介绍：利用superagnet获取都路径下面的结果，使用cheerio将结果转为html解析，然后根据这个路径真实的页面下的html结果，获取你想获取的数据</p>
<h3>下载：git clone 路径</h3>
<h3>执行：node index.js</h3>
