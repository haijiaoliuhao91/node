// 引入 mongoose 模块
const mongoose = require('mongoose')
// 建立连接
mongoose.connect('mongodb://127.0.0.1:27017/finghting', {useNewUrlParser: true, useUnifiedTopology: true}, err=>{
    if (err) {
        console.log('数据库连接失败：' + err)
        return
    }
    console.log('数据库连接成功')
})
// 模块导出
module.exports = mongoose