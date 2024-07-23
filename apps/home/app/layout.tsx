import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { ThemeModeScript } from 'flowbite-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: '캔디페이',
  description: '내 맘대로 간편결제'
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

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
    <head>
      <link
        rel="stylesheet"
        as="style"
        crossOrigin="anonymous"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.min.css"
      />
      <ThemeModeScript mode="light" />
    </head>
    <body className={`${tossFace.variable} font-sans`}>
    <Navbar />
    <main style={{ minHeight: '100vh' }} className="flex w-full flex-col items-center bg-white">
      {children}
    </main>
    <Footer />
    </body>
    </html>
  )
}
