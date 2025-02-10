module.exports = ({ req, res }) => {
  console.log(req.query, 'get请求入参')
  // 使用 Mock
  var data = {
    test: '测试字段',
  }
  return data
}
