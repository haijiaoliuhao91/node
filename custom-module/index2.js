// 引入 http 模块
const http = require('http')

// const xxx = require('./module/request.js')
// console.log(xxx)
// xxx.request.get()
// xxx.request.post()

const xxx = require('./module/request.js')
console.log(xxx)
xxx.get()
xxx.post()

// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力生活')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031, ()=>{ console.log('app started at port 3031...') })
