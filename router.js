var express = require('express')
var NavList = require('./models/navList')
var ShopList = require('./models/swiper.js')

var router = express.Router()


router.get('/navList', function(req, res){
  let result = {
    'msg': '',
    'data': []
  }
  NavList.find({}, function (err, doc) {  
    if (err) {
      result['msg'] = '获取类型列表出错'
      return res.json(result)
    }
    result.data = doc
    return res.json(result)
  })
})

router.get('/swiper/:categoryId([1-9]*)', function(req, res){
    let categoryId = req.params.categoryId
    let page = req.query.page || 1
    let pageSize = req.query.pageSize || 20
    let swiperCount = 10;
    ShopList.countDocuments({
        categoryId: categoryId
    }).then(function(count){
        swiperCount = count
        return ShopList.find({categoryId: categoryId}, null, {skip: (page - 1) * pageSize, limit: pageSize})
    }).then(function(doc){
        return res.json({
            count: swiperCount,
            msg: '',
            data: doc
        })
    })
})

module.exports = router
