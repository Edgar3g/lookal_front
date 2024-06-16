import { Adapt, Button, Input, Text, Popover, PopoverProps, XStack, YStack } from 'tamagui'
import React from 'react'
import { Menu as MenuIcon, Home, Layout, CreditCard } from '@tamagui/lucide-icons'
import { AiFillHome, AiOutlineProject, AiOutlineUserSwitch } from 'react-icons/ai'
import {
  BsCreditCard2Back,
  BsFile,
  BsFileArrowDownFill,
  BsGraphUpArrow,
  BsHandIndexThumb,
} from 'react-icons/bs'

import { Link } from 'solito/link'
import { BiStore } from 'react-icons/bi'

const Menu = ({ Icon, Name, ...props }: PopoverProps & { Icon?: any; Name?: string }) => {
  return (
    <Popover size="$6" stayInFrame={true} allowFlip {...props}>
      <Popover.Trigger asChild>
        <Button
          icon={Layout}
          style={{
            width: 60,
            height: 60,
            position: 'fixed',
            top: 20,
            left: 130,
            zIndex: 9999,
            borderRadius: '100%',
          }}
        />
      </Popover.Trigger>

      <Adapt when="sm" platform="touch">
        <Popover.Sheet modal dismissOnOverlayPress animation={'lazy'}>
          <Popover.Sheet.Frame padding="$5">
            <Adapt.Contents />
          </Popover.Sheet.Frame>
          <Popover.Sheet.Overlay />
        </Popover.Sheet>
      </Adapt>

      <Popover.Content
        borderWidth={1}
        height="500px"
        borderColor="$borderColor"
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          'quick',
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

        <YStack space="$3" mt="$10">
          <Popover.Close asChild>
            <Button
              size="$5"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <AiFillHome size={20} />
              <Link href="/dashboard">
                <Text
                  color="$white"
                  fontFamily="$body"
                  fontSize={16}
                  hoverStyle={{
                    color: '$colorHover',
                  }}
                >
                  Dashboard
                </Text>
              </Link>
            </Button>
          </Popover.Close>

          <XStack space="$3" fd="column">
            <Button
              size="$5"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <AiOutlineProject size={20} />
              <Link href="/product">
                <Text
                  color="$white"
                  fontFamily="$body"
                  fontSize={16}
                  hoverStyle={{
                    color: '$colorHover',
                  }}
                >
                  Produtos
                </Text>
              </Link>
            </Button>

            <Button
              size="$5"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <AiOutlineUserSwitch size={20} />

              <Link href="/customer">
                <Text
                  color="$white"
                  fontFamily="$body"
                  fontSize={16}
                  hoverStyle={{
                    color: '$colorHover',
                  }}
                >
                  Clientes
                </Text>
              </Link>
            </Button>

            <Button
              size="$5"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <BsCreditCard2Back size={20} />
              <Link href="/bilings">
                <Text
                  color="$white"
                  fontFamily="$body"
                  fontSize={16}
                  hoverStyle={{
                    color: '$colorHover',
                  }}
                >
                  Faturamentos
                </Text>
              </Link>
            </Button>
            <Button
              size="$5"
              onPress={() => {
                /* Custom code goes here, does not interfere with popover closure */
              }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <BiStore size={20} />
              <Link href="/establishments">
                <Text
                  color="$white"
                  fontFamily="$body"
                  fontSize={16}
                  hoverStyle={{
                    color: '$colorHover',
                  }}
                >
                  Estabelecimentos
                </Text>
              </Link>
            </Button>
          </XStack>
        </YStack>
      </Popover.Content>
    </Popover>
  )
}

export default Menu
