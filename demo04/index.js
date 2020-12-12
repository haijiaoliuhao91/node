// 引入 http 模块
const http = require('http')
// 引入 fs 模块
const fs = require('fs')
// 引入 url 模块
const url = require('url')
// 引入 path 模块
const path = require('path')
const common = require('./module/common.js')
// 创建 http 服务
http.createServer((request, response)=>{   
    let pathname = url.parse(request.url, true).pathname
    pathname = pathname === '/' ? '/index.html' : pathname
    // 可以获取后缀名 path.extname()
    let extname = path.extname(pathname)
    if (pathname != '/favicon.ico') {
        fs.readFile('./static' + pathname, async (err, data)=>{
            if (err) {
                response.writeHead(404, {'Content-Type':'text/html;charset="utf-8"'})
                response.end('404这个页面不存在')
            }
            // let mime = await common.getFileMime(extname)
            let mime = common.getFileMimeSync(extname)
            response.writeHead(200, {'Content-Type':mime+ ';charset="utf-8"'})
            response.end(data)
        })
    }
}).listen(3031,()=>{ console.log('app started at port 3031...') })

// 文件写入
// fs.writeFile('./input.txt', '123', (err)=>{
//     if (err) {
//         console.log('文件写入失败:' + err)
//         return
//     }
//     console.log('文件写入成功!')
// })

// 异步文件读取
// fs.readFile('./input.txt',(err, data)=>{
//     if (err) {
//         console.log('文件读取失败:' + err)
//         return
//     }
//     console.log('文件读取成功!')
//     console.log(data.toString())
// })
// console.log('代码执行完成!')

// 同步文件读取
// const data = fs.readFileSync('./input.txt')
// console.log(data.toString())
// console.log('文件读取成功!')