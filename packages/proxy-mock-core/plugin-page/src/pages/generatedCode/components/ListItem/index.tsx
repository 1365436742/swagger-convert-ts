import { Button, Flex, Popconfirm, Tag } from 'antd';
import './index.less';
import GeneratedCodeModal from '../GeneratedCodeModal';
import { useState } from 'react';

const ListItem = () => {
  const [opneGeneratedCodeModal, setGeneratedCodeModal] = useState(false);
  return (
    <>
      <GeneratedCodeModal
        open={opneGeneratedCodeModal}
        onChange={setGeneratedCodeModal}
      ></GeneratedCodeModal>
      <div className="list-item-generated">
        <div className="left">
          <Flex gap="small" className="action">
            <div className="title">fe-llm-factory</div>
          </Flex>
          <Flex gap="small" className="radion-content" wrap>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <Tag key={item} bordered={false} color="processing">
                  /aaaaaa/*
                </Tag>
              );
            })}
          </Flex>
        </div>
        <div className="btn-action">
          <Flex gap="small">
            <Button type="primary" onClick={() => setGeneratedCodeModal(true)}>
              代码生成
            </Button>
            <Popconfirm
              title="确认删除"
              description="将删除该空间，包括下面的所有接口"
              okText="确定"
              cancelText="取消"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default ListItem;
