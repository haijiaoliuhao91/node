// 引入 express 模块
const express = require('express')
const { route } = require('../../demo20/routes/login')
// 实例化 express 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('首页')
})
// 导出模块
module.exports = router