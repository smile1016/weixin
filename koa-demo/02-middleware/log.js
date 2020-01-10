const msg = 'hello'
function log(){
    return (ctx,next)=>{
        console.log(msg)
        // ctx.body = msg
        next()
    }
}
module.exports = log;