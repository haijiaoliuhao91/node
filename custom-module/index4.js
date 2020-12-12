// 引入 http 模块
const http = require('http')

// 没设置package.json之前的引入方式
// const db = require('db/db.js')
// console.log(db)
// db.add()
// db.insert()
// db.delete()

// 设置package.json之后的引入方式
const db = require('db')
console.log(db)


// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力生活!')
    // 结束响应
    response.end('加油鸭!')
    // listen 监听端口
}).listen(3031, ()=>{ console.log('app started at port 3031...') })