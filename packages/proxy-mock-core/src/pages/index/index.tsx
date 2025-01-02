import { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import ListItem from './components/ListItem';
import SearchArea from './components/SearchArea';
import { getMockList, MockListRes } from '../../apis/mock';
const Index = () => {
  const [list, setList] = useState<MockListRes[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const showList = useMemo(() => {
    return list.filter((item) => item.url.includes(searchValue));
  }, [searchValue, list]);
  const getData = () => {
    getMockList().then((res) => {
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
        ></SearchArea>
      </Header>
      {showList.map((item) => {
        return (
          <ListItem
            onUpdateList={getData}
            item={item}
            key={item.url + item.method}
          ></ListItem>
        );
      })}
    </div>
  );
};

export default Index;
