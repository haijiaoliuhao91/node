
// 引入 http 模块
const http = require('http')
// 引入 routes 模块
const routes = require('./module/routes')
// 注册 Web 服务
http.createServer(routes).listen(3031, ()=>{ console.log('app started at port 3031...') })
// 配置路由
routes.get('/', (request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
    response.end('首页!')
})
// 配置路由
routes.get('/login', (request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
    response.end('执行登录!')
})
// 配置路由
routes.get('/news', (request, response)=>{
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
    response.end('新闻页面!')
})