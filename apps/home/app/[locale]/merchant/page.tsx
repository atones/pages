import { H1 } from '@/components/typography'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import type { UrlObject } from 'node:url'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '가맹 문의 - 캔디페이',
  description: '개인사업자, 프리랜서, 대기업, 프랜차이즈 모두 캔디페이에 가맹하고 싶다면 지금 바로 문의하세요.'
}

export default function MerchantPage () {
  return (
    <div className="my-24 flex w-full max-w-screen-desktop flex-col px-6 desktop:px-8">
      <H1 text="가맹 문의" />
      <div className="flex flex-col gap-4">
        <BigButtonPrimary href="/download" desc="개인사업자/프리랜서" title="앱 다운로드" />
        <BigButtonGray href="https://2igx1efz.forms.app/candy-partener-inquiry" desc="대기업/프랜차이즈" title="제휴 문의" />
      </div>
      <hr className="my-32" />
      <H1 text="부가기능" />
      <div id="copy-cert">
        <BigButtonGray href="https://certcopy.candypay.co.kr" desc="공동인증서로 가입하려면" title="공동인증서 복사" />
      </div>
    </div>
  )
}

const BigButtonGray = ({ desc, title, href }: { desc?: string; title: string; href: UrlObject | string }) => (
  <Link
    href={href}
    target="_blank"
    className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-6 text-lg"
  >
    <div className="text-left">
      <p className="font-medium">{desc}</p>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    <ChevronRightIcon className="size-6" />
  </Link>
)

const BigButtonPrimary = ({ desc, title, href }: { desc?: string; title: string; href: UrlObject | string }) => (
  <Link
    href={href}
    target="_blank"
    className="flex w-full items-center justify-between rounded-lg bg-primary-s5 p-6 text-lg text-white"
  >
    <div className="text-left">
      <p className="font-medium">{desc}</p>
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
    <ChevronRightIcon className="size-6" />
  </Link>
)