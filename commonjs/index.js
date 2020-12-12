/*
CommonJS规范的提出，主要是为了弥补当前JavaScript没有标准库的缺陷。它的终极目标是：提供一个类似Python、Ruby和Java语言的标准库，而不只是让JavaScript停留在小脚本程序的阶段。
用CommonJS API编写的应用，不仅可以利用JavaScript开发客户端应用，而且还可以编写以下应用
1、服务器端JavaScript应用程序.(node.js)
2、命令行工具
3、桌面图形界面应用程序
CommonJS就是模块化的标准，nodejs就是CommonJS模块化的实现。
*/

// 引入 http 模块
const http = require('http')
// 创建 http 服务
http.createServer((request, response)=>{
    // 设置响应头信息
    // 状态码是 200，文件类型是 html，字符集是 utf-8
    response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'})
    // 设置输出内容
    response.write('我们要努力学习吖!')
    response.write('<style>p {color: blue; font-size: 22px;}</style>')
    response.write('<p>我们一定都要努力学习吖!</p>')
    // 结束响应
    response.end()
    // listen 监听端口
}).listen(3031)