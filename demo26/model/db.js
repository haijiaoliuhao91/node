// 引入 mongoose 模块
const mongoose = require('mongoose')
// 建立连接
mongoose.connect('mongodb://127.0.0.1/finghting', err=>{
    if (err) {
        console.log('数据库连接失败:' + err)
        return
    }
    console.log('数据库连接成功!')
})
// 导出模块
module.exports = mongoose