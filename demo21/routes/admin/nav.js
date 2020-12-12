// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 配置路由
router.get('/', (req, res)=>{
    res.send('导航菜单')
})

router.get('/add', (req, res)=>{
    res.send('添加导航')
})

router.get('/edit', (req, res)=>{
    res.send('编辑导航')
})

router.get('/doAdd', (req, res)=>{
    res.send('执行导航添加')
})

router.get('/doEdit', (req, res)=>{
    res.send('执行导航编辑')
})

module.exports = router