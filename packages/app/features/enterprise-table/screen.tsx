import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  name: string
  visitors: string
  percentage: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Visitantes',
    dataIndex: 'visitors',
    align: 'right',
  },
  {
    title: 'Balanço em percentagem',
    dataIndex: 'percentage',
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'Tech.inc',
    visitors: '1,480',
    percentage: '69%',
  },
  {
    key: '2',
    name: 'JovensNet',
    visitors: '5,480',
    percentage: '44%',
  },
  {
    key: '3',
    name: 'HotShoppe',
    visitors: '4,807',
    percentage: '10%',
  },
]

const EnterpriseTable: React.FC = () => (
  <Table
    size="middle"
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Empresas'}
    style={{
      width: '400px',
    }}
  />
)

export { EnterpriseTable }
