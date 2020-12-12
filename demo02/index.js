// 引入 http 模块
const { mkdir } = require('fs')
const http = require('http')
// 引入 mkdirp 模块
const mkdirp = require('mkdirp')

console.log(mkdirp)

mkdirp.sync('./upload/aaa/bbb')


// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是 200 文件类型是 html 字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力吖！加油鸭!')
    // 结束响应
    response.end('<p>上海--北京--广州</p>')
}).listen(3031, ()=>{ console.log('app started at port 3031...') })