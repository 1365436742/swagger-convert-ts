import './index.less'
import FormItemMoncaoEditor from '../../../components/FormItemMoncaoEditor'
import { jsonToTs } from '../../../apis/toolbox'
import { useState } from 'react'
import { useDebounceFn } from 'ahooks'
import { Form } from 'antd'
const JsonToTs = () => {
  const [tsCode, setTsCode] = useState('')
  const isValidJson = (json: string) => {
    try {
      JSON.parse(json)
      return true
    } catch {
      return false
    }
  }
  const { run: getTsCodeByJson } = useDebounceFn(
    async (json: string) => {
      if (isValidJson(json)) {
        const res = await jsonToTs({
          json,
        })
        if (res.data.status === 1) {
          setTsCode(res.data.data.tsCode)
        }
      }
    },
    {
      trailing: true,
      wait: 300,
    },
  )

  return (
    <div className="json-to-ts">
      <div className="code-area">
        <div className="json-area">
          <Form layout="vertical" style={{ height: '100%' }}>
            <Form.Item label="json数据" name="json">
              <FormItemMoncaoEditor
                onChange={values => {
                  getTsCodeByJson(values || '')
                }}
                editorProps={{
                  height: '55vh',
                  defaultLanguage: 'json',
                }}
              />
            </Form.Item>
          </Form>
        </div>
        <div className="tscode-area">
          <Form layout="vertical" style={{ height: '100%' }}>
            <Form.Item label="ts生成" name="json">
              <FormItemMoncaoEditor
                editorProps={{
                  value: tsCode,
                  height: '55vh',
                  defaultLanguage: 'typescript',
                }}
                options={{
                  readOnly: true,
                }}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default JsonToTs
