// 引入 url 模块
const url = require('url')

// 扩展 response
let changeRes = (response) => {
    response.send = (data) => {
        response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
        response.end(data)
    }
}

let server = () => {
    let G = {}
    // 把 get 和 post 分开
    G._get = {}
    G._post = {}
    let app = (request, response) => {
        // 扩展 response
        changeRes(response)
        const pathname = url.parse(request.url).pathname;
        const method = request.method.toLowerCase()
        if (G['_' + method][pathname]) {
            if (method == 'get') {
                G['_' + method][pathname](request, response)
            } else {
                // 获取 post 请求的参数，绑定到 request.body 中
                let postData = ''
                request.on('data', (data) => {
                    postData += data
                })

                request.on('end', () => {
                    request.body = postData
                    G['_' + method][pathname](request, response)
                })
            }
        } else {
            response.writeHead(404, {'Content-Type':'text/html;charset="utf-8"'})
            response.end('404要访问的页面不存在!')
        }
    }

    // 配置 get 请求
    app.get = (str, cb) => {
        // 注册方法
        G._get[str] = cb
    }
    // 配置 post 请求
    app.post = (str, cb) => {
        // 注册方法
        G._post[str] = cb
    }

    return app
}

module.exports = server()