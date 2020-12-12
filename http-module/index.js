// 引入http模块
const http = require('http')
// 创建http服务
http.createServer((request, response) => {
    const { url, method } = request
    console.log('url', url)
    console.log('method', method)
    // 设置响应头信息 
    // 状态码是 200 文件类型是 html 字符集是 utf-8
    response.writeHead(200, {'Content-Type':'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('我们都是一个好人')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031)