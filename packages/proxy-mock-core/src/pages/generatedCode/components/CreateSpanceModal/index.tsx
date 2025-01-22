import { Button, Flex, Form, Input, Modal } from 'antd'
import React from 'react'
import './index.less'
import { GeneratedCreateSpaceParams } from '../../../../apis/generatedCode'
interface CreateSpanceModalProps {
  title?: string
  btnText?: string
  open?: boolean
  initialValues?: Pick<GeneratedCreateSpaceParams, 'spaceName'>
  onChange?: (open: boolean) => void
  onFinish?: (values: Pick<GeneratedCreateSpaceParams, 'spaceName'>) => void
}
const CreateSpanceModal: React.FC<CreateSpanceModalProps> = ({
  title,
  btnText,
  open,
  initialValues,
  onChange,
  onFinish,
}) => {
  return (
    <Modal
      width={500}
      className="generated-code"
      title={title || '创建空间'}
      open={open}
      destroyOnClose
      onCancel={() => onChange?.(false)}
      footer={null}
    >
      <Form<Pick<GeneratedCreateSpaceParams, 'spaceName'>>
        name="CreateSpanceModal"
        labelAlign="left"
        autoComplete="off"
        style={{ paddingTop: '10px' }}
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          rules={[{ required: true, message: '名称不能为空' }]}
          name="spaceName"
          label="空间名称"
        >
          <Input maxLength={20} showCount />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button type="primary" htmlType="submit">
              {btnText ?? '创建'}
            </Button>
            <Button onClick={() => onChange?.(false)}>取消</Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateSpanceModal
