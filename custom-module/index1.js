// 引入 http 模块
const http = require('http')
const tools = require('./module/tools.js')
console.log(tools)
// 创建 http 服务器
http.createServer((request, response)=>{
    // 设置响应头
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力学习!')
    console.log(tools.formatApi('home'))
    tools.get()
    // 结束响应
    response.end()
}).listen(3031)