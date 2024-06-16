import { ChevronDown, ChevronUp, Plus, Save } from '@tamagui/lucide-icons'

import { Sheet, SheetProps, useSheet } from '@tamagui/sheet'

import { useState } from 'react'

import { Button, Label, H3, H4, Input, TextArea, XStack, YStack, Spinner } from 'tamagui'
import { API } from '../../../../services/api'
import { getUserLocalStorage } from '../../../../context/AuthProvider/utils'
import { useToastController } from '@tamagui/toast'

import useAuth from '../../../../context/AuthProvider/useAuth'

export const CreateStockSheet = () => {
  const [position, setPosition] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [productName, setProductName] = useState('')
  const [productQuant, setProductQuant] = useState('')
  const [productRef, setProductRef] = useState('')
  const [price, setPrice] = useState('')
  const [purchase_price, setPurchase_price] = useState('')

  const user = getUserLocalStorage()

  const toast = useToastController()

  const handlePost = async () => {
    setLoading(true)
    try {
      const { status } = await API.post(
        '/stock/create',
        {
          productName,
          productQuant,
          productRef,
          price,
          purchase_price,
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
          Novo Stock
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
            <H3>Crie um novo Stock</H3>

            <XStack ai="flex-end" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="productName">Nome do Produto</Label>
                <Input
                  size="$3"
                  width={200}
                  onChangeText={setProductName}
                  placeholder="Nome do produto"
                />
              </YStack>

              <YStack>
                <Label htmlFor="productQuant">Quantidade</Label>
                <Input
                  keyboardType="number-pad"
                  onChangeText={setProductQuant}
                  size="$3"
                  width={200}
                  placeholder="Quantidade do produto"
                />
              </YStack>
            </XStack>

            <XStack ai="center" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="productRef">Referencia do Produto</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setProductRef}
                  width={200}
                  placeholder="Referencia"
                />
              </YStack>

              <YStack>
                <Label htmlFor="price">Preço</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  dataDetectorTypes="phoneNumber"
                  onChangeText={setPrice}
                  width={200}
                  placeholder="Preço do Produto"
                />
              </YStack>
            </XStack>

            <XStack ai="center" gap="$5">
              <YStack>
                <Label htmlFor="purchase_price">Preço de Compra</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setPurchase_price}
                  width={200}
                  placeholder="Preço de compra"
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
