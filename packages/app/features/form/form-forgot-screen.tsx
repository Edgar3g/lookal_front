import { bold } from 'colors'
import { stat } from 'fs'
import { useEffect, useState } from 'react'

import { Link } from 'solito/link'
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs'

import {
  Button,
  Form,
  H5,
  SizeTokens,
  Spinner,
  XStack,
  YStack,
  Input,
  Label,
  Paragraph,
  Text,
} from 'tamagui'

export function ForgotForm(props: { size: SizeTokens }) {
  const [status, setStatus] = useState<'off' | 'submitting' | 'submitted'>('off')
  useEffect(() => {
    if (status === 'submitting') {
      const timer = setTimeout(() => setStatus('off'), 2000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [status])
  return (
    <Form
      alignItems="center"
      w={452}
      h={470}
      space
      onSubmit={() => setStatus('submitting')}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <H5>Insira seu email para recuperação de palavra passe</H5>

      <XStack p="$4" display="flex" gap="$3" flexDirection="column">
        <Label htmlFor="email">Email</Label>
        <Input size="$4" borderWidth={2} id="name" placeholder="Digite seu Email" />
      </XStack>

      <Form.Trigger asChild disabled={status !== 'off'}>
        <Button
          size="$4"
          p="$space.5"
          paddingHorizontal="$14"
          icon={status === 'submitting' ? () => <Spinner /> : undefined}
        >
          Enviar
        </Button>
      </Form.Trigger>
    </Form>
  )
}
