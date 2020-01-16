const Router = require('koa-router')
const jsdkController = require('../controller/jsdk')

var router= new Router()
router.get('jsapi',jsdkController.api.bind(jsdkController))

module.exports = router;