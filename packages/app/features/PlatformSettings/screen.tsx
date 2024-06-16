import React from 'react'
import { YStack, XStack, Card, H2, Paragraph, H4, Switch, Separator, Label } from 'tamagui'
import { CustomerTable } from '../customer-table/screen'
import { MessagesList } from '../MessagesList/screen'

const PlatformSettings = () => {
  return (
    <XStack gap="$5" ml="100px">
      <Card elevate w="400px" h="400px" borderRadius="$6" bg="#FFF" p="$5">
        <Card.Header>
          <H2>Definições da Plataforma</H2>

          <YStack gap="$2">
            <H4>Conta</H4>
            <XStack gap="$4">
              <Switch size="$4" bg={'$blue10'}>
                <Switch.Thumb animation="bouncy" bg="#FFF" />
              </Switch>
              <Separator minHeight={20} vertical />
              <Paragraph>Notificações via Email</Paragraph>
            </XStack>

            <XStack gap="$4">
              <Switch size="$4" bg={'$blue10'}>
                <Switch.Thumb animation="bouncy" bg="#FFF" />
              </Switch>
              <Separator minHeight={20} vertical />
              <Paragraph>Notificações via SMS</Paragraph>
            </XStack>

            <XStack gap="$4">
              <Switch size="$4" bg={'$blue10'}>
                <Switch.Thumb animation="bouncy" bg="#FFF" />
              </Switch>
              <Separator minHeight={20} vertical />
              <Paragraph>Habilitar Hora de Atendimento</Paragraph>
            </XStack>

            <H4>Aplicacao</H4>

            <XStack gap="$4">
              <Switch size="$4" bg={'$blue10'}>
                <Switch.Thumb animation="bouncy" bg="#FFF" />
              </Switch>
              <Separator minHeight={20} vertical />
              <Paragraph>Mostrar produtos Recomentados</Paragraph>
            </XStack>

            <XStack gap="$4">
              <Switch size="$4" bg={'$blue10'}>
                <Switch.Thumb animation="bouncy" bg="#FFF" />
              </Switch>
              <Separator minHeight={20} vertical /> <Paragraph>Actualizacoes Automaticas</Paragraph>
            </XStack>
          </YStack>
          <Card.Footer />
        </Card.Header>
      </Card>

      <Card elevate w="400px" h="400px" borderRadius="$6" bg="#FFF" p="$5">
        <Card.Header>
          <H2>Informacao do Perfil</H2>

          <YStack gap="$-1" ai="flex-start">
            <XStack ai="center" gap="$2">
              <Label size="$5" fontWeight="bold">
                Nome:
              </Label>

              <Paragraph>Edmauro Goma</Paragraph>
            </XStack>

            <XStack ai="center" gap="$2">
              <Label size="$5" fontWeight="bold">
                Email:
              </Label>

              <Paragraph>edmaurogoma@sample.com</Paragraph>
            </XStack>
          </YStack>

          <XStack ai="center" gap="$2">
            <Label size="$5" fontWeight="bold">
              Mobile:
            </Label>

            <Paragraph>+55 (11) 99999-9999</Paragraph>
          </XStack>

          <XStack ai="center" gap="$2">
            <Label size="$5" fontWeight="bold">
              Location:
            </Label>

            <Paragraph>Luanda</Paragraph>
          </XStack>
          <Card.Footer />
        </Card.Header>
      </Card>

      <Card elevate w="400px" h="400px" borderRadius="$6" bg="#FFF" p="$5">
        <Card.Header>
          <H2>Mensagens de Clientes</H2>
          <MessagesList />
          <Card.Footer />
        </Card.Header>
      </Card>
    </XStack>
  )
}

export { PlatformSettings }
