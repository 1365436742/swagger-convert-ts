import { Button, Form, Input, Drawer } from 'antd';
import React from 'react';
import FormItemMoncaoEditor from '../../../../components/FormItemMoncaoEditor';

interface UpdataSceneModalkProps {
  title?: string;
  btnText?: string;
  open?: boolean;
  onChange?: (open: boolean) => void;
}

const UpdataSceneModal: React.FC<UpdataSceneModalkProps> = ({
  title,
  btnText,
  open,
  onChange,
}) => {
  return (
    <Drawer
      width={750}
      title={title || '添加场景数据'}
      open={open}
      footer={null}
      onClose={() => onChange?.(false)}
    >
      <Form
        name="UpdataSceneModal"
        labelCol={{ span: 6 }}
        layout="vertical"
        initialValues={{
          method: 'GET',
        }}
      >
        <Form.Item
          label="场景名称"
          name="sceneName"
          rules={[{ required: true, message: '请输入场景名称' }]}
        >
          <Input placeholder="例如：default" />
        </Form.Item>
        <Form.Item label="代码内容" name="code">
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
  );
};

export default UpdataSceneModal;
