# MyNode
##Node crawler
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
<p class="highlight highlight-source-shell">下载：git clone 路径</p>
<p class="highlight highlight-source-shell">执行：node index.js</p>
##本地服务器
利用express连上mongodb数据库实现本地的一个服务器</br>
说明：
