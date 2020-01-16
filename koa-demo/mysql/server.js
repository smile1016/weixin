const Koa= require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const stdRouter  =require('./router/student')

var app = new Koa()
app.use(bodyParser())
var router = new Router()

router.use('/student',stdRouter.routes())
app.use(router.routes())

app.listen(3001,()=>{
    console.log('localhost 3001 start')
})