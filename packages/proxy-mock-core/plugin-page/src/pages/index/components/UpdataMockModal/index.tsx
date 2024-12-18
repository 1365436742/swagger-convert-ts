import { Button, Form, Input, InputNumber, Modal, Select, Switch } from 'antd';
import React from 'react';

interface AddMockProps {
  title?: string;
  btnText?: string;
  open?: boolean;
  onChange?: (open: boolean) => void;
}

const UpdateMockModal: React.FC<AddMockProps> = ({
  title,
  btnText,
  open,
  onChange,
}) => {
  return (
    <Modal
      title={title || '添加mock数据'}
      open={open}
      footer={null}
      onCancel={() => onChange?.(false)}
    >
      <Form
        name="UpdateMockModal"
        labelCol={{ span: 6 }}
        labelAlign="left"
        initialValues={{
          method: 'GET',
        }}
        style={{ paddingTop: '10px' }}
      >
        <Form.Item
          label="接口url地址"
          name="api"
          rules={[{ required: true, message: '请输入路径' }]}
        >
          <Input placeholder="例如：/api/test" />
        </Form.Item>
        <Form.Item
          label="接口请求方式"
          name="method"
          rules={[{ required: true, message: '请选择请求方式' }]}
        >
          <Select
            style={{ width: '100%' }}
            options={[
              { value: 'GET', label: 'GET' },
              { value: 'POST', label: 'POST' },
              { value: 'PUT', label: 'PUT' },
              { value: 'DELETE', label: 'DELETE' },
            ]}
          />
        </Form.Item>
        <Form.Item label="延时" name="timeout">
          <InputNumber
            style={{ width: '100%' }}
            placeholder="设置延时如果>0延时生效"
            suffix="ms"
          />
        </Form.Item>
        <Form.Item label="mock是否开启" name="mockStart">
          <Switch
            checkedChildren="开启"
            unCheckedChildren="关闭"
            defaultChecked
          />
        </Form.Item>
        <Form.Item label={null}>
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
    </Modal>
  );
};

export default UpdateMockModal;
