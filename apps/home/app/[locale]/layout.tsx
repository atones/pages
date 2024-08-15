import type { PropsWithChildren } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { I18nProviderClient } from '@/locales/client'
import { getStaticParams } from '@/locales/server'

export function generateStaticParams () {
  return getStaticParams()
}

export default function MainLayout ({ params: { locale }, children }: PropsWithChildren<{
  params: { locale: string }
}>) {
  return (
    <I18nProviderClient locale={locale}>
      <Navbar />
      <main style={{ minHeight: '100vh' }} className="flex w-full flex-col items-center bg-white">
        {children}
      </main>
      <Footer />
    </I18nProviderClient>
  )
}