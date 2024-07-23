'use client'
import { createI18nClient } from 'next-international/client'

export const { I18nProviderClient } = createI18nClient({
  en: () => import('./ko'),
  fr: () => import('./en')
})
