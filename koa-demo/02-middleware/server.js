const Koa = require('koa')
// const log = require('./log')
const app = new Koa()
// app.use(log())
app.use(async(ctx,next)=>{
    console.log('1 next之前')
    await next()
    console.log('1 next之后')
    // ctx.body = 'hello world'
})
app.use(async(ctx,next)=>{
    console.log('2 next之前')
    await next()
    console.log('2 next之后')
})
app.use(async(ctx,next)=>{
    console.log('3 next之前')
    await next()
    console.log('3 next之后')
})
app.listen(3000,()=>{
    console.log('localhost 3000 start')
})