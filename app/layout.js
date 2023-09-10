import '@/styles/globals.css'
import { Container, ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import localFont from 'next/font/local'
import Header from '@/components/common/Header'
import theme from './theme'

const roboto = localFont({
  src: [{ path: '../public/fonts/roboto/Roboto-Thin.ttf' }, { path: '../public/fonts/roboto/Roboto-Medium.ttf' }, { path: '../public/fonts/roboto/Roboto-Light.ttf' }, { path: '../public/fonts/roboto/Roboto-Black.ttf' }, { path: '../public/fonts/roboto/Roboto-Bold.ttf' }]
})


export const metadata = {
  title: 'CityMovie',
  description: 'citymovie a platform for shows trand movie ans series',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link rel="icon" href="/images/loading-sppiner.svg" sizes="any" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container fixed>
            <Header />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html >
  )
}