'use client'
import { useScopedI18n } from '@/locales/client'
import Link from 'next/link'
import LocaleSelector from '@/components/locale'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const CandyNavbar = () => {
  const t = useScopedI18n('navbar')

  return (
    <header className="sticky top-0 z-50 flex border-b border-gray-200 bg-white">
      <nav
        className="mx-auto flex min-h-12 w-full max-w-screen-desktop items-center justify-between px-6 desktop:min-h-16 desktop:px-8"
      >
        <Link className="mr-4" href="/">
          <img src="/logo.svg" className="mr-3 h-5 desktop:h-6" alt="Candypay Logo" />
        </Link>
        <Menu>
          <MenuButton className="block desktop:hidden" aria-label="Toggle Menu">
            <Bars3Icon className="size-6" />
          </MenuButton>
          <MenuItems
            anchor={{ to: 'bottom', gap: 13 }}
            className="top-2 w-full bg-white"
          >
            <MenuItem>
              <Link className="block px-5 py-4 text-gray-600 hover:bg-gray-100" href="/faq">
                {t('faq')}
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className="block px-5 py-4 text-gray-600 hover:bg-gray-100" href="/merchant">
                {t('merchant')}
              </Link>
            </MenuItem>
            <MenuItem as="div" className="px-5 py-4 hover:bg-gray-100">
              <LocaleSelector />
            </MenuItem>
          </MenuItems>
        </Menu>
        <div className="hidden w-full max-w-screen-desktop justify-between desktop:flex">
          <ul />
          <ul className="flex w-fit items-center gap-4 text-gray-600">
            <li>
              <Link className="block rounded-lg px-4 py-3 text-gray-600 hover:bg-gray-100" href="/faq">
                {t('faq')}
              </Link>
            </li>
            <li className="mr-12">
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