// 引入 express 模块
const express = require('express')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 body-parser 模块
const bodyParser = require('body-parser')
// 实例化 express 对象
const app = express()

// parse application/x-www-format-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/login', (req, res)=>{
    ejs.renderFile('./views/login.ejs', (err, data)=>{
        res.send(data)
    })
})

app.post('/doLogin', (req, res)=>{
    //  1、获取 post 请求传递的参数
    // let postData = ''
    // req.on('data', (data)=>{
    //     postData += data
    // })
    // req.on('end', ()=>{
    //     console.log(postData)
    //     res.send(postData)
    // })

    // 2、body-parser 模块获取 post 请求传递的参数
    console.log(req.body)
    res.send(req.body)
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })