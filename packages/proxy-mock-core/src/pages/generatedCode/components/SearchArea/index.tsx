import { Button, Flex, Input } from 'antd';
import './index.less';
import { useState } from 'react';
import CreateSpanceModal from '../CreateSpanceModal';
const { Search } = Input;
const SearchArea = () => {
  const [opneCreateSpanceModal, setCreateSpanceModal] = useState(false);
  return (
    <div className="search-area">
      <CreateSpanceModal
        open={opneCreateSpanceModal}
        onChange={setCreateSpanceModal}
      ></CreateSpanceModal>
      <Flex gap="small">
        <Search placeholder="搜索空间" allowClear />
        <Button type="primary" onClick={() => setCreateSpanceModal(true)}>
          创建空间
        </Button>
      </Flex>
    </div>
  );
};

export default SearchArea;
