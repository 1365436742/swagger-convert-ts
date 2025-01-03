import { Button, Flex, Input, message } from 'antd';
import './index.less';
import UpdataMockModal from '../UpdataMockModal';
import { useState } from 'react';
import GeneratedMockModal from '../GeneratedMockModal';
import { addMock } from '../../../../apis/mock';
const { Search } = Input;
interface SearchAreaProps {
  searchValue: string;
  onSearchChange?: (value: string) => void;
  onUpdateList?: () => void;
}
const SearchArea: React.FC<SearchAreaProps> = ({
  searchValue,
  onSearchChange,
  onUpdateList,
}) => {
  const [opneUpdataMockModal, setOpneUpdataMockModal] = useState(false);
  const [opneGeneratedMockModal, setGeneratedMockModal] = useState(false);
  return (
    <div className="search-area">
      <UpdataMockModal
        onFinish={(value) => {
          addMock(value)
            .then((res) => {
              if (res.data.status === 1) {
                message.success(res.data.message);
                onUpdateList?.();
                setOpneUpdataMockModal(false);
              }
            })
        }}
        open={opneUpdataMockModal}
        onChange={setOpneUpdataMockModal}
      ></UpdataMockModal>
      <GeneratedMockModal
        open={opneGeneratedMockModal}
        onChange={setGeneratedMockModal}
      ></GeneratedMockModal>
      <Flex gap="small">
        <Search
          value={searchValue}
          placeholder="搜索接口名称"
          allowClear
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
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
