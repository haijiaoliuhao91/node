// 引入 http 模块
const http = require('http')
// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头信息
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('要努力学习吖!')
    response.write('<style>p { color: red;}</style>')
    response.write('<p>我们都要努力学习吖!</p>')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031)