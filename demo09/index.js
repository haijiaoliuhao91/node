// 引入 http 模块
const http = require('http')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 routes 模块
const routes = require('./module/routes')
// 注册 web 服务
http.createServer(routes).listen(3031, ()=>{ console.log('app started at port 3031...') })
// 配置路由’
routes.get('/', (request, response)=>{
    response.send('首页!')
})
// 配置路由
routes.get('/login', (request, response)=>{
    ejs.renderFile('./views/login.ejs', {}, (err, data)=>{
        response.send(data)
    })
})
// 配置路由
routes.get('/news', (request, response)=>{
    response.send('新闻页面!')
})
// 配置路由
routes.post('/doLogin', (request, response)=>{
    response.send(request.body)
})
