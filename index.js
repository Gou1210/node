const fs = require('fs')
const http = require('http')
const server = http.createServer()
server.on('request',function(){
    console.log('我是requese')
})

server.listen(3000,function(){
    console.log("启动")
})