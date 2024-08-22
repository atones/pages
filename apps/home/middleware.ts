import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault'
})

export function middleware (request: NextRequest) {
  return I18nMiddleware(request as unknown as never)
}

const imageExts = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp']
const staticExts = ['xml', 'txt', 'json', 'ico']
const exts = imageExts.concat(staticExts)

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml).*)']
}