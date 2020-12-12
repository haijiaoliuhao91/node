// 引入 http 模块
const http = require('http')
// 引入 url 模块
const url = require('url')
// 引入 routes 模块
const routes = require('./module/routes')
// 创建 http 服务
http.createServer((request, response) => {
    // 构建静态 web 服务
    routes.static(request, response, 'static')
    // 路由
    const pathname = url.parse(request.url).pathname.replace('/','')
    try {
        routes[pathname](request, response)
    } catch (error) {
        routes['error'](request, response)
    }
}).listen(3031, ()=>{ console.log('app started at port 3031..') })
