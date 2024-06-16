import React from 'react'
import { YStack, XStack } from 'tamagui'

import Menu from 'app/features/menu/screen'
import { Navbar } from 'app/features/navbar/screen'
import { EstablismentsTable } from 'app/features/establishment-table/screen'

import { CreateEstablishmentSheet } from 'app/features/createEstablishmentSheet/screen'
import { CreateStockSheet } from 'app/features/create-stock-sheet/screen'
import { CreateTableSheet } from 'app/features/create-table-sheet/screen'

const establishments = () => {
  return (
    <YStack>
      <YStack bg="$blue10" h="50vh">
        <Navbar />
      </YStack>
      <Menu placement="bottom" Name="bottom-popover" />
      <XStack>
        <CreateEstablishmentSheet />
        <CreateStockSheet />
        <CreateTableSheet />
      </XStack>

      <XStack w="80%" ai="center" p="$7" jc="center" mt="-200px" ml="$10">
        <EstablismentsTable />
      </XStack>
    </YStack>
  )
}

export default establishments
