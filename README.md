## Node crawler
这是用node实现爬虫效果，具体使用的技术有：</br>
superagent可以发起http请求</br>
cheerio解析http返回的html内容，可以理解为一个Node.js版的 jquery，使用方式跟jquery相同</br>
fs设置文件，在获取到图片的路径之后，可以实现将图片保存在本地</br>
request采用这个模块，向服务器发起请求，获取图片资源</br>
eventproxy：利用事件机制解决回调函数深度嵌套的问题</br>
async：多线程并发控制</br>
简要介绍：利用superagnet获取都路径下面的结果，使用cheerio将结果转为html解析，然后根据这个路径真实的页面下的html结果，获取你想获取的数据</br>
下载：git clone 路径</br>
执行：node index.js</br>

## 本地服务器
### 本地服务器是用express实现的一个可以连接mongodb的功能
#### 实现步骤
1. 下载npm node express(这个应该都会)
2. 下载好了之后执行npm start出现这种就是加载好了，然后再浏览器地址栏输入localhost:3000
3. 看一下当前的目录
  * database里面放的是链接mongodb的代码和设置前后台接口的代码；
  * app.js是这个是整个项目的入口，引入了express之类的模块和之前在database设置的后台代码实现后台代码和前台代码结合（用app.use(user)）
  * public里面的是前台页面公共的文件（比如需要引入一个jquery和公共的css文件）；
  * views是前台代码
4. 最后执行一个npm start命令，在浏览器中输入localhost:3000(默认端口号是3000)就可以看到你从数据库调取的数据了



