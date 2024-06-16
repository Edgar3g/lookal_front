import React from 'react'
import { XStack, YStack } from 'tamagui'

import Menu from '../../../packages/app/features/menu/screen'
import { ProfileUserHeader } from '../../../packages/app/features/ProfileUserHeader/screen'
import { Navbar } from '../../../packages/app/features/navbar/screen'
import { PlatformSettings } from '../../../packages/app/features/PlatformSettings/screen'

import { ArrowRight } from '@tamagui/lucide-icons'

const me = () => {
  return (
    <>
      <YStack bg="$blue10" h="50vh">
        <Navbar />
      </YStack>
      <YStack ai="center" jc="center" mt="-100px">
        <Menu placement="bottom" Name="bottom-popover" />

        <YStack>
          <ProfileUserHeader />
        </YStack>

        <XStack>
          <PlatformSettings />
        </XStack>
      </YStack>
    </>
  )
}

export default me
