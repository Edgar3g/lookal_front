import React, { useEffect, useState } from 'react'
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Alert, Button } from 'antd'

import FormItem from 'antd/es/form/FormItem'

import { UserOutlined } from '@ant-design/icons'
import { LockOutlined } from '@ant-design/icons'
import { MdLink, MdTextFields } from 'react-icons/md'
import useAuth from '../../../../context/AuthProvider/useAuth'
import { API } from '../../../../services/api'
import { getUserLocalStorage } from '../../../../context/AuthProvider/utils'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'text' ? <InputNumber /> : <Input />

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const EstablismentsTable = () => {
  const [form] = Form.useForm()
  const [data, setData] = useState([])
  const [editingKey, setEditingKey] = useState('')
  const isEditing = (record) => record.key === editingKey
  const [isLoading, setIsLoading] = useState(false)

  const user = getUserLocalStorage()

  const handleFetch = async () => {
    try {
      const { data } = await API.get('/establishments', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })

      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (key) => {
    const { status } = await API.delete(`/establishments/${key}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })

    console.log(key, status)
  }

  useEffect(() => {
    handleFetch()
  }, [data])

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      phone: '',
      slogan: '',
      country: '',
      city: '',
      region: '',
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const save = async (key) => {
    try {
      const row = await form.validateFields()

      console.log(row)

      const { name, phone, slogan, country, city, region } = row

      const { status } = await API.patch(
        `/establishments/${key.id}`,
        {
          name,
          phone,
          slogan,
          country,
          city,
          region,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )

      setData(data)
      console.log(status)
      setEditingKey('')
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo)
    }
  }

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Nif',
      dataIndex: 'nif',
      width: '15%',
      editable: false,
    },
    {
      title: 'Telemovel',
      dataIndex: 'phone',
      width: '40%',
      editable: true,
    },
    {
      title: 'Slogan',
      dataIndex: 'slogan',
      width: '40%',
      editable: true,
    },
    {
      title: 'Pais',
      dataIndex: 'country',
      width: '40%',
      editable: true,
    },
    {
      title: 'Cidade',
      dataIndex: 'city',
      width: '40%',
      editable: true,
    },
    {
      title: 'Regiao',
      dataIndex: 'region',
      width: '40%',
      editable: true,
    },
    {
      title: 'Dinheiro',
      dataIndex: 'money',
      width: '40%',
      editable: false,
    },

    {
      title: 'Editar',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record)

        return editable ? (
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography.Link
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Salvar
            </Typography.Link>
            <Popconfirm title="Quer realmente cancelar?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Editar
          </Typography.Link>
        )
      },
    },

    {
      title: 'Apagar',
      dataIndex: 'operation',
      render: (_, record) =>
        data.length >= 1 ? (
          <Popconfirm title="Você realmente que apagar?" onConfirm={() => handleDelete(record.id)}>
            <a
              style={{
                color: 'red',
              }}
            >
              Apagar
            </a>
          </Popconfirm>
        ) : null,
    },
  ]
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    return {
      ...col,

      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'created_at' ? Date() : 'number',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <Form form={form} component={false}>
      <Table
        size="middle"
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        style={{
          width: '1000px',
          marginLeft: '200px',
        }}
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  )
}
export { EstablismentsTable }
