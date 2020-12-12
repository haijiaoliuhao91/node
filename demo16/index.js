// 引入 express 模块
const express = require('express')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 body-parser 模块
const bodyParser = require('body-parser')
// 实例化 express 对象
const app = express()
// 配置静态 web 服务目录
app.use(express.static('static'))
// 配置虚拟静态 web 目录
// app.use('/public', express.static('static'))
// 配置解析 application/x-www-form-urlencoded
// 配置解析 application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// 配置模板位置，默认是在 views 目录
app.set('views', __dirname + '/view')
// 配置 ejs 模板引擎
app.engine('html', ejs.__express)
app.set('view engine', 'html')

// 配置路由
app.get('/', (req, res)=>{
    res.send('首页')
})

app.get('/login', (req, res)=>{
    res.render('login.html', {})
})

// app.post('/doLogin', (req, res)=>{
//     let postData = ''
//     req.on('data', (data)=>{
//         postData += data
//     })

//     req.on('end', ()=>{
//         console.log(postData)
//         res.send(postData)
//     })  
// })

app.post('/doLogin', (req, res)=>{
    console.log(req.body)
    res.send(req.body)
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })
