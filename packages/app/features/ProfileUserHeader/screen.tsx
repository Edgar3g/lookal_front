import React from 'react'
import { IoMdBuild, IoMdCube, IoMdDocument } from 'react-icons/io'
import { Card, ListItem, H2, Paragraph, XStack, YStack, Button, Avatar } from 'tamagui'

const ProfileUserHeader = () => {
  return (
    <XStack w="1200px" h="150px" jc="space-between" mt="$-20" ml="100px">
      <ListItem borderRadius="$6" bg="$blue4Light">
        <Card bg="$0">
          <Card.Header display="flex" flexDirection="row" gap="$5" ai="center" jc="center" fs={0}>
            <Avatar circular size="$10">
              <Avatar.Image accessibilityLabel="Nate Wienert" src="https://github.com/Edhotz.png" />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>

            <YStack>
              <H2>Edmauro Goma</H2>
              <Paragraph>edmauro@sample.com</Paragraph>
            </YStack>
          </Card.Header>
        </Card>

        <XStack gap="$7">
          <Card bg="$0">
            <Card.Header display="flex" flexDirection="row" gap="$5" ai="center" jc="center" fs={0}>
              <Button bg="$blue1Light" hoverStyle={{ backgroundColor: 'transparent' }}>
                <IoMdCube size={30} />
                <Paragraph>Lojas</Paragraph>
              </Button>
            </Card.Header>
          </Card>

          <Card bg="$0">
            <Card.Header display="flex" flexDirection="row" gap="$5" ai="center" jc="center" fs={0}>
              <Button bg="$0" hoverStyle={{ backgroundColor: 'transparent' }}>
                <IoMdDocument size={30} />
                <Paragraph>Equipes</Paragraph>
              </Button>
            </Card.Header>
          </Card>

          <Card bg="$0">
            <Card.Header display="flex" flexDirection="row" gap="$5" ai="center" jc="center" fs={0}>
              <Button bg="$0" hoverStyle={{ backgroundColor: 'transparent' }}>
                <IoMdBuild size={30} />
                <Paragraph>Relatorios</Paragraph>
              </Button>
            </Card.Header>
          </Card>
        </XStack>
      </ListItem>
    </XStack>
  )
}

export { ProfileUserHeader }
