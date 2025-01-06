import { Button, Flex, Input, Popover } from 'antd';
import React from 'react';
import { useDebounceFn } from "ahooks"
import FormItemMoncaoEditor from '../FormItemMoncaoEditor';
import { parseSwaggerByUrl, ParseSwaggerByUrlRes } from '../../apis/generatedCode';
interface ParseSwaggerProps {
  value?: string;
  onParseSwagger: (requestList: ParseSwaggerByUrlRes[]) => void
  onChange?: (e: string) => void;
}
const ParseSwagger: React.FC<ParseSwaggerProps> = ({ value, onChange, onParseSwagger }) => {
  const { run: getSwaggerUrl } = useDebounceFn(async (swaggerUrl: string) => {
    if (!swaggerUrl || !/^(http|https)\:\/\//.test(swaggerUrl)) return null;
    const res = await parseSwaggerByUrl({
      swaggerUrl
    })
    if (res.data.status === 1) {
      onParseSwagger?.(res.data.data.requestList)
    }
  }, {
    trailing: true,
    wait: 200
  })
  return (
    <Flex gap="small">
      <Input
        value={value}
        onChange={(e) => {
          const swaggerUrl = e.target.value
          onChange?.(swaggerUrl);
          getSwaggerUrl(swaggerUrl);
        }}
        placeholder="例如：http://localhost:8081/v3/api-docs"
      />
      <Popover
        trigger="click"
        content={
          <div style={{ width: '600px' }}>
            <FormItemMoncaoEditor
              editorProps={{ height: '366px', defaultLanguage: 'json' }}
            />
          </div>
        }
      >
        <Button>json内容</Button>
      </Popover>
      <Button>解析</Button>
    </Flex>
  );
};

export default ParseSwagger;
