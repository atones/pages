import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse, userAgent } from 'next/server'

const I18nMiddleware = createI18nMiddleware({
  locales: ['ko', 'en'],
  defaultLocale: 'ko',
  urlMappingStrategy: 'rewriteDefault'
})

export function middleware (request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/download')) {
    const { os: { name: os = '' } } = userAgent(request)
    if (/iphone|ipad|ipod|mac/i.test(os)) return NextResponse.redirect('https://apps.apple.com/us/app/캔디페이/id6463577769')
    if (/android/i.test(os)) return NextResponse.redirect('https://play.google.com/store/apps/details?id=kr.co.candypay')
    return NextResponse.redirect('https://candypay.co.kr')
  }

  if (!request.nextUrl.pathname.startsWith('/terms')) {
    return I18nMiddleware(request as unknown as never)
  }
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
