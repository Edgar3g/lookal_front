import { useState } from 'react'

import { Link } from 'solito/link'

import { useRouter } from 'solito/router'
import {
  Button,
  Form,
  H4,
  Input,
  Label,
  Paragraph,
  SizeTokens,
  Spinner,
  Text,
  XStack
} from 'tamagui'

import { useToastController } from '@tamagui/toast'

import useAuth from '../../../../context/AuthProvider/useAuth'

export function Forms(props: { size: SizeTokens }) {
  const auth = useAuth()

  const router = useRouter()

  const toast = useToastController()

  const [status, setStatus] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = async () => {
    setStatus(true)
    try {
      await auth.authenticate(email, password)
      router.push('/dashboard')
    } catch (error) {
      setStatus(false)
      toast.show('Credenciais Invalidas', {
        message: 'Insira credenciais validas para fazer login',
      })
      setError(true)
    }
  }

  return (
    <Form
      alignItems="center"
      w={452}
      h={670}
      space
      onSubmit={() => onSubmit}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
      marginTop={100}
    >
      <H4>Entre na sua conta com</H4>

      <XStack display="flex" flexDirection="column" gap="$3">
        <Label htmlFor="email">Email</Label>
        <Input
          size="$4"
          borderWidth={2}
          id="email"
          placeholder="Digite seu Email"
          onChangeText={setEmail}
        />

        <Label htmlFor="password">Password</Label>
        <Input
          size="$4"
          borderWidth={2}
          id="password"
          onChangeText={setPassword}
          placeholder="Digite sua Password"
          secureTextEntry
        />
        <Link href="/forgot">
          <Paragraph ml="$10" color={'$blue10'} display="flex" flexDirection="row">
            Esqueceu sua palavra passe?
          </Paragraph>
        </Link>
        <Form.Trigger asChild disabled={status !== false}>
          <Button
            size="$4"
            p="$space.5"
            paddingHorizontal="$14"
            disabled={status}
            icon={status === true ? () => <Spinner /> : undefined}
            onPress={() => onSubmit()}
          >
            Entrar
          </Button>
        </Form.Trigger>
      </XStack>

      <Paragraph display="flex" gap="$2" mt="$10">
        Não Possui uma conta?
        <Link href="/register">
          <Text color={'$blue10'} fontWeight="bold" display="flex" flexDirection="row">
            Faça Cadastro
          </Text>
        </Link>
      </Paragraph>
    </Form>
  )
}
