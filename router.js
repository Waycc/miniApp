var express = require('express')
var NavList = require('./models/navList')

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

module.exports = router
