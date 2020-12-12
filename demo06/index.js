// 引入 http 模块
const http = require('http')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 url 模块
const url = require('url')
// 引入 routes 模块
const routes = require('./module/routes')
// 引入 querystring 模块
const querystring = require('querystring')
console.log(querystring)
// 创建 http 服务
http.createServer((request, response) => {
    console.log(request.method)
    // 构建静态 web 服务
    routes.static(request, response, 'static')
    // 路由
    const pathname = url.parse(request.url).pathname
    if (pathname == '/news') {
        const query = url.parse(request.url, true).query
        console.log(query)
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8'})
        response.end(JSON.stringify(query))
    } else if (pathname == '/login') {
        let msg = '多读书，要学会表达自己的想法!'
        let lists = [
            {
                'title': '新闻111'
            },
            {
                'title': '新闻222'
            },
            {
                'title': '新闻333'
            },
            {
                'title': '新闻444'
            }
        ]
        ejs.renderFile('./views/login.ejs', { msg, lists }, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
                response.end('404这个页面没找到!')
            }
            response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
            response.end(data)
        })
    } else if (pathname == '/logincenter') {
        ejs.renderFile('./views/logincenter.ejs', {}, (err, data) => {
            response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
            response.end(data)
        })
    } else if (pathname == '/doLogin') {
        var result = ''
        var count = 0
        request.on('data', (data)=>{
            result += data
            count += 1
        })

        request.on('end', ()=>{
            console.log(querystring.parse(result))
            console.log(count)
        })

        request.on('error', (err)=>{
            console.log(err)
        })
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
        response.end('登录')
    } else if (pathname == '/register') {
        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('执行注册')
    } else if (pathname == '/admin') {
        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('处理后端业务逻辑')
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('页面不存在')
    }

}).listen(3031, () => { console.log('app started at port 3031...') })