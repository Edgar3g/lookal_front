import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { MdDashboard } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { UserList } from 'app/features/users_table'
import { useRouter } from 'next/navigation'
import { NewUser } from 'app/features/new-user'

const { Header, Sider, Content } = Layout

const Socios: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const router = useRouter()

  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item
            key="/dashboard"
            icon={<MdDashboard />}
            onClick={() => handleMenuClick('/dashboard')}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="/socios"
            icon={<UserOutlined />}
            onClick={() => handleMenuClick('/socios')}
          >
            Socios
          </Menu.Item>
          <Menu.Item
            key="/funcionarios"
            icon={<BsPeopleFill />}
            onClick={() => handleMenuClick('/users')}
          >
            Funcionarios
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <NewUser />
          <UserList />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Socios
