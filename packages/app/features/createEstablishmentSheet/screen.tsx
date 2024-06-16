import { ChevronDown, ChevronUp, Plus, Save } from '@tamagui/lucide-icons'

import { Sheet, SheetProps, useSheet } from '@tamagui/sheet'

import { useState } from 'react'

import { Button, Label, H3, H4, Input, TextArea, XStack, YStack, Spinner } from 'tamagui'
import { API } from '../../../../services/api'
import { getUserLocalStorage } from '../../../../context/AuthProvider/utils'
import { useToastController } from '@tamagui/toast'

import useAuth from '../../../../context/AuthProvider/useAuth'

export const CreateEstablishmentSheet = () => {
  const [position, setPosition] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(true)
  const [innerOpen, setInnerOpen] = useState(false)
  const [name, setName] = useState('')
  const [nif, setNif] = useState('')
  const [phone, setPhone] = useState('')
  const [slogan, setSlogan] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [region, setRegion] = useState('')
  const [proprietorId, setProprietorId] = useState('')

  const user = getUserLocalStorage()

  const toast = useToastController()

  const handlePost = async () => {
    setLoading(true)
    try {
      const { status } = await API.post(
        '/establishments',
        {
          name,
          nif,
          phone,
          slogan,
          country,
          city,
          region,
          proprietorId,
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
      <XStack space marginLeft="300px" mt="-250px">
        <Button onPress={() => setOpen(true)} icon={Plus}>
          Novo Establecimento
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
            <H3>Crie um novo Establecimento</H3>

            <XStack ai="flex-end" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="name">Nome</Label>
                <Input
                  size="$3"
                  width={200}
                  onChangeText={setName}
                  placeholder="Nome do Establecimento"
                />
              </YStack>

              <YStack>
                <Label htmlFor="nif">NIF</Label>
                <Input
                  keyboardType="number-pad"
                  onChangeText={setNif}
                  size="$3"
                  width={200}
                  placeholder="Seu NIF"
                />
              </YStack>
            </XStack>

            <XStack ai="center" gap="$5" jc="space-between">
              <YStack>
                <Label htmlFor="phone">Telemovel</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setPhone}
                  width={200}
                  placeholder="Numero de Telemovel"
                />
              </YStack>

              <YStack>
                <Label htmlFor="slogan">Slogan</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setSlogan}
                  width={200}
                  placeholder="Seu Slogan"
                />
              </YStack>
            </XStack>

            <XStack ai="center" gap="$5">
              <YStack>
                <Label htmlFor="country">Pais</Label>
                <Input
                  keyboardType="number-pad"
                  size="$3"
                  onChangeText={setCountry}
                  width={200}
                  placeholder="Seu Pais"
                />
              </YStack>

              <YStack>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  keyboardType="number-pad"
                  ml="$1"
                  size="$3"
                  onChangeText={setCity}
                  width={200}
                  placeholder="Cidade"
                />
              </YStack>
            </XStack>

            <YStack>
              <Label htmlFor="region">Regiao</Label>
              <Input size="$3" width={200} onChangeText={setRegion} placeholder="Sua Regiao" />
            </YStack>

            <YStack>
              <Label htmlFor="proprietorId">Id-Proprietario</Label>
              <Input
                keyboardType="number-pad"
                placeholder="Id do Proprietario"
                onChangeText={setProprietorId}
                width={200}
                size="$3"
              />
            </YStack>

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
