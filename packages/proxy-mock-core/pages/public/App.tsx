import Header from './components/Header';
import './App.less';
import { Input, Flex, Button, message } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import TableList from './components/Table';
import { CreateMockApiReqBody, GetMockListResult } from './types';
import { getList } from './service/getList';
import SpanceModal from './components/SpanceModal.tsx';
import { createMockApi } from './service/spance.ts';
const { Search } = Input;
const App: React.FC = () => {
  const [searchData, setSearchData] = useState('');
  const [listData, setListData] = useState<GetMockListResult[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const showList = useMemo(() => {
    if (!searchData) return listData;
    return listData.filter((item) => item.apiUrl.includes(searchData));
  }, [listData, searchData]);
  const getData = () => {
    getList().then((res) => {
      if (res.data.status) {
        setListData(res.data.data);
      }
    });
  };
  const createSpance = async (value: CreateMockApiReqBody) => {
    const res = await createMockApi({ ...value });
    if (!res.data.status) {
      message.error(res.data.message || "创建失败")
      return;
    }
    message.success('创建成功');
    getData();
    setOpenModal(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="page">
      <SpanceModal
        open={openModal}
        setOpen={setOpenModal}
        onFinish={createSpance}
      ></SpanceModal>
      <Header>
        <div className="actionArea">
          <Flex gap="small">
            <Search
              value={searchData}
              placeholder="输入接口名"
              allowClear
              onChange={(e) => setSearchData(e.target.value)}
            />
            <Button type="primary" onClick={() => setOpenModal(true)}>
              添加
            </Button>
          </Flex>
        </div>
      </Header>
      <TableList data={showList} onChange={getData}></TableList>
    </div>
  );
};

export default App;
