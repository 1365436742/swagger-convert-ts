import { Button, Flex, Form, Input, message, Modal, Popover } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import FormItemTableTransfer from './FormItemTableTransfer';
import './index.less';
import { generatedCodeMockjs, parseSwaggerByUrl, ParseSwaggerByUrlRes } from '../../../../apis/generatedCode';
import { useDebounceFn } from 'ahooks';
interface GeneratedMockModalProps {
  open?: boolean;
  onChange?: (open: boolean) => void;
  onUpdateList?: () => void;
}
interface FromDataType {
  swaggerUrl: string
  generatedCodeList: string[]
}
const GeneratedMockModal: React.FC<GeneratedMockModalProps> = ({
  open,
  onChange,
  onUpdateList
}) => {
  const [form] = Form.useForm();
  const [requestList, setRequestList] = useState<ParseSwaggerByUrlRes[]>([]);
  const [loading, setLoading] = useState(false);
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
  const onFinish = (values: FromDataType) => {
    if (!values.generatedCodeList || !values.generatedCodeList.length) {
      message.error("请选择需要生成mockjs的url")
      return
    }
    if (loading) return;
    setLoading(true);
    const generatedCodeList = values.generatedCodeList.map(key => requestList.find(item => item.key === key)).filter(i => i !== undefined)
    generatedCodeMockjs({
      swaggerUrl: values.swaggerUrl,
      generatedCodeList
    }).then(res => {
      if (res.data.status === 1) {
        message.success("创建成功")
        onChange?.(false)
        onUpdateList?.()
      }
    }).finally(() => {
      setLoading(false);
    })
  }
  return (
    <Modal
      width={900}
      className="generated-mock-code"
      title="生成mock数据"
      open={open}
      onCancel={() => onChange?.(false)}
      footer={null}
    >
      <Form<FromDataType>
        name="GeneratedMockModal"
        form={form}
        labelAlign="left"
        layout="vertical"
        autoComplete="off"
        style={{ paddingTop: '10px' }}
        onFinish={onFinish}
      >
        <Form.Item
          name="swaggerUrl"
          rules={[{ required: true, message: "请输入swagger地址" }]}
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
        <Form.Item required name="generatedCodeList" label="指定接口生成mock">
          <FormItemTableTransfer dataSource={requestList} />
        </Form.Item>
        <Form.Item>
          <Flex gap="small" justify="flex-end">
            <Button loading={loading} type="primary" htmlType="submit">
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
