const Koa = require('koa')
const KoaStatic = require('koa-static')
const path = require('path')

const app = new Koa()
const staticPath = path.join( __dirname,'./public')
app.use(KoaStatic(staticPath))
app.use(async(ctx)=>{
    ctx.body = 'hello world'
})
app.listen(3000,()=>{
    console.log('localhost 3000 start')
})