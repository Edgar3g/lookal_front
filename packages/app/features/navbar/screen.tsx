import React from 'react'

import { View, XStack, H3, Text } from '@my/ui'
import { Search } from '../search/screen'
import { AvatarComponent } from '../avatar/screen'
import { SettingsMenu } from '../settings-menu/screen'

const Navbar = () => {
  return (
    <XStack ml="320px" mt="$5" ai="center" jc="space-between" width="70%">
      <Text
        color="#FFF"
        fontFamily="$body"
        fontSize={20}
        hoverStyle={{
          color: '$colorHover',
        }}
      >
        Daneus /
        <br />
        <Text
          color="$white"
          fontFamily="$body"
          fontSize={20}
          hoverStyle={{
            color: '$colorHover',
          }}
          fontWeight="bold"
        >
          Nome da Empresa
        </Text>
      </Text>
      <XStack gap="$4">
        <Search />
        <AvatarComponent />
        <SettingsMenu />
      </XStack>
    </XStack>
  )
}

export { Navbar }
