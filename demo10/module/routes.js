// 引入 fs 模块
const fs = require('fs')
// 引入 url 模块
const url = require('url')
// 引入 path 模块
const path = require('path')

// 扩展 response
let changeRes = (response) => {
    response.send = (data) => {
        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end(data)
    }
}

// 获取文件的MIME
let getFileMimeSync = (extname) => {
    let data = fs.readFileSync('./mime.json')
    let mime = JSON.parse(data.toString())
    return mime[extname]
}

// 配置静态 web 服务
let initStatic = (request, response, staticPath) => {
    const pathname = url.parse(request.url).pathname
    const extname = path.extname(pathname)
    console.log(pathname)
    try {
        let data = fs.readFileSync('./' + staticPath + pathname)
        if (data) {
            let mime = getFileMimeSync(extname)
            response.writeHead(200, { 'Content-Type': mime + ';charset="utf-8"' })
            response.end(data)
        }
    } catch (error) {

    }
}

let server = () => {
    let G = {
        _get: {},
        _post: {},
        staticPath: 'static'
    }
    let app = (request, response) => {
        // 扩展 response
        changeRes(response)
        const pathname = url.parse(request.url).pathname
        const method = request.method.toLowerCase()
        // 配置静态 web 服务
        initStatic(request, response, G.staticPath)
        if (G['_' + method][pathname]) {
            if (method == 'get') {
                G['_' + method][pathname](request, response)
            } else {
                // 解析 post 请求的参数，并添加到 request.body 上
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
            response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
            response.end('404这个页面不存在!')
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

    // 配置静态web服务目录
    app.static = (staticPath) => {
        G.staticPath = staticPath
    }

    return app
}

module.exports = server()