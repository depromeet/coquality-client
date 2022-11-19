import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: {
      main: '#3C66DD',
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
  fonts: {
    heading: `Pretendard, sans-serif`,
    body: `Pretendard, sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#F9F9F9',
      },
    }),
  },
})
