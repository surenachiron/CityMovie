import '@/styles/globals.css'
import { Container } from '@mui/material'
import localFont from 'next/font/local'
import Header from '@/components/common/Header'

const roboto = localFont({
  src: [{ path: '../public/fonts/roboto/Roboto-Thin.ttf' }, { path: '../public/fonts/roboto/Roboto-Medium.ttf' }, { path: '../public/fonts/roboto/Roboto-Light.ttf' }, { path: '../public/fonts/roboto/Roboto-Black.ttf' }, { path: '../public/fonts/roboto/Roboto-Bold.ttf' }]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Container fixed>
          <Header />
          {children}
        </Container>
      </body>
    </html >
  )
}