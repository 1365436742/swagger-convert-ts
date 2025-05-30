export const cjsTemplate = `module.exports = ({ req, res }) => {
    // 使用 Mock
    var data = {
        test:"测试字段"
    }
    return data
}
`
export const cjsMockTemplate = (
  mockJson: Record<string, any>,
) => `var Mock = require('mockjs');
module.exports = ({ req, res }) => {
    // 使用 Mock
    var data = Mock.mock(${JSON.stringify(mockJson, null, 2)})
    return data
}
`

export const ejsTemplate = `export default ({ req, res }) => {
    // 使用 Mock
    var data = {
        test: "测试字段"
    }
    return data
}
`

export const ejsMockTemplate = (
  mockJson: Record<string, any>,
) => `import Mock from 'mockjs';
export default ({ req, res }) => {
    // 使用 Mock
    var data = Mock.mock(${JSON.stringify(mockJson, null, 2)})
    return data
}
`
