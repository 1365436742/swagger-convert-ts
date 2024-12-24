import Header from '../../components/Header';
import ListItem from './components/ListItem'
import SearchArea from './components/SearchArea';
const Index = () => {
  return (
    <div className="layout-page">
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
