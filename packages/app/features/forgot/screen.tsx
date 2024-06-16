import {
  Image,
  XStack,
  YStack
} from '@my/ui'
import React from 'react'
import { useLink } from 'solito/link'

import { ForgotForm } from '../form/form-forgot-screen'

export function Forgot() {
  const linkProps = useLink({
    href: '/user/nate',
  })

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

      <XStack position="relative" zi="$5" mt="$space.-20">
        <ForgotForm size={100} />
      </XStack>
    </YStack>
  )
}