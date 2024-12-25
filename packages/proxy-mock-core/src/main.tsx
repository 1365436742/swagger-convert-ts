import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterView from './routers';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import './index.less';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <RouterView />
    </ConfigProvider>
  </BrowserRouter>
);
