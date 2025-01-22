import Mock from 'mockjs'
export default params => {
  // 使用 Mock
  var data = Mock.mock({
    'array|1-10': [
      {
        listItems: {
          'array|1-10': [
            {
              number: '@integer(1, 100)',
              text: '@string',
            },
          ],
        },
        name: '@string',
        text: '@string',
      },
    ],
  })
  return data
}
