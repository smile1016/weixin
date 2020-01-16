const config = require('../config/config')
const {
    genRandomStr,
    xml2js
} = require('../utils/tool')
const io = require('../utils/socket')
const log = require('../utils/log')
const quaryString = require('querystring')
const crypto = require('crypto')
const xmljs = require('xml-js')
const getRawBody = require('raw-body')
const qrcode = require('qrcode')
const contentType = require('content-type')
const {
    post
} = require('../model/http')
var client = null;
io.on('connection',(curClient)=>{
    client = curClient
})
class Payment {
    _genSign(params) {
        delete params['sign']
        // 为空不参与
        for(let o in params){
            if(!params[o]){
                delete params[o]
            }
        }

        var newObj = Object.keys(params).sort().reduce((obj, key) => {
            obj[key] = params[key];
            return obj
        }, {})

        let stringA = quaryString.stringify(newObj, null, null, {
            encodeURIComponent: (val) => {
                return quaryString.unescape(val)
            }
        })
        let stringSignTemp = stringA + `&key=${config.key}`
        log.debug(stringSignTemp)
        // 签名
        let sign = crypto.createHash('md5').update(stringSignTemp).digest('hex').toUpperCase();
        return sign
    }
    // 获取二维码
    async getQRcode(ctx) {

        // 公众号ID
        let appid = config.appid;
        // 商户号
        let mch_id = config.mchid;
        //随机字符串
        let nonce_str = genRandomStr(32).toUpperCase()
        //商品描述
        let body = '一听可乐'
        // 商品订单号
        let out_trade_no = '00005'
        // 标价金额
        let total_fee = 1
        // 终端ip
        let spbill_create_ip = '127.0.0.1'
        // 通知地址
        let notify_url = 'https://www.zhuangxiaolin.xyz/api/notify'
        // 交易类型
        let trade_type = 'NATIVE'

        let params = {
            appid,
            mch_id,
            nonce_str,
            body,
            out_trade_no,
            total_fee,
            spbill_create_ip,
            notify_url,
            trade_type
        }

        // 签名
        let sign = this._genSign(params)
        let json = {
            xml: {
                ...params,
                sign
            }
        }
        let xml = xmljs.json2xml(json, {
            compact: true
        })
        let rs = await post(config.url, xml)
        // xml扁平化
        let obj = xml2js(rs.data)
        // console.log(obj)
        // ctx.body = rs.data
        if (obj.return_code === 'SUCCESS') {
            if (obj.err_code === 'ORDERPAID') {
                await ctx.render('paid')
            } else {
                let code = await qrcode.toDataURL(obj.code_url)
                await ctx.render('qrcode', {
                    code
                })
            }

        }
    }
    // 支付结果通知
    async notify(ctx) {
        // console.log(ctx.req)
        let xml = await getRawBody(ctx.req, {
            length: ctx.req.headers['content-type'],
            limit: '1mb',
            encoding: contentType.parse(ctx.req).parameters.charset
        })
        log.debug(xml.toString())
        let obj = xml2js(xml)
        let orignSign = obj.sign
        log.debug(obj)
        let sign = this._genSign(obj)
        log.debug('orignSign',orignSign)
        log.debug('mysign:',sign)
        if (sign === orignSign) {
            client.emit('msg','支付成功')
            ctx.body = `
            <xml>
                <return_code><![CDATA[SUCCESS]]></return_code>
                <return_msg><![CDATA[OK]]></return_msg>
            </xml>
            `
        } else {
            client.emit('msg','支付失败')
            ctx.body = `
            <xml>
                <return_code><![CDATA[FAIL]]></return_code>
                <return_msg><![CDATA[OK]]></return_msg>
            </xml>
            `
        }
    }
}
module.exports = new Payment()