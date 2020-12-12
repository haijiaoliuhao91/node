// 引入 express 模块
const express = require('express')
// 实例化 express 对象
const app = express()

// 配置路由
app.get('/', (req, res)=>{
    res.send('你好 express!')
})

app.get('/article', (req, res)=>{
    res.send('新闻页面')
})

app.get('/login', (req, res)=>{
    res.send('登录页面')
})

app.get('/register', (req, res)=>{
    res.send('注册页面')
})

app.post('/doLogin', (req, res)=>{
    console.log('执行登录')
    res.send('执行登录')
})

app.head('/head', (req, res)=>{
    console.log('获取和get请求相同的响应报头，但没有具体内容')
    res.send('获取和get请求相同的响应报头，但没有具体内容')
})

app.put('/put', (req, res)=>{
    console.log('传递数据至服务器，新建或替换目标资源')
    res.send('传递数据至服务器，新建或替换目标资源')
})

app.delete('/delete', (req, res)=>{
    console.log('请求服务器删除指定的URI资源')
    res.send('请求服务器删除指定的URI资源')
})

app.options('/options', (req, res)=>{
    console.log('用于请求目标资源可用的通讯选项信息')
    res.send('用于请求目标资源可用的通讯选项信息')
})

app.connect('/connect', (req, res)=>{
    consoe.log('于选择能动态切换到隧道的代理服务器')
    res.send('用于选择能动态切换到隧道的代理服务器')
})

app.trace('/trace', (req, res)=>{
    console.log('沿着目标资源的路径执行一条消息环回诊断和测试')
    res.send('沿着目标资源的路径执行一条消息环回诊断和测试')
})

app.patch('/patch', (req, res)=>{
    console.log('用于对已经存在的资源进行局部修改')
    res.send('用于对已经存在的资源进行局部修改')
})

// 设置多级路由
app.get('/user/order/list', (req, res)=>{
    res.send('用户订单列表')
})

app.get('/user/admin/add', (req, res)=>{
    res.send('添加用户!')
})

// 动态路由 配置路由的时候也要注意顺序
app.get('/article/add', (req, res)=>{
    res.send('article add')
})

app.get('/article/:id', (req, res)=>{
    res.send('动态路由:' + req.params.id)
})

// get 传值
app.get('/product', (req, res)=>{
    res.send(req.query)
})

// 设置监听
app.listen(3031, ()=>{ console.log('app started at port 3031...') })