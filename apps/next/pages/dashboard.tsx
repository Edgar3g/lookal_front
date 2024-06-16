import React, { useEffect, useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme, Card, Typography } from 'antd'
import { MdDashboard, MdPeople } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { API } from '../../../services/api'
import { XStack, YStack } from '@tamagui/stacks'
import { TabelaDeSocios } from 'app/features/partners_table'
import { UserList } from 'app/features/users_table'
import { Separator } from 'tamagui'
import { BiUserCircle } from 'react-icons/bi'

const { Header, Sider, Content } = Layout
const { Title } = Typography

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [users, setUsers] = useState([])
  const [partners, setPartners] = useState([])

  const router = useRouter()

  const handleFetchData = async () => {
    try {
      await API.get('/user')
        .then((response) => {
          setUsers(response.data)
        })
        .catch((error) => {
          console.error('Erro ao buscar usuários:', error)
        })
      await API.get('/partner')
        .then((response) => {
          setPartners(response.data)
        })
        .catch((error) => {
          console.error('Erro ao buscar socios:', error)
        })
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [])

  const handleMenuClick = (path: string) => {
    router.push(path)
  }

  const cardStyle = {
    borderRadius: borderRadiusLG,
    backgroundColor: colorBgContainer,
    padding: 10,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '180px',
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
          <XStack
            style={{
              width: '100%',
              gap: 24,
              display: 'flex',
              flexDirection: 'row',
              marginBottom: 50,
            }}
          >
            <Card style={cardStyle}>
              <YStack>
                <XStack gap={10}>
                  <Title level={4}>Numero de socios</Title>
                  <MdPeople size={50} />
                </XStack>
                <Title>{partners.length}</Title>
              </YStack>
            </Card>

            <Card style={cardStyle}>
              <YStack>
                <XStack gap={10}>
                  <Title level={4}>Numero de funcionarios</Title>
                  <BiUserCircle size={50} />
                </XStack>
                <Title>{users.length}</Title>
              </YStack>
            </Card>
          </XStack>

          <Title>Socios</Title>
          <TabelaDeSocios />

          <Separator style={{ marginTop: 50, marginBottom: 50 }} />

          <Title>Funcionarios</Title>
          <UserList />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
