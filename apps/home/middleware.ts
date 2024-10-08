import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault',
  resolveLocaleFromRequest: () => null
})

export function middleware (request: NextRequest) {
  return I18nMiddleware(request as unknown as never)
}

export const config = {
  matcher: ['/((?!api|static|terms|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml).*)']
}