const Router = require('koa-router')
const PaymentController = require('../controller/payment')
var router = new Router()
router.get('payment',PaymentController.getQRcode.bind(PaymentController))
router.post('notify',PaymentController.notify.bind(PaymentController))
module.exports = router