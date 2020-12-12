// 引入 express 模块
const express = require('express')
// 实例化 express 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('首页模块')
})
// 模块导出
module.exports = router