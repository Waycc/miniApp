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
  images: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: String,
  address: String,
  score: String,
  tags: {
      type: Array
  },
  comments: {
      type: Array
  },
  businessHours: String,
  supportService: String,
  introduction: String,
  link: String,
  categoryId: Number
})

module.exports = mongoose.model('ShopList', NavListSchema)

