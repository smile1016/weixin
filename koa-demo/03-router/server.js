const Router = require('koa-router')
const movieRouter = require('./router/movie')
const theaterRouter = require('./router/theater')

const Koa = require('koa')
const app = new Koa()

var router = new Router()
router.use('/movie',movieRouter.routes())
router.use('/theater',theaterRouter.routes())
// app.use(async(ctx)=>{
//     ctx.body = 'hello world'
// })
app.use(router.routes())
app.listen(3000,()=>{
    console.log('localhost 3000 start')
})