import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import axios from 'axios'

// Interface para os dados dos usuários
interface User {
  id: string
  name: string
  email: string
  phone: string
  role: string
  createdAt: string
  updatedAt: string
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('http://localhost:3000/user')
        setUsers(response.data)
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    }

    fetchUsers()
  }, []) // Executa uma vez no carregamento

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
  ]

  return <Table columns={columns} dataSource={users} />
}

export { UserList }
