// 引入 order_item 模块
// const OrderItem = require('./model/order_item')
// 查找数据
// OrderItem.find({}, (err, res)=>{
//     if (err) {
//         console.log('查找数据失败：' + err)
//         return
//     }
//     console.log('查找数据成功')
//     console.log(res)
// })
// 添加数据
// 方法一
// const orderItem = new OrderItem({
//     order_id: '1232',
//     title: '这是一个好商品',
//     price: 119,
//     num: 10
// })

// orderItem.save((err, doc)=>{
//     if (err) {
//         console.log('添加数据失败：' + err)
//         return
//     }
//     console.log('添加数据成功')
//     console.log(doc)
// })

// 方法二

// 删除数据
// OrderItem.deleteOne({order_id: 10}, err=>{
//     if (err) {
//         console.log('删除数据失败：' + err)
//         return
//     }
//     console.log('删除数据成功')
// })

// 引入 order 模块
// const Order = require('./model/order')
// 表关联查询
// Order.aggregate([
//     {$lookup:{from:'order_item',localField:'order_id',foreignField:'order_id',as:'lists'}},
//     {$sort:{all_price:1}},
//     {$project:{uid:1,trade_no:1,all_price:1,all_num:1,lists:1}}
// ], (err, res)=>{
//     if (err) {
//         console.log('表关联查询失败：' + err)
//         return
//     }
//     console.log('表关联查询成功')
//     console.log(JSON.stringify(res))
// })

// 引入 order order_item 模块
const OrderItem = require('./model/order_item')
// 表关联查询
OrderItem.aggregate([
    {$lookup:{from:'order',localField:'order_id',foreignField:'order_id',as:'order_info'}},
    {$match: {title: '酸奶'}}
], (err, res)=>{
    if (err) {
        console.log('表关联查询失败：' + err)
        return
    }
    console.log('表关联查询成功')
    console.log(JSON.stringify(res))
})