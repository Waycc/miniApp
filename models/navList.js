const mongoose = require('mongoose')
const settings = require('../settings.json')

// 连接数据库
mongoose.connect(settings.mongoUrl)

var Schema = mongoose.Schema

var NavListSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('NavList', NavListSchema)
