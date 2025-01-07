import React, { useEffect, useMemo, useState } from 'react';
import './index.less';
import Header from '../../components/Header';
import SearchArea from './components/SearchArea';
import ListItem from './components/ListItem';
import { generatedCodeGetSpaceList, SapceItem } from '../../apis/generatedCode';
const GeneratedCode: React.FC = () => {
  const [list, setList] = useState<SapceItem[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const showList = useMemo(() => {
    return list.filter((item) => item.spaceName.includes(searchValue));
  }, [searchValue, list]);
  const getData = () => {
    generatedCodeGetSpaceList().then((res) => {
      setList(res.data.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="layout-page">
      <Header>
        <SearchArea
          onUpdateList={getData}
          searchValue={searchValue}
          onSearchChange={setSearchValue}
        />
      </Header>
      {
        showList.map(item => {
          return <ListItem
            key={item.spaceName}
            onUpdateList={getData}
            item={item}
          />
        })
      }
    </div>
  );
};

export default GeneratedCode;
