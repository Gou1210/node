const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request',function(request,response){
    console.log('收到客户端请求'+request.url)
    response.wridte('hello')
    response.end()
})

server.listen(3000,function(){
    console.log("启动")
})