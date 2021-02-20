// 引入 express 模块
const express = require('express')
// 引入 ejs 模块引擎
const ejs = require('ejs')
// 实例化 express 对象
const app = express()
// 配置模板位置，默认是在views目录
app.set('views', __dirname + '/view')
// 注册 HTML 模板引擎
app.engine('html', ejs.__express)
// 配置 express 模板引擎为HTML
app.set('view engine', 'html')
// 配置静态 web 目录
// app.use(express.static('static'))
// 配置虚拟静态 web 目录
app.use('/public', express.static('static'))
// 配置路由
app.get('/', (req, res)=>{
    res.send('首页')
})

app.get('/userinfo', (req, res)=>{
    let userinfo = {
        name: '张三',
        age: 18,
        sex: '男',
        address: '<strong>河南南阳镇平晁陂</strong>'
    }
    let list = ['1111', '2222', '3333']
    let news = [
        {
            'title': '新闻111'
        },
        {
            'title': '新闻222'
        },
        {
            'title': '新闻333'
        }
    ]
    res.render('userinfo.html', {
        userinfo,
        list,
        news
    })
})

// 设置监听
app.listen(3032, ()=>{ console.log('app started at port 3031...') })

/*
1、在app.js的头上定义ejs，代码如下：
const ejs = require('ejs)
2、注册 html 模板引擎
app.engine('html', ejs.__express)
3、将模板引擎换成html
app.set('view engine', 'html)
*/

/*
如果希望所有通过 express.static 访问的文件都存放在一个"虚拟"目录下面，可以通过为静态资源目录指定一个挂载路径的方式来实现
app.use('/static', express.static('public'))
*/