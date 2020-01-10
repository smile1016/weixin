const  Router = require('koa-router')
var router = new Router();
router.get('/beijing',(ctx)=>{
    ctx.body = ctx.request.query
})


module.exports = router