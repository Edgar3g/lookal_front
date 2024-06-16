import React, { useEffect, useState } from 'react'
import { Table, Tag, Space } from 'antd'
import axios from 'axios'

interface Partner {
  id: string
  name: string
  email: string
  doc: string
  phone: string
  ref: string
  partnerTime: number
  createdAt: Date
  updatedAt: Date
}

const TabelaDeSocios: React.FC = () => {
  const [partners, setPartners] = useState<Partner[]>([])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string, record: Partner) => <a>{text}</a>,
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
      title: 'Reference',
      dataIndex: 'ref',
      key: 'ref',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => new Date(date).toLocaleString(),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (date: Date) => new Date(date).toLocaleString(),
    },
  ]

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await axios.get<Partner[]>('http://localhost:3000/partner')
        setPartners(response.data)
      } catch (error) {
        console.error('Erro ao buscar dados dos sócios:', error)
      }
    }

    fetchPartners()
  }, [])

  return <Table columns={columns} dataSource={partners} />
}

export { TabelaDeSocios }
