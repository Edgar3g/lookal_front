import { X, Settings, Edit, CreditCard, Sun, LogOut, Settings2 } from '@tamagui/lucide-icons'

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
  YGroup,
  ListItem,
  Theme,
} from 'tamagui'
import { Link } from "solito/link" 

import ChangeTheme from '../change-theme/screen'

export function SettingsMenu() {
  const [open, setOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <Theme>
      <Dialog
        modal
        onOpenChange={(open) => {
          setOpen(open)
        }}
      >
        <Dialog.Trigger asChild>
          <Button icon={Settings} color="#FFF" bg="$blue10"></Button>
        </Dialog.Trigger>
        <Adapt when="sm" platform="touch">
          <Sheet zIndex={200000} modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4" space>
              <Adapt.Contents />
            </Sheet.Frame>

            <Sheet.Overlay
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0 }}
            />
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
            <Dialog.Title>Configurações</Dialog.Title>

            <Dialog.Description>
              Altere dados de seu perfil, empresa e pagamentos
            </Dialog.Description>
            <YGroup alignSelf="center" bordered width={500} size="$4">
              <YGroup.Item>
                <Link href="/me">
                   <ListItem
                    hoverTheme
                    icon={Edit}
                    title="Editar Perfil"
                    subTitle="edmauro@gmail.com"
                  >
                  </ListItem>
                </Link>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem hoverTheme icon={Settings2}>
                  Definições de Empresas
                </ListItem>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem hoverTheme icon={CreditCard}>
                  Definições de Pagamentos
                </ListItem>
              </YGroup.Item>
              <YGroup.Item>
                <ListItem hoverTheme icon={LogOut} color="$red10">
                  Logout
                </ListItem>
              </YGroup.Item>
            </YGroup>

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
    </Theme>
  )
}
