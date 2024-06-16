import { Moon, Sun } from '@tamagui/lucide-icons'
import React from 'react'
import { Switch, SwitchProps, XStack, Paragraph } from 'tamagui'

function ChangeTheme({ ...rest }: SwitchProps) {
  return (
    <XStack space="$2" ai="center" position="absolute" bottom="-200px" right="10px">
      <Paragraph color="$blue10" mr="$4">
        Alterar Tema
      </Paragraph>
      <Sun size="$2" />
      <Switch size="$2" bg="$gray6" {...rest}>
        <Switch.Thumb animation="bouncy" />
      </Switch>
      <Moon size="$2" />
    </XStack>
  )
}

export default ChangeTheme
