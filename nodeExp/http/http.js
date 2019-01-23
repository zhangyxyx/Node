const http=require('http')
let server=http.createServer((req,res)=>{
    if(res){
        res.end('结束')
    }
})
server.listen(8080)