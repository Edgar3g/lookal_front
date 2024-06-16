import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'
import { Paragraph } from 'tamagui'
import { SelectItem } from '../select-item/screen'
import { API } from '../../../../services/api'
import useAuth from '../../../../context/AuthProvider/useAuth'

interface DataType {
  gender?: string
  name: {
    title?: string
    first?: string
    last?: string
  }
  email?: string
  picture: {
    large?: string
    medium?: string
    thumbnail?: string
  }
  nat?: string
  loading: boolean
}

const count = 3
const fakeDataUrl = `https://random-data-api.com/api/v2/beers`

const ProductTableFull: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])

  const { token } = useAuth()

  console.log(token)
  const handleFetch = async () => {
    try {
      const { data } = await API.get("/establishments", {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetch()  
  }, [data])

  const onLoadMore = () => {
    setLoading(true)
    setList(
      data.concat([...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })))
    )
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results)
        setData(newData)
        setList(newData)
        setLoading(false)
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'))
      })
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      header={
        <Paragraph fontSize="$7" ml="$5" fontWeight="bold" color="$blue1Dark">
          Produtos
        </Paragraph>
      }
      style={{
        padding: '15px',
        width: '72%',
        zIndex: 999,
        borderRadius: '16px',
        marginLeft: '300px',
        marginTop: '-180px',
        background: '#FFF',
      }}
      size="large"
      renderItem={(item) => (
        <List.Item
          actions={[
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              }}
            >
              <a key="list-loadmore-edit">
                <div>
                  <div>Telefone</div>
                  <div>999 999 999</div>
                </div>
              </a>
              ,
              <a key="list-loadmore-edit">
                {' '}
                <div>
                  <div>Status</div>
                  <SelectItem />
                </div>
              </a>
              ,
              <a key="list-loadmore-more">
                <div>
                  <div>Cadastrado em </div>
                  <div>27/10/2021</div>
                </div>
              </a>
              ,<a key="list-loadmore-edit">Editar</a>,
            </div>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.picture.large}
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                />
              }
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description={item.email}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export { ProductTableFull }
