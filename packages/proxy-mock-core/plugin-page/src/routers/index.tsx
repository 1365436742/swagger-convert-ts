import {
  Route,
  RouteProps,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { Button, Layout, Menu, MenuProps, theme } from 'antd';
import { useState } from 'react';
import {
  AuditOutlined,
  CodeOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import cls from 'classnames';
import Index from '../pages/index';
import GeneratedCode from '../pages/generatedCode';

const { Content, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const Routers: (RouteProps & MenuItem)[] = [
  {
    path: '/',
    key: '/',
    label: 'mock',
    icon: <AuditOutlined />,
    element: <Index />,
  },
  {
    path: '/generatedCode',
    key: '/generatedCode',
    label: '生成代码',
    icon: <CodeOutlined />,
    element: <GeneratedCode />,
  },
];

const RouterView = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={200}
          style={{ background: colorBgContainer }}
        >
          <div className="layout-sider-title">
            <div className={cls('title-text', { collapsed })}>
              <div className="text-show-text">可视化管理</div>
            </div>
            <Button
              onClick={() => setCollapsed(!collapsed)}
              className={cls('collpased-btn', { collapsed })}
              icon={<MenuFoldOutlined />}
              type="text"
            />
          </div>
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={({ key }) => location.pathname !== key && navigate(key)}
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['sub1']}
            items={Routers}
          />
        </Sider>
        <Content
          style={{
            height: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="router-pages">
            <Routes>
              {Routers.map((item) => {
                return (
                  <Route
                    path={item.path}
                    element={item.element}
                    key={item.key}
                  />
                );
              })}
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default RouterView;
