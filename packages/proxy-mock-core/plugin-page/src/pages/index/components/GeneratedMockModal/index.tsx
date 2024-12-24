import { Button, Flex, Form, Modal, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import ParseSwagger from './ParseSwagger';
import FormItemTableTransfer from './FormItemTableTransfer';
import './index.less';
interface GeneratedCodeModalProps {
  open?: boolean;
  onChange?: (open: boolean) => void;
}
const GeneratedCodeModal: React.FC<GeneratedCodeModalProps> = ({
  open,
  onChange,
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
      <Form
        name="GeneratedCodeModal"
        labelAlign="left"
        layout="vertical"
        autoComplete="off"
        style={{ paddingTop: '10px' }}
      >
        <Form.Item
          name="swaggerUrl"
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
          <ParseSwagger />
        </Form.Item>
        <Form.Item name="axiosUrls" label="指定接口生成">
          <FormItemTableTransfer />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button type="primary" htmlType="submit">
              生成代码
            </Button>
            <Button type="primary" htmlType="submit">
              生成Mock数据
            </Button>
            <Button onClick={() => onChange?.(false)}>取消</Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default GeneratedCodeModal;
