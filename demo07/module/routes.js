// 引入 fs 模块
const fs = require('fs')
// 引入 url 模块
const url = require('url')
// 引入 path 模块
const path = require('path')
// 引入 ejs 模块
const ejs = require('ejs')
// 引入 querystring 模块
const querystring = require('querystring')

let getFileMimeSync = (extname) => {
    let data = fs.readFileSync('./mime.json')
    let mime = JSON.parse(data.toString())
    return mime[extname]
}

let app = {
    static: (request, response, staticPath) => {
        const pathname = url.parse(request.url).pathname
        const extname = path.extname(pathname)
        try {
            const data = fs.readFileSync('./' + staticPath + pathname)
            if (data) {
                const mime = getFileMimeSync(extname)
                // 设置响应头
                response.writeHead(200, { 'Content-Type': mime + ';charset="utf-8"' })
                // 结束响应
                response.end(data)
            }
        } catch (error) {

        }
    },
    login: (request, response) => {
        ejs.renderFile('./views/login.ejs', {}, (err, data) => {
            response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
            response.end(data)
        })
    },
    doLogin: (request, response) => {
        // 获取 post 请求的参数
        let postData = ''
        request.on('data', (data)=>{
            postData += data
        })

        request.on('end', ()=>{
            console.log(querystring.parse(postData))
        })

        request.on('error', (err)=>{
            console.log(err)
        })
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
        response.end('获取POST请求参数')
    },
    register: (request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('执行注册')
    },
    news: (request, response) => {
        response.writeHead(200, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('处理新闻')
    },
    error: (request, response) => {
        response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' })
        response.end('404这个页面找不到!')
    }
}

module.exports = app