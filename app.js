const handleBlogRouter = require('./src/router/blog')
const getPostData=(req)=>{
    const promise = new Promise((resolve,reject)=>{
        if(req.method!=="POST"){
            resolve({})
            return
        }
        let postData = ''
        req.on('data',chunk=>{
            postData +=chunk.toString()
        })
        req.on('end',()=>{
            if(!postData){
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}
const serverHandle = (req,res)=>{
    res.setHeader('content-type','application/json')

    getPostData(req).then(postData=>{
        req.body = postData
        const blogData = handleBlogRouter(req,res)
        if(blogData){
            res.end(
                
                JSON.stringify(blogData)
                
            )
            return
        }
        res.writeHead(404,('content-type',"text/plain"))
        res.write("404 not fount/n")
        res.end()
    
    })







}

module.exports = serverHandle