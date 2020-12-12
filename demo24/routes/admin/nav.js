// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 引入 tools 模块
const tools = require('../../model/tools')
// 配置路由
router.get('/', (req, res)=>{
    res.send('导航菜单')
})

router.get('/add', (req, res)=>{
    res.render('admin/nav/add')
})

router.get('edit', (req, res)=>{
    res.send('编辑导航菜单')
})

router.post('/doAdd', tools.multer().single('pic'), (req, res)=>{
    console.log(req.file)
    res.send({
        body: req.body,
        file: req.file
    })
})

router.post('/doEdit', (req, res)=>{
    res.send('执行编辑导航菜单')
})

// 模块导出
module.exports = router