// 引入 db 模块
const mongoose = require('./db')
// 创建 schema
const OrderItemSchema = mongoose.Schema({
    order_id: String,
    title: String,
    price: Number,
    num: Number
})
// 创建 model
const OrderItem = mongoose.model('OrderItem', OrderItemSchema, 'order_item')
// 模块导出
module.exports = OrderItem