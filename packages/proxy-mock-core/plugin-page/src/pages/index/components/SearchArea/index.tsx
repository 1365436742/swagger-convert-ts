import { Button, Flex, Input } from 'antd';
import './index.less';
import UpdataMockModal from '../UpdataMockModal';
import { useState } from 'react';
import GeneratedCodeModal from '../GeneratedCodeModal';
const { Search } = Input;
const SearchArea = () => {
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false);
  const [opneGeneratedCodeModal, setGeneratedCodeModal] = useState(false);
  return (
    <div className="search-area">
      <UpdataMockModal
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
      ></UpdataMockModal>
      <GeneratedCodeModal
        open={opneGeneratedCodeModal}
        onChange={setGeneratedCodeModal}
      ></GeneratedCodeModal>
      <Flex gap="small">
        <Search placeholder="搜索接口名称" allowClear />
        <Button type="primary" onClick={() => setOpneUpdataMockModal(true)}>
          添加mock数据
        </Button>
        <Button type="primary" onClick={() => setGeneratedCodeModal(true)}>
          生成axios请求代码
        </Button>
      </Flex>
    </div>
  );
};

export default SearchArea;
