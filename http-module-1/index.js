// 引入http模块
const http = require('http')
const url = require('url')
// 创建http服务
http.createServer((request, response)=>{
    // 设置响应头信息
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力学习!')
    // 设置编码类型
    response.write('<head><meta charset="utf-8" /></head>')
    response.write('<h1>我们都要努力学习!</h1>')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031)
