module.exports = ({ _proxyRes, req, res }) => {
  console.log(req.query, 'xxxx222')
  // 使用 Mock
  var data = {
    test: '测试字段',
  }
  return data
}
