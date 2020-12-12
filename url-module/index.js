// 导入 http 模块
const http = require('http')
// 导入 url 模块
const url = require('url')
// 创建 http 服务
http.createServer((request, response)=>{
    console.log(url.parse(request.url))
    console.log(url.parse(request.url, true))
    // 获取请求信息
    const req = url.parse(request.url, true)
    console.log(`pathname:${req.pathname}, search:${req.search}, path:${req.pathname}, name:${req.query.name}`)

    // 设置响应头信息
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力学习吖!')
    // 结束响应
    response.end()
    // listetn 监听端口
}).listen(3031)