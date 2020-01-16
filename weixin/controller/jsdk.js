const {get} = require('../model/http')
const {appID,secret,curUrl} = require('../config/config')
const  {genNoncestr,genTimestamp} = require('../util/utils')
const crypto = require('crypto')

class Jsdk{
    async _getToken(){
        let url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${secret}`
        let rs = await get(url)
        return rs.data.access_token;
    }
    async _getTicket(access_token){
        let url = `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
        let rs = await get(url)
        // console.log(rs)
        return rs.data.ticket
    }
    async api(ctx){
        // 1.查询数据库是否存在token
        //2 如果存在token，判断是否在有效期内
        // let rs = await db('select  * from token')
        // console.log(rs)
        //1.获取access_token
        let access_token = await this._getToken()
        // console.log(access_token)
       
        //2.用第一步拿到的access_token 采用http GET方式请求获得jsapi_ticket（有效期7200秒，开发者必须在自己的服务全局缓存jsapi_ticket）：https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=ACCESS_TOKEN&type=jsapi
        let ticket = await this._getTicket(access_token)
        // console.log(ticket)

        //3.生成签名 参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。这里需要注意的是所有参数名均为小写字符。对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义。即signature=sha1(string1)
        let noncestr= genNoncestr(32)
        let timestamp = genTimestamp()
        let str1 = `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${curUrl}`
        
        let signature = crypto.createHash('sha1').update(str1).digest('hex')
        ctx.body = {
            appId: appID, // 必填，公众号的唯一标识
            timestamp:timestamp , // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名
        }
    }
}
module.exports = new Jsdk()