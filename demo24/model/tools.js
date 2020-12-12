// 引入 path 模块
const path = require('path')
// 引入 multer 模块
const multer = require('multer')

let tools = {
    multer: function () {
        let storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'static/uploads')
            },
            filename: function (req, file, cb) {
                let extname = path.extname(file.originalname)
                cb(null, Date.now() + extname)
            }
        })

        let upload = multer({ storage: storage })
        return upload
    },
    md5: function () {

    }
}

// 模块导出
module.exports = tools
