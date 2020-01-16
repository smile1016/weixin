const randomstr = require('randomstring')
exports.genNoncestr=(len)=>{
    return randomstr.generate(len)
}
exports.genTimestamp=()=>{
    return Math.floor(new Date().getTime()/1000)
}