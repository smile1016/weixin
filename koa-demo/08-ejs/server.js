const Koa = require('koa')
const views = require('koa-views')
const ejs = require('ejs')
const path = require('path')
const app = new Koa()

const viewPath = path.join(__dirname,'./views')
// 记载模板引擎
app.use(views(
    viewPath,{
        extension:'ejs'
    }
))
app.use(async(ctx)=>{
    await ctx.render('home',{
        title:'gp16!'
    })
})
app.listen(3000,()=>{
    console.log('localhost 3000 start')
})