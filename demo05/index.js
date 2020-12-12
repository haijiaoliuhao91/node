// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')
// 引入 routes 模块
const routes = require('./module/routes')
// 创建 http 服务
http.createServer((request, response)=>{
    // 构建静态 web 服务
    routes.static(request, response, 'static')
    // 路由
    const pathname = url.parse(request.url).pathname

    if (pathname == '/login') {
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
        response.end('执行登录')
    } else if (pathname == '/register') {
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
        response.end('执行注册')
    } else if (pathname == '/admin') {
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
        response.end('处理后端业务逻辑!')
    }
}).listen(3031, ()=>{ console.log('app started at port 3031...') })