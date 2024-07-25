'use client'
import { useScopedI18n } from '@/locales/client'
import Link from 'next/link'
import LocaleSelector from '@/components/locale'

const CandyNavbar = () => {
  const t = useScopedI18n('navbar')

  return (
    <header className="sticky top-0 z-50 flex border-b border-gray-200 bg-white">
      <nav className="mx-auto flex w-full max-w-screen-desktop items-center justify-between px-8 py-2">
        <Link className="mr-4" href="/">
          <img src="/logo.svg" className="mr-3 h-6" alt="Candypay Logo" />
        </Link>
        <div className="flex justify-between">
          <ul />
          <ul className="flex w-fit items-center gap-4 text-gray-600">
            <li>
              <Link className="block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100" href="/faq">
                {t('faq')}
              </Link>
            </li>
            <li>
              <Link className="block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100" href="/merchant">
                {t('merchant')}
              </Link>
            </li>
            <LocaleSelector />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default CandyNavbar