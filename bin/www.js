const http = require('http')

const serverHandle = require('../app')

const server = http.createServer(serverHandle)

server.listen(3333)
console.log('成功启动')