// 引入 fs 模块
const fs = require('fs')
// 引入 url 模块
const url = require('url')
// 引入 path 模块
const path = require('path')

let getFileMime = function (extname) {
    let data = fs.readFileSync('./mime.json')
    let mime = JSON.parse(data.toString())
    return mime[extname]
}

exports.static = function (request, response, staticPath) {
    const pathname = url.parse(request.url).pathname    
    const extname = path.extname(pathname)
    if (pathname != '/favicon.ico') {
        fs.readFile('./' + staticPath + pathname, (err, data)=>{
            if (!err) {
                // 设置响应头
                // 状态码是200 文件类型是html 字符集是utf-8
                const mime = getFileMime(extname)
                response.writeHead(200, {'Content-Type':mime + ';charset="utf-8"'})
                // 结束响应
                response.end(data)
            }
        })
    }
}