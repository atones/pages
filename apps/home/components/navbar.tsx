'use client'
import { Navbar, NavbarBrand, NavbarLink } from 'flowbite-react'
import { useScopedI18n } from '@/locales/client'
import Link from 'next/link'
import LocaleSelector from '@/components/locale'

const CandyNavbar = () => {
  const t = useScopedI18n('navbar')

  return (
    <header className="sticky top-0 z-50 flex w-full flex-col items-center border-b border-gray-200 bg-white">
      <Navbar
        border={false}
        theme={{
          root: {
            base: 'flex mx-auto w-full max-w-screen-desktop',
            inner: { base: 'flex justify-between items-center w-full mx-8 py-4' }
          },
          link: {
            base: 'block py-3 px-4 hover:bg-gray-100 rounded-lg text-gray-600 border-none',
            active: { on: 'text-gray-900' }
          },
          brand: { base: 'mr-4' }
        }}
      >
        <NavbarBrand as={Link} href="/">
          <img src="/logo.svg" className="sm:h-9 mr-3 h-6" alt="Candypay Logo" />
        </NavbarBrand>
        <div className="flex justify-between">
          <ul />
          <ul className="flex w-fit items-center gap-4">
            <NavbarLink href="/faq">{t('faq')}</NavbarLink>
            <NavbarLink href="/merchant">{t('merchant')}</NavbarLink>
            <LocaleSelector />
          </ul>
        </div>
      </Navbar>
    </header>
  )
}

export default CandyNavbar