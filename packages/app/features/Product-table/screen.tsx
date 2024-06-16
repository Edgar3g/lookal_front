import React from 'react'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: string
  name: string
  quantity: string
  customer: string
  percentage: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Quantidade',
    className: 'column-quantity',
    dataIndex: 'quantity',
    align: 'right',
  },
  {
    title: 'Clientes por venda',
    dataIndex: 'customer',
  },
  {
    title: 'Balanço em percentagem',
    dataIndex: 'percentage',
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'MacBook Pro',
    quantity: '340',
    customer: 'Lake Park',
    percentage: '21%',
  },
  {
    key: '2',
    name: 'Impressoras',
    quantity: '100',
    customer: 'Jin Green',
    percentage: '44%',
  },
  {
    key: '3',
    name: 'Hp Portateis',
    quantity: '22',
    customer: 'Sydney kelor',
    percentage: '55%',
  },
]

const ProductTable: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    title={() => 'Produtos mais vendidos'}
    style={{
      marginLeft: '315px',
      width: '800px',
    }}
  />
)

export { ProductTable }
