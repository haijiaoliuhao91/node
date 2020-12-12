// 引入 express 模块
const express = require('express')
// 实例化 router 对象
const router = express.Router()
// 引入 path 模块
const path = require('path')
// 引入 silly-datetime 模块
const sd = require('silly-datetime')
// 引入 multer 模块
const multer = require('multer')
// 配置 multer 磁盘引擎
let storage = multer.diskStorage({
    // 指定文件存放路径
    destination: function (req, file, cb) {
        // 上传之前目录必须存在
        cb(null, 'static/uploads')
    },
    // 指定文件名
    filename: function (req, file, cb) {
        let extname = path.extname(file.originalname)
        console.log(extname)
        cb(null, Date.now() + extname)
    }
})
// 实例化 multer 对象
const upload = multer({ storage: storage })
// 配置路由
router.get('/', (req, res)=>{
    res.send('导航模块')
})

router.get('/add', (req, res)=>{
    res.render('admin/nav/add')
})

router.get('/edit', (req, res)=>{
    res.send('编辑导航菜单')
})

router.post('/doAdd', upload.single('pic'), (req, res)=>{
    res.send({
        body: req.body,
        file: req.file
    })
})

router.post('/doEdit', (req, res)=>{
    res.send('执行导航菜单编辑')
})

// 导出模块
module.exports = router