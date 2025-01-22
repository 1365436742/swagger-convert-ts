import { Button, Flex, Form, Input, Modal, Popover } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import React from 'react'
import './index.less'
import FormItemMoncaoEditor from '../../../../components/FormItemMoncaoEditor'
interface FormType {
  swaggerUrl: string
  configJson: string
}
interface GeneratedCodeModalProps {
  initialValues?: { configJson: string }
  open?: boolean
  onChange?: (open: boolean) => void
  onFinish?: (values: FormType) => void
}
const GeneratedCodeModal: React.FC<GeneratedCodeModalProps> = ({
  initialValues,
  open,
  onChange,
  onFinish,
}) => {
  return (
    <Modal
      width={900}
      className="generated-code"
      title={
        <Flex gap="small">
          <div>生成axios代码</div>
          <Popover content="生成代码的地址是由插件填写路径配置的">
            <QuestionCircleOutlined />
          </Popover>
        </Flex>
      }
      open={open}
      onCancel={() => onChange?.(false)}
      footer={null}
    >
      <Form<FormType>
        name="GeneratedCodeModal"
        labelAlign="left"
        layout="vertical"
        autoComplete="off"
        initialValues={initialValues}
        style={{ paddingTop: '10px' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="swaggerUrl"
          rules={[{ required: true, message: '请输入swagger地址' }]}
          label={
            <Flex gap="small">
              <div>swaggerUrl</div>
              <Popover
                content={
                  <>
                    可以参考：
                    <a
                      href="https://github.com/1365436742/swagger-convert-ts/blob/main/packages/java-swagger-example/pom.xml"
                      target="__blank"
                    >
                      java的swagger示例
                    </a>
                    <br />
                    输入本地或者远程的：http://localhost:8081/v3/api-docs
                  </>
                }
              >
                <QuestionCircleOutlined />
              </Popover>
            </Flex>
          }
        >
          <Input placeholder="例如：http://localhost:8081/v3/api-docs" />
        </Form.Item>
        <Form.Item
          name="configJson"
          label={
            <Flex gap="small">
              <div>指定接口过滤配置（不填默认生成全部接口）</div>
              <Popover content="生成后会覆盖所有空间下的文件。请选择所有你需要用到的接口">
                <QuestionCircleOutlined />
              </Popover>
            </Flex>
          }
        >
          <FormItemMoncaoEditor
            editorProps={{
              defaultLanguage: 'json',
            }}
          />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button type="primary" htmlType="submit">
              生成代码
            </Button>
            <Button onClick={() => onChange?.(false)}>取消</Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default GeneratedCodeModal
