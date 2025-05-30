import {
  Navigate,
  Route,
  RouteProps,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { Button, Layout, Menu, MenuProps, theme } from 'antd'
import { useEffect, useState } from 'react'
import {
  AuditOutlined,
  CodeOutlined,
  MenuFoldOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import cls from 'classnames'
import Index from '../pages/index'
import GeneratedCode from '../pages/generatedCode'
import { senceCodeTemplate } from '../apis/codeTemplate'
import Toolbox from '../pages/toolbox'

const { Content, Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

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
  {
    path: '/toolbox',
    key: '/toolbox',
    label: '工具箱',
    icon: <ToolOutlined />,
    element: <Toolbox />,
  },
].map(item => {
  item.path = '/public' + item.path
  item.key = '/public' + item.key
  return item
})

const RouterView = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [showRouter, setShowRouter] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    senceCodeTemplate().then(res => {
      if (res.data.status === 1) {
        setShowRouter(true)
        window.globalData.senceCodeTemplate = res.data.data.code
      }
    })
  }, [])
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
            selectedKeys={[location.pathname === '/public' ? '/public/' : location.pathname]}
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
            {showRouter && (
              <Routes>
                {Routers.map(item => {
                  return (
                    <Route
                      path={item.path}
                      element={item.element}
                      key={item.key}
                    />
                  )
                })}
                <Route path="*" element={<Navigate to="/public/" />} />
              </Routes>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
export default RouterView
