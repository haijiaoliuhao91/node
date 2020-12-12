// 引入 db 模块
const mongoose = require('./db')
// 初始化 schema
const BannerSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    link: {
        type: String,
        set (params) {
            if (params && params.indexOf('http://') != 0 && params.indexOf('https://') != 0) {
                return 'http://' + params
            }
            return params
        }
    },
    pic: String,
    status: {
        type: Number,
        default: 1
    }
})

// 初始化 model
const Banner = mongoose.model('Banner', BannerSchema, 'banner')

// 模块导出
module.exports = Banner