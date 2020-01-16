const  Router = require('koa-router')
var router = new Router();
router.post('/commingsoon',(ctx)=>{
    ctx.body = ctx.request.body
})
router.get('/hotshow',(ctx)=>{
    ctx.body = 'hotshow'
})

module.exports = router