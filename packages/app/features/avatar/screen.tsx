import React from 'react'

import { Avatar, XStack } from 'tamagui'

export function AvatarComponent() {
  return (
    <XStack alignItems="center" space="$6">
      <Avatar circular size="$4">
        <Avatar.Image accessibilityLabel="Cam" src="https://github.com/EdmauroGoma.png" />

        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </XStack>
  )
}
