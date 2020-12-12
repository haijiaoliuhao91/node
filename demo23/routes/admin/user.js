// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('路由模块')
})

router.get('/add', (req, res)=>{
    res.send('添加用户')
})

router.get('/edit', (req, res)=>{
    res.send('编辑用户')
})

router.post('/doAdd', (req, res)=>{
    res.send('执行添加用户操作')
})

router.post('/doEdit', (req, res)=>{
    res.send('执行修改用户操作')
})

// 导出模块
module.exports = router