import { BrowserRouter, Route, RouteProps, Routes } from 'react-router-dom';
import Index from '../pages/index';

const Routers: RouteProps[] = [
  {
    path: '/',
    element: <Index />,
  },
];

const RouterView = () => {
  return (
    <BrowserRouter>
      <div className="router-pages">
        <Routes>
          {Routers.map((item) => {
            return <Route key={item.path} {...item} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default RouterView;
