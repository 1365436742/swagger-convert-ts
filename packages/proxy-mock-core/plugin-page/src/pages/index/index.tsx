import Header from '../../components/Header';
import ListItem from './components/ListItem'
import SearchArea from './components/SearchArea';
import './index.less';
const Index = () => {
  return (
    <div className="index-page">
      <Header>
        <SearchArea></SearchArea>
      </Header>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
      <ListItem></ListItem>
    </div>
  );
};

export default Index;
