import { Toast, ToastProvider, useToastController, useToastState } from '@tamagui/toast'

import React from 'react'

import { Button, Label, Switch, XStack, YStack } from 'tamagui'

export const ToastLogin = () => {
  const currentToast = useToastState()
  if (!currentToast || currentToast.isHandledNatively) return null

  return (
    <ToastProvider>
      <Toast
        key={currentToast.id}
        duration={currentToast.duration}
        enterStyle={{ opacity: 0, scale: 0.5, y: -25 }}
        exitStyle={{ opacity: 0, scale: 1, y: -20 }}
        y={0}
        opacity={1}
        scale={1}
        animation="bouncy"
        viewportName={currentToast.viewportName}
      >
        <YStack>
          <Toast.Title>Credenciais Invalidas</Toast.Title>

          <Toast.Description>Insira credenciais validas para fazer login</Toast.Description>
        </YStack>
      </Toast>
    </ToastProvider>
  )
}
