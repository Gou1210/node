const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const resData = {
        method,
        url

    }
    if(method==='GET'&&url==='/api/blog/list'){
        return{
            msg:"我是列表页"
        }
    }
}

module.exports = handleBlogRouter  