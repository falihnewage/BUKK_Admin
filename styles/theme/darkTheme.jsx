import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#251A40',
      light: '#2E2957',
      dark: '#201633',
    },
    success: {
      main: '#54F12D',
      light: '#2DF193',
      dark: '#139D21',
    },
    info: {
      main: '#1461D6',
      light: '#5286EA',
      dark: '#3154B1',
    },
    error: {
      main: '#F1392D',
      light: '#F12D7F',
    },
    warning: {
      main: '#F1CA2D',
      dark: '#D6C214',
    },
    background: {
      main: '#201633',
      light: '#042B52',
      dark: '#120E1F',
      purple: '#2E2957',
    },
    custom: {
      orange: '#F89A6D',
      grey: '#354869',
      purple: '#41449B',
      green:'#058B23'
    },
    box: {
      purple: '#41449B21',
    },
    badge: {
      main: '#F30404',
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
})

export default darkTheme
