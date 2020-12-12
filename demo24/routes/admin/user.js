// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('用户列表模块')
})

router.get('/add', (req, res)=>{
    res.send('增加用户')
})

router.get('/edit', (req, res)=>{
    res.send('编辑用户')
})

router.post('/doAdd', (req, res)=>{
    res.send('执行增加用户')
})

router.post('/doEdit', (req, res)=>{
    res.send('执行编辑用户')
})

// 模块导出
module.exports = router