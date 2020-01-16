const Koa= require('koa')
const static = require('koa-static')
const path = require('path');
const Router = require('koa-router')
const indexRouter = require('./router/index')
var app = new Koa()
let staticPath = path.join(__dirname,'./public')
var router= new Router()
router.use('/',indexRouter.routes())
app.use(static(staticPath))
app.use(router.routes())

app.listen(3000,()=>{
    console.log('localhost 3000 atart')
})