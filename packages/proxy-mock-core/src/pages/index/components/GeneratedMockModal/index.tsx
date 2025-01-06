import { Button, Flex, Form, Input, Modal, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import FormItemTableTransfer from './FormItemTableTransfer';
import './index.less';
import { parseSwaggerByUrl, ParseSwaggerByUrlRes } from '../../../../apis/generatedCode';
import { useDebounceFn } from 'ahooks';
interface GeneratedMockModalProps {
  open?: boolean;
  onChange?: (open: boolean) => void;
}
const GeneratedMockModal: React.FC<GeneratedMockModalProps> = ({
  open,
  onChange,
}) => {
  const [form] = Form.useForm();
  const [requestList, setRequestList] = useState<ParseSwaggerByUrlRes[]>([]);
  const { run: getSwaggerUrl } = useDebounceFn(async (swaggerUrl: string) => {
    if (!swaggerUrl || !/^(http|https)\:\/\//.test(swaggerUrl)) return null;
    const res = await parseSwaggerByUrl({
      swaggerUrl
    })
    if (res.data.status === 1) {
      setRequestList(res.data.data.requestList)
    }
  }, {
    trailing: true,
    wait: 200
  })
  return (
    <Modal
      width={900}
      className="generated-mock-code"
      title="生成mock数据"
      open={open}
      onCancel={() => onChange?.(false)}
      footer={null}
    >
      <Form
        name="GeneratedMockModal"
        form={form}
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
          <Input
            onChange={(e) => {
              const swaggerUrl = e.target.value
              getSwaggerUrl(swaggerUrl);
            }}
            placeholder="例如：http://localhost:8081/v3/api-docs"
          />
        </Form.Item>
        <Form.Item name="axiosUrls" label="指定接口生成mock">
          <FormItemTableTransfer dataSource={requestList} />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
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

export default GeneratedMockModal;
