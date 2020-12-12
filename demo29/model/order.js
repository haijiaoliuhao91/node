// 引入 db 模块
const mongoose = require('./db')
// 创建 schema
const OrderSchema = mongoose.Schema({
    order_id: String,
    uid: String,
    trade_no: String,
    all_price: Number,
    all_num: Number
})
// 创建 model
const Order = mongoose.model('Order', OrderSchema, 'order')
// 模块导出
module.exports = Order