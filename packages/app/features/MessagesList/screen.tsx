import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'
import { Paragraph } from 'tamagui'
import { SelectItem } from '../select-item/screen'

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
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`

const MessagesList: React.FC = () => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])
  const [list, setList] = useState<DataType[]>([])

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false)
        setData(res.results)
        setList(res.results)
      })
  }, [])

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
      style={{
        width: '100%',
        background: '#FFF',
        gap: '20px',
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
              <a key="list-loadmore-edit">Responder</a>,
            </div>,
          ]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={item.picture.large}
                  style={{
                    width: '50px',
                    height: '50px',
                  }}
                />
              }
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Mensagem"
            />
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export { MessagesList }
