const handleBlogRouter = require('./src/router/blog')
const queryString = require('querystring')
const serverHandle = (req,res)=>{
    res.setHeader('content-type','application/json')

    const blogData = handleBlogRouter(req,res)

    const url = req.url

    req.path = url.split('?')[0]
    const query = queryString.parse(url.split('?')[0])


    if(blogData){
        res.end(
            JSON.stringify(blogData)
        )
        return
    }
   res.writeHead(404,('content-type',"text/plain"))
   res.write("404 not fount/n")
   res.end()
}

module.exports = serverHandle