const Koa= require('koa')
const Router = require('koa-router')
const indexRouter = require('./router/index')
const views = require('koa-views')
const path = require('path')
const koaStatic = require('koa-static')
var router = new Router()
const app = new Koa();
let viewsPath = path.join(__dirname,'./views')
const staticPath = path.join(__dirname,'./public')
app.use(koaStatic(staticPath))
app.use(views(viewsPath,{extension:'ejs'}))
router.use('/api/',indexRouter.routes())
app.use(router.routes())

app.listen(3000,()=>{
   console.log('loaclhost 3000 start')
})