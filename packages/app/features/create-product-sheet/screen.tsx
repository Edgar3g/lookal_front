import { ChevronDown, ChevronUp, Plus, Save } from '@tamagui/lucide-icons'

import { Sheet, SheetProps, useSheet } from '@tamagui/sheet'

import { useState } from 'react'

import { Button, Label, H3, Input, TextArea, XStack, YStack } from 'tamagui'

export const CreateProductSheet = () => {
  const [position, setPosition] = useState(0)

  const [open, setOpen] = useState(false)

  const [modal, setModal] = useState(true)

  const [innerOpen, setInnerOpen] = useState(false)
  return (
    <>
      <XStack space marginLeft="300px" mt="-250px">
        <Button onPress={() => setOpen(true)} icon={Plus}>
          Criar
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

        <Sheet.Frame flex={1} padding="$4" justifyContent="center" alignItems="center" space="$5">
          <YStack width={400} minHeight={250} overflow="hidden" space="$2" margin="$3" padding="$2">
            <H3>Crie um novo Produto</H3>
            <Label htmlFor="name">Nome do Produto</Label>
            <Input size="$3" width={200} placeholder="Nome do Produto" />

            <Label htmlFor="price">Preço</Label>
            <Input keyboardType="number-pad" size="$3" width={200} placeholder="Preço em Kz" />

            <Label htmlFor="Quantity">Quantidade</Label>
            <Input size="$3" width={200} placeholder="Quantidade" />

            <Label htmlFor="description">Descrição do Produto</Label>
            <TextArea placeholder="Insira a descrição do produto" width="360px" h="200px" />

            <XStack display="flex" justifyContent="space-between">
              <Button size="$6" circular icon={Save} />
              <Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} />
            </XStack>
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
