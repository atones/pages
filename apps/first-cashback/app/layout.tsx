import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import ClientProvider from '@/app/_ClientProviders'

export const metadata: Metadata = {
  title: '분할결제 체험 프로모션 | 캔디페이',
  description: '카드 나눠 100원 결제하고 1,000원 받아보세요',
  appleWebApp: {
    capable: true
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  viewportFit: 'cover'
}

const tossFace = localFont({
  src: '../public/TossFace.ttf',
  variable: '--font-toss-face'
})

export default function RootLayout ({ children }: PropsWithChildren) {
  return (
    <html lang="en">
    <GoogleTagManager gtmId="G-38RPJB9ZTR" />
    <head>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css"
      />
    </head>
    <body className={`${tossFace.variable} font-sans`}>
    <ClientProvider>{children}</ClientProvider>
    </body>
    </html>
  )
}
