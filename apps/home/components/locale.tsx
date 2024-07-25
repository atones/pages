'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'

export default function LocaleSelector () {
  return (
    <div className="flex gap-4">
      <LocaleButton locale="ko" />
      <span className="text-gray-400">|</span>
      <LocaleButton locale="en" />
    </div>
  )
}

const LocaleButton = ({ locale }: { locale: 'ko' | 'en' }) => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()

  return (
    <button
      onClick={() => changeLocale(locale)}
      aria-selected={currentLocale === locale}
      className="text-gray-400 aria-selected:text-gray-800"
    >
      {locale.toUpperCase()}
    </button>
  )
}