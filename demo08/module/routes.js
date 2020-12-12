//  引入 url 模块
const url = require('url')
let G = {}
let app = (request, response) => {
    const pathname = url.parse(request.url).pathname
    if (G[pathname]) {
        G[pathname](request, response)
    } else {
        response.writeHead(404, {'Content-Type':'text/html;charset="utf-8"'})
        response.end('404要访问的页面不存在!')
    }
}

app.get = (str, cb) => {
    // 注册方法
    G[str] = cb
}

module.exports = app