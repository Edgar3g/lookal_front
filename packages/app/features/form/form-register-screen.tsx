import { useState } from 'react'

import { Link } from 'solito/link'
import { BsApple, BsFacebook, BsGoogle } from 'react-icons/bs'

import {
  Button,
  Form,
  H4,
  SizeTokens,
  Spinner,
  XStack,
  YStack,
  Input,
  Label,
  Paragraph,
  Text,
} from 'tamagui'
import { useRouter } from 'solito/router'

import { Toast, useToastController, useToastState } from '@tamagui/toast'

import { API } from '../../../../services/api'
import useAuth from '../../../../context/AuthProvider/useAuth'

export function RegisterForm(props: { size: SizeTokens }) {
  const auth = useAuth()

  const router = useRouter()

  const [status, setStatus] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    try {
      const { status } = await API.post('/user/register', {
        name,
        email,
        phone,
        password,
      })

      console.log(status)

      if (status === 201) {
        router.push('/')
      }

      setStatus(true)
    } catch (error) {
      setStatus(false)
      console.log(error)
    }
  }

  return (
    <Form
      alignItems="center"
      w={452}
      h={680}
      space
      onSubmit={() => onSubmit}
      borderWidth={1}
      borderRadius="$4"
      backgroundColor="$background"
      borderColor="$borderColor"
      padding="$8"
    >
      <H4>Entre na sua conta com</H4>

      <XStack p="$4" display="flex" gap="$5">
        <Button>
          <BsGoogle size={32} />
        </Button>

        <Button>
          <BsApple size={32} />
        </Button>

        <Button>
          <BsFacebook size={32} />
        </Button>
      </XStack>

      <h4>Ou</h4>

      <XStack display="flex" flexDirection="column" gap="$3">
        <Label htmlFor="email">Username</Label>
        <Input
          size="$4"
          borderWidth={2}
          id="name"
          placeholder="Digite seu username"
          onChangeText={setName}
        />

        <Label htmlFor="email">Email</Label>
        <Input
          size="$4"
          borderWidth={2}
          id="email"
          placeholder="Digite seu Email"
          onChangeText={setEmail}
        />

        <Label htmlFor="phone">Telemovel</Label>
        <Input
          size="$4"
          borderWidth={2}
          id="phone"
          placeholder="Digite seu Telemovel"
          onChangeText={setPhone}
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
            icon={status === true ? () => <Spinner /> : undefined}
            onPress={() => onSubmit()}
          >
            Criar conta
          </Button>
        </Form.Trigger>
      </XStack>

      <Paragraph display="flex" gap="$2" mt="$2">
        Possui uma conta?
        <Link href="/register">
          <Text color={'$blue10'} fontWeight="bold" display="flex" flexDirection="row">
            Faça Login
          </Text>
        </Link>
      </Paragraph>
    </Form>
  )
}
