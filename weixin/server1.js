const http = require('http')
const querystr = require('querystring')
var app =http.createServer((req,res)=>{
    // console.log(req.url)
    // console.log(req.url)
    console.log(querystr.parse(req.url))
    let params = querystr.parse(req.url)
    let {echostr} = params
    res.write(echostr)
    res.end()
})
app.listen(3000,()=>{
    console.log('localhost:3000 start')
})