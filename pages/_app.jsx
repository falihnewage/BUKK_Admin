import React, { useContext, useState } from 'react'

import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utility/createEmotionCache'
import darkTheme from '../styles/theme/darkTheme'
import '../styles/globals.css'

import SideNavContext from 'src/Contexts/SideNavContext'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const [opened, setOpened] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <SideNavContext.Provider
          value={{ opened, isAuthenticated, setIsAuthenticated }}
        >
          <CssBaseline />
          <Component {...pageProps} />
        </SideNavContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
