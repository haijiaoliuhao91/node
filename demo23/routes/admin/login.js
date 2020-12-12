// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.render('admin/login/login')
})

router.post('/doLogin', (req, res)=>{
    res.send(req.body)
})

// 导出模块
module.exports = router