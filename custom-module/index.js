// 引入 http 模块
const http = require('http')
// 创建 http 服务器
http.createServer((request, response)=>{
    // 设置响应头
    // 状态码是 200，文件集是 html，字符集 urf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('我们都要努力!')
    response.write('<head><style> p { color: red;font-size: 25px;font-weight: bold;font-style: italic; } </style></head>')
    response.write(`<p>${formatApi('home')}</p>`)
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031)

function formatApi(url) {
    return "https://www.baidu.com/" + url;
}