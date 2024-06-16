import { ChevronDown, ChevronUp, Plus, Save } from '@tamagui/lucide-icons'

import { Sheet, SheetProps, useSheet } from '@tamagui/sheet'

import { useState } from 'react'

import { Button, Label, H3, H4, Input, TextArea, XStack, YStack, Spinner } from 'tamagui'
import { API } from '../../../../services/api'
import { getUserLocalStorage } from '../../../../context/AuthProvider/utils'
import { useToastController } from '@tamagui/toast'

import useAuth from '../../../../context/AuthProvider/useAuth'

export const CreateTableSheet = () => {
  const [position, setPosition] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [tableName, setTableName] = useState('')
  const [tableNumber, setTableNumber] = useState('')
  const [roomId, setRoomId] = useState('')

  const user = getUserLocalStorage()

  const toast = useToastController()

  const handlePost = async () => {
    setLoading(true)
    try {
      const { status } = await API.post(
        '/table/create',
        {
          tableName,
          tableNumber,
          roomId,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }

  return (
    <>
      <XStack space marginLeft="50px" mt="-250px">
        <Button onPress={() => setOpen(true)} icon={Plus}>
          Nova Mesa
        </Button>
      </XStack>
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}
        animation="bouncy"
      >
        <Sheet.Overlay animation="lazy" exitStyle={{ opacity: 0 }} />

        <Sheet.Handle />

        <Sheet.Frame
          flex={1}
          padding="$3"
          justifyContent="space-between"
          alignItems="flex-start"
          space="$5"
        >
          <YStack
            width={700}
            minHeight={250}
            overflow="hidden"
            space="$4"
            margin="$3"
            padding="$2"
            jc="space-between"
            ai="flex-start"
          >
            <H3>Crie uma nova mesa</H3>

            <XStack ai="flex-end" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="tableName">Nome da Mesa</Label>
                <Input
                  size="$3"
                  width={200}
                  onChangeText={setTableName}
                  placeholder="Nome da mesa"
                />
              </YStack>

              <YStack>
                <Label htmlFor="tableNumber">Numero da mesa</Label>
                <Input
                  keyboardType="number-pad"
                  onChangeText={setTableNumber}
                  size="$3"
                  width={200}
                  placeholder="Numero da mesa"
                />
              </YStack>
            </XStack>

            <XStack ai="center" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="roomId">RoomId</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setRoomId}
                  width={200}
                  placeholder="RoomId"
                />
              </YStack>
            </XStack>

            <XStack display="flex" justifyContent="space-between">
              <Button
                size="$5"
                onPress={() => {
                  handlePost()
                  setModal(false)
                }}
                disabled={loading}
                icon={loading === true ? () => <Spinner /> : <H4>Criar</H4>}
              >
                {error
                  ? () => {
                      toast.show('Valores Invalidos', {
                        message: 'Insira Valores corretos',
                        duration: 3000,
                      })
                      setError(false)
                    }
                  : () => {
                      setModal(false)
                      setLoading(false)
                    }}
              </Button>
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
