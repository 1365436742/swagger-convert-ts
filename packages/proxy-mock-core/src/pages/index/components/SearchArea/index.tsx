import { Button, Flex, Input } from 'antd';
import './index.less';
import UpdataMockModal from '../UpdataMockModal';
import { useState } from 'react';
import GeneratedMockModal from '../GeneratedMockModal'
const { Search } = Input;
const SearchArea = () => {
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false);
  const [opneGeneratedMockModal, setGeneratedMockModal] = useState(false);
  return (
    <div className="search-area">
      <UpdataMockModal
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
      ></UpdataMockModal>
      <GeneratedMockModal
        open={opneGeneratedMockModal}
        onChange={setGeneratedMockModal}
      ></GeneratedMockModal>
      <Flex gap="small">
        <Search placeholder="搜索接口名称" allowClear />
        <Button type="primary" onClick={() => setOpneUpdataMockModal(true)}>
          添加mock数据
        </Button>
        <Button type="primary" onClick={() => setGeneratedMockModal(true)}>
          生成mockjs数据
        </Button>
      </Flex>
    </div>
  );
};

export default SearchArea;
