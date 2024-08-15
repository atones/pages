import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault'
})

export function middleware (request: NextRequest) {
  if (['/terms', '/download', '/certcopy'].some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next()
  }

  return I18nMiddleware(request as unknown as never)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt|sitemap.xml).*)']
}
