module.exports = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.removeHeader('Content-Length');

  res.statusCode = 200
  let timeoutId
  // 页面刷新要进行关闭
  res.on('close', () => {
    timeoutId && clearInterval(timeoutId)
    if (!res.writableEnded) {
      res.end()
    }
  })
  // 自定义 JSON 内容
  const customData = [
    { id: 1, message: 'First chunk' },
    { id: 2, message: 'Second chunk' },
    { id: 3, message: 'Third chunk' },
  ]
  // 分段发送自定义 JSON 内容
  for (const data of customData) {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
    await new Promise(resolve => {
      // 定时时间间隔
      timeoutId = setTimeout(resolve, 1000)
    }) // 模拟延迟
  }
  return {}
}
