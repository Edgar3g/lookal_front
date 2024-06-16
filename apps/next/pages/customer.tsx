import React from 'react'
import { XStack, YStack } from 'tamagui'
import { CustomerTable } from '../../../packages/app/features/customer-table/screen'
import Menu from '../../../packages/app/features/menu/screen'
import { Navbar } from '../../../packages/app/features/navbar/screen'
import { ArrowRight } from '@tamagui/lucide-icons'

const customer = () => {
  return (
    <YStack>
      <YStack bg="$blue10" h="50vh">
        <Navbar />
      </YStack>
      <Menu placement="bottom" Name="bottom-popover" />
      <CustomerTable />
    </YStack>
  )
}

export default customer
