// 引入 http 模块
const http = require('http')
// 引入 fs 模块
const fs = require('fs')

// fs.mkdir 创建目录
// fs.mkdir('./css', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('目录创建成功')
// })

// fs.rmdir('./css', { recursive: true }, (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('目录删除成功')
// })

// fs.appendFile('./css/index.css', 'body { color: blue; }', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('文件写入成功!')
// })

// fs.mkdir('./html', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('目录创建成功')
// })

// fs.writeFile('./html/index.html', '<p>努力学习~</p>', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('文件写入成功!')
// })

// fs.rename('./css/aaa.css', './css/base.css', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('文件重命名成功!')
// })

// fs.rename('./css/base.css', './html/aaa.css', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('文件移动成功')
// })

// fs.rmdir('./html', { recursive: true }, (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('目录删除成功!')
// })

// fs.unlink('./css/aaa.css', (err)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('删除文件成功!')
// })

// fs.readdir('../demo1', (err, files)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(files)
// })

// 读取文件
// fs.readFile('./css/index.css', (err, data)=>{
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data.toString())
// })

const path = './upload'
fs.stat(path, (err, stats)=>{
    if (err) {
        console.log(err)
        mkdir(path)
        return
    }

    if (stats.isDirectory()) {
        console.log('upload 是目录!')
    }

    if (stats.isFile()) {
        console.log('upload 是文件!')
        fs.unlink(path, (err)=>{
            if (err) {
                console.log(err)
                return
            }
            console.log('文件删除成功!')
            mkdir(path)
        })
    }
})

function mkdir(dir) {
    fs.mkdir(dir, (err)=>{
        if (err) {
            console.log(err)
            return
        }
        console.log('目录创建成功!')
    })
}

// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('努力生活!')
    // 结束响应
    response.end()
}).listen(3031, ()=>{ console.log('app started at port 3031...') })