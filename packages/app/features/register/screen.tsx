import {
  Image,
  XStack,
  YStack
} from '@my/ui'
import React from 'react'

import { RegisterForm } from '../form/form-register-screen'

export function Register() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Image
        source={{
          uri: 'http://www.lookalbeachclub.com/imagens/lookalpic.jpg',
          width: '100%',
          height: '40vh',
        }}
        alt="bg image"
        br="$5"
      />

      <XStack position="relative" zi="$5" mt="$space.-20" top="$-12">
        <RegisterForm size={100} />
      </XStack>
    </YStack>
  )
}
