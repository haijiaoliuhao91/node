// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.render('login', {})
})

router.post('/doLogin', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

module.exports = router