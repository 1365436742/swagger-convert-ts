import { Button, Flex, Input, Popover } from 'antd';
import React from 'react';
import FormItemMoncaoEditor from '../FormItemMoncaoEditor';
interface ParseSwaggerProps {
  value?: string;
  onChange?: () => void;
}
const ParseSwagger: React.FC<ParseSwaggerProps> = ({ value, onChange }) => {
  return (
    <Flex gap="small">
      <Input
        value={value}
        onChange={onChange}
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
