const randomStr = require('randomstring')
const xmljs = require('xml-js')
const genRandomStr = (len)=>{
    return randomStr.generate(len)
}
// xml扁平化
const xml2js = (xml)=>{
    let obj =  xmljs.xml2js(xml,{compact:true,cdataKey:'value',textKey:'value'}).xml
    // 数据扁平化
    let newObj = Object.keys(obj).reduce((tmp,key)=>{
        tmp[key] = obj[key]['value'];
        return tmp
    },{})
    return newObj
}

module.exports={
    genRandomStr,xml2js
}