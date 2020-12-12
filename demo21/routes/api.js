// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('api接口')
})

module.exports = router