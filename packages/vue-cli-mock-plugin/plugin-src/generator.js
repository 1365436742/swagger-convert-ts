module.exports = (api, options) => {
  // 添加依赖
  api.extendPackage({
    dependencies: {
      "proxy-mock-core": "*"
    },
  })
}