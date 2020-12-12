let G = {}
let app = function (request, response) {
    if (G['/login']) {
        G['/login'](request, response)
    }
}

app.get = function (str, cb) {
    G[str] = cb
}

app.get('/login', function (request, response) {
    console.log('执行登录操作')
})

setTimeout(() => {
    app()
}, 2000);