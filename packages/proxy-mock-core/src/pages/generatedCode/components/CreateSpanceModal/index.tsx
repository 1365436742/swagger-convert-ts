import { Button, Flex, Form, Input, Modal } from 'antd';
import React from 'react';
import './index.less';
interface CreateSpanceModalProps {
  open?: boolean;
  onChange?: (open: boolean) => void;
}
const CreateSpanceModal: React.FC<CreateSpanceModalProps> = ({
  open,
  onChange,
}) => {
  return (
    <Modal
      width={500}
      className="generated-code"
      title="创建空间"
      open={open}
      onCancel={() => onChange?.(false)}
      footer={null}
    >
      <Form
        name="CreateSpanceModal"
        labelAlign="left"
        autoComplete="off"
        style={{ paddingTop: '10px' }}
      >
        <Form.Item name="spanceName" label="空间名称">
          <Input maxLength={20} showCount />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button type="primary" htmlType="submit">
              创建
            </Button>
            <Button onClick={() => onChange?.(false)}>取消</Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateSpanceModal;
