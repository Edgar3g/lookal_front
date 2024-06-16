import { X, Search as SearchIcon } from '@tamagui/lucide-icons'

import { useState } from 'react'

import {
  Adapt,
  Button,
  Dialog,
  Fieldset,
  Input,
  Label,
  Paragraph,
  Sheet,
  TooltipSimple,
  Unspaced,
  XStack,
  YStack,
} from 'tamagui'

export function Search() {
  const [open, setOpen] = useState(false)
  return (
    <Dialog
      modal
      onOpenChange={(open) => {
        setOpen(open)
      }}
    >
      <Dialog.Trigger asChild>
        <Button w="$10" icon={SearchIcon} backgroundColor="$blue10" borderColor="#FFF" color="#FFF">
          /
        </Button>
      </Dialog.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet zIndex={200000} modal dismissOnSnapToBottom>
          <Sheet.Frame padding="$4" space>
            <Adapt.Contents />
          </Sheet.Frame>

          <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        </Sheet>
      </Adapt>
      <Dialog.Portal>
        <Dialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          enterStyle={{ opacity: 0 }}
          exitStyle={{ opacity: 0 }}
        />
        <Dialog.Content
          bordered
          elevate
          key="content"
          animateOnly={['transform', 'opacity']}
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          space
        >
          <Dialog.Title>Pesquisa</Dialog.Title>

          <Dialog.Description>Faça buscas no sistema</Dialog.Description>

          <Fieldset space="$4" horizontal>
            <Input flex={1} width="300px" id="q" defaultValue="MacBook Pro" />
            <Label width={50} justifyContent="center" htmlFor="name">
              <Button theme="alt1" aria-label="Close" icon={SearchIcon}></Button>
            </Label>
          </Fieldset>

          <Fieldset space="$4" horizontal>
            <Label width={160} justifyContent="flex-end" htmlFor="username">
              <TooltipSimple label="Pick your favorite" placement="bottom-start"></TooltipSimple>
            </Label>
          </Fieldset>
          <XStack alignSelf="flex-end" space>
            <Dialog.Close displayWhenAdapted asChild></Dialog.Close>
          </XStack>
          <Unspaced>
            <Dialog.Close asChild>
              <Button position="absolute" top="$3" right="$3" size="$2" circular icon={X} />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  )
}
