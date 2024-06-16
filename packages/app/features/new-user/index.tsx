import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row, Select, Space, message } from 'antd'
import axios from 'axios'
import { YStack } from 'tamagui'

const { Option } = Select

const NewUser: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [form] = Form.useForm()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onFinish = async (values: any) => {
    try {
      // Enviar requisição para a API de registro
      const response = await axios.post('http://localhost:3000/user/register', values)
      console.log('Cadastro realizado com sucesso:', response.data)
      message.success('Usuário cadastrado com sucesso!')
      onClose() // Fechar o drawer após o cadastro
      form.resetFields() // Limpar os campos do formulário
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error)
      message.error('Erro ao cadastrar usuário. Por favor, tente novamente.')
    }
  }

  return (
    <YStack marginBottom="$4">
      <Button
        style={{
          width: '200px',
        }}
        type="primary"
        onClick={showDrawer}
        icon={<PlusOutlined />}
      >
        Novo usuário
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={open}
        footer={
          <Space>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={() => form.submit()} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form form={form} layout="vertical" hideRequiredMark onFinish={onFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nome"
                rules={[{ required: true, message: 'Por favor, insira o nome do usuário' }]}
              >
                <Input placeholder="Nome do usuário" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[{ required: true, message: 'Por favor, insira o e-mail' }]}
              >
                <Input placeholder="E-mail" type="email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Senha"
                rules={[{ required: true, message: 'Por favor, insira a senha' }]}
              >
                <Input.Password placeholder="Senha" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="phone"
                label="Telefone"
                rules={[{ required: true, message: 'Por favor, insira o telefone' }]}
              >
                <Input placeholder="Telefone" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="role"
                label="Função"
                rules={[{ required: true, message: 'Por favor, selecione a função' }]}
              >
                <Select placeholder="Selecione a função">
                  <Option value="ADMIN">Admin</Option>
                  <Option value="CLIENT">Client</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </YStack>
  )
}

export { NewUser }
