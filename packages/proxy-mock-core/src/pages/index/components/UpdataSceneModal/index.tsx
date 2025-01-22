import { Button, Form, Input, Drawer } from 'antd'
import React from 'react'
import FormItemMoncaoEditor from '../../../../components/FormItemMoncaoEditor'
import { UpdateSenceParams } from '../../../../apis/mockSence'

interface UpdataSceneModalkProps {
  title?: string
  btnText?: string
  open?: boolean
  initialValues?: Partial<UpdateSenceParams>
  onChange?: (open: boolean) => void
  onFinish?: (values: UpdateSenceParams) => void
}

const UpdataSceneModal: React.FC<UpdataSceneModalkProps> = ({
  title,
  btnText,
  open,
  initialValues,
  onChange,
  onFinish,
}) => {
  return (
    <Drawer
      width={750}
      title={title || '添加场景数据'}
      open={open}
      footer={null}
      destroyOnClose
      onClose={() => onChange?.(false)}
    >
      <Form<UpdateSenceParams>
        name="UpdataSceneModal"
        labelCol={{ span: 6 }}
        layout="vertical"
        initialValues={initialValues}
        onFinish={onFinish}
      >
        <Form.Item
          label="场景名称"
          name="senceName"
          rules={[{ required: true, message: '请输入场景名称' }]}
        >
          <Input placeholder="例如：default" />
        </Form.Item>
        <Form.Item label="代码内容" name="senceContent">
          <FormItemMoncaoEditor />
        </Form.Item>
        <Form.Item label="">
          <Button
            style={{ float: 'right', marginLeft: '8px' }}
            onClick={() => onChange?.(false)}
          >
            取消
          </Button>
          <Button type="primary" htmlType="submit" style={{ float: 'right' }}>
            {btnText ?? '创建'}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default UpdataSceneModal
