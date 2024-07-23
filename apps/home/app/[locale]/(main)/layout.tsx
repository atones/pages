import type { PropsWithChildren } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function MainLayout ({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }} className="flex w-full flex-col items-center bg-white">
        {children}
      </main>
      <Footer />
    </>
  )
}