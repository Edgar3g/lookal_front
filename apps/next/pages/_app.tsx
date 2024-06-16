import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'
import { ArrowRight } from '@tamagui/lucide-icons'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useState } from 'react'
import type { SolitoAppProps } from 'solito'
import { Theme, YStack } from 'tamagui'

import { AuthProvider } from '../../../context/AuthProvider'
import ChangeTheme from 'app/features/change-theme/screen'
import { useColorScheme } from 'react-native'
import Menu from 'app/features/menu/screen'
import { Navbar } from 'app/features/navbar/screen'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const colorScheme = useColorScheme()

  return (
    <>
      <Head>
        <title>Daneus</title>
        <meta name="description" content="Daneus web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <ThemeProvider>
          <Theme>
            <Component {...pageProps} />
          </Theme>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
