const http = require('http')
const querystr = require('querystring')
http.createServer((req,res)=>{
    console.log(req.url)
    console.log(querystr.parse(req.url))
    let params = querystr.parse(req.url)
    let {echostr} = params
    res.write(echostr)
    res.end()
}).listen(3000,()=>{
    console.log('localhost:3000 start')
})