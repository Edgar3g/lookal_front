import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row, Select, Space, message } from 'antd'
import axios from 'axios'
import { YStack } from 'tamagui'

const { Option } = Select

const NewPartner: React.FC = () => {
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
      // Enviar requisição para a API de registro de sócio
      const response = await axios.post('http://localhost:3000/partner/register', {
        name: values.name,
        email: values.email,
        doc: values.doc,
        phone: values.phone,
        ref: values.ref,
        partnerTime: values.partnerTime as number,
      })
      console.log('Sócio cadastrado com sucesso:', response.data)
      message.success('Sócio cadastrado com sucesso!')
      onClose() // Fechar o drawer após o cadastro
      form.resetFields() // Limpar os campos do formulário
    } catch (error) {
      console.error('Erro ao cadastrar sócio:', error)
      message.error('Erro ao cadastrar sócio. Por favor, tente novamente.')
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
        Novo sócio
      </Button>
      <Drawer
        title="Registrar novo sócio"
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
                rules={[{ required: true, message: 'Por favor, insira o nome do sócio' }]}
              >
                <Input placeholder="Nome do sócio" />
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
                name="doc"
                label="Documento"
                rules={[{ required: true, message: 'Por favor, insira o documento' }]}
              >
                <Input placeholder="Documento" />
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
                name="ref"
                label="Referência"
                rules={[{ required: true, message: 'Por favor, insira a referência' }]}
              >
                <Input placeholder="Referência" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="partnerTime"
                label="Tempo como sócio"
                rules={[{ required: true, message: 'Por favor, insira o tempo como sócio' }]}
              >
                <Input placeholder="Tempo como sócio" type="number" addonAfter="dias" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </YStack>
  )
}

export { NewPartner }
