const {getList,newBlog} = require('../controller/blog')

const {SuccessModel,ErrorModel} = require('../model/resModel')
const queryString = require('querystring')
const handleBlogRouter = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = queryString.parse(url.split('?')[0])

    if(method==='GET'&&path==='/api/blog/list'){

        const author = query.author||''
        const keyWord = query.keyWord||''
        const listData = getList(author,keyWord)
        return new SuccessModel(listData)
    }
    if(method==='POST'&&path==='/api/blog/new'){

        const data = newBlog(req.body)
        return new SuccessModel(data)
    }
}

module.exports = handleBlogRouter  