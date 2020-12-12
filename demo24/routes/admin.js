// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 引入外部模块
const login = require('./admin/login')
const nav = require('./admin/nav')
const user = require('./admin/user')
// 加载外部模块
router.use('/login', login)
router.use('/nav', nav)
router.use('/user', user)
// 配置路由
router.get('/', (req, res)=>{
    res.send('后台管理模块')
})
// 模块导出
module.exports = router