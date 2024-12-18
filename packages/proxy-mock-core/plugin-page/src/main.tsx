import { createRoot } from 'react-dom/client';
import './index.css';
import RouterView from './routers';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
createRoot(document.getElementById('root')!).render(
  <ConfigProvider locale={zhCN}>
    <RouterView />
  </ConfigProvider>
);
