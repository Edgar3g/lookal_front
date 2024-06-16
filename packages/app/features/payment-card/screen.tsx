import React from 'react'
import { XStack, Card, Input, H2, Label } from 'tamagui'
import { BiLogoMastercard, BiLogoVisa } from 'react-icons/bi'

const PaymentCard = () => {
  return (
    <XStack ml="320px" mt="50px">
      <Card w="84%" height="172px" p="$3" fs={0} bg="#FFF">
        <Card.Header>
          <H2>Metodos de pagamento</H2>
        </Card.Header>
        <XStack gap="$5" ai="center">
          <XStack>
            <Input
              placeholder="7812 2139 0823 XXXX"
              display="flex"
              w="460.5px"
              h="63.034px"
              p="$2"
              ai="center"
              fs={0}
            />
            <Label position="absolute" right="10px" mt="$2">
              <BiLogoMastercard size={50} color="gray" />
            </Label>
          </XStack>

          <XStack>
            <Label position="absolute" right="10px" mt="$2">
              <BiLogoVisa size={50} color="gray" />
            </Label>
            <Input
              placeholder="7812 2139 0823 XXXX"
              display="flex"
              w="460.5px"
              h="63.034px"
              p="$2"
              ai="center"
              fs={0}
            />
          </XStack>
        </XStack>
      </Card>
    </XStack>
  )
}

export { PaymentCard }
