import Image from 'next/image'
import { convertNewlineToJSX } from '@toss/react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { setStaticParamsLocale } from 'next-international/server'
import { getScopedI18n, getStaticParams } from '@/locales/server'
import Link from 'next/link'

const toJSX = convertNewlineToJSX

export function generateStaticParams () {
  return getStaticParams()
}

export default async function MyPage ({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)

  const t = await getScopedI18n('home')
  const w = await getScopedI18n('w')

  return (
    <>
      <section style={{ height: '95vh' }} className="flex flex-col items-center">
        <H1 text={t('title')} />
        <div className="pb-7 pt-5 font-medium text-gray-400 desktop:text-xl">
          {t('subtitle')}
        </div>
        <Link
          href="/download"
          target="_blank"
          className="rounded-lg bg-primary-s5 px-6 py-3 font-bold text-white outline outline-0 outline-primary-s3 hover:outline-4"
        >
          {t('download')}
        </Link>
        <Image unoptimized src="/cards.png" alt="cards" width={720} height={720} />
      </section>
      <section
        className="hidden w-full max-w-screen-desktop flex-col items-center gap-5 px-6 py-9
        desktop:flex desktop:gap-8 desktop:px-8 desktop:py-12"
      >
        <div className="w-full max-w-screen-desktop rounded-3xl bg-gray-100 p-6 text-gray-700 desktop:p-12">
          <h2 className="mb-3 text-xl font-semibold desktop:mb-6 desktop:text-3xl">
            {toJSX(t('appeal.credit-card.title'))}
          </h2>
          <p style={{ lineHeight: 1.4 }} className="text-sm desktop:text-2xl">
            {toJSX(t('appeal.credit-card.content'))}
          </p>
        </div>
        <div className="w-full max-w-screen-desktop rounded-3xl bg-primary-s5 p-6 text-white desktop:p-12">
          <h2 className="mb-3 text-xl font-semibold desktop:mb-6 desktop:text-3xl">
            {toJSX(t('appeal.candypay.title'))}
          </h2>
          <p style={{ lineHeight: 1.4 }} className="text-sm desktop:text-2xl">
            {toJSX(t('appeal.candypay.content'))}
          </p>
        </div>
      </section>
      <section
        className="flex w-full max-w-screen-desktop flex-col items-center gap-5 px-6 py-9
        desktop:gap-8 desktop:px-8 desktop:py-12"
      >
        <TabGroup id="about" className="w-full py-40">
          <TabList className="mb-8 grid w-fit grid-cols-2 gap-4 rounded-md text-sm desktop:mb-20 desktop:text-lg">
            {[w('customer'), w('merchant')].map((text) =>
              <Tab
                key={text}
                style={{ paddingInline: '1em', paddingBlock: '0.5em' }}
                className="inline-flex items-center justify-center rounded-md bg-gray-100 font-semibold text-gray-900 ring-primary-s3
                         focus:outline-none data-[selected]:bg-primary-s5 data-[selected]:text-white data-[selected]:ring-4"
              >
                {text}
              </Tab>
            )}
          </TabList>
          <TabPanels>
            <TabPanel className="flex flex-col gap-12">
              <ShowcaseGray title={t('func.customer.split.title')} desc={t('func.customer.split.desc')} />
              <ShowcaseGray title={t('func.customer.dutch.title')} desc={t('func.customer.dutch.desc')} />
              <ShowcaseGray title={t('func.customer.remote.title')} desc={t('func.customer.remote.desc')} />
            </TabPanel>
            <TabPanel className="flex flex-col gap-12">
              <ShowcaseGray title={t('func.merchant.split.title')} desc={t('func.merchant.split.desc')} />
              <ShowcaseGray title={t('func.merchant.remote.title')} desc={t('func.merchant.remote.desc')} />
              <ShowcaseGray title={t('func.merchant.kiosk.title')} desc={t('func.merchant.kiosk.desc')} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
      <section
        id="merchant"
        className="flex w-full flex-col items-center gap-5 bg-primary-s5 "
      >
        <div
          className="w-full max-w-screen-desktop px-6 py-9 desktop:gap-8 desktop:px-8 desktop:py-12"
        >
          <ShowcasePrimary
            title={t('func.pos.title')}
            desc={t('func.pos.desc')}
          />
        </div>
      </section>
      <Sponsors />
    </>
  )
}

const H1 = ({ text }: { text: string }) => (
  <h1
    style={{ lineHeight: 1.2, paddingTop: '8vh', fontSize: 'min(60px, 10vw)' }}
    className="text-center font-bold text-gray-800"
  >
    {convertNewlineToJSX(text)}
  </h1>
)

const Sponsors = () => (
  <section id="sponsors" className="flex w-full flex-col items-center p-6 desktop:px-8">
    <div className="grid grid-cols-2 grid-rows-2 items-center justify-between desktop:flex">
      <Image src="/중소벤처기업부.svg" alt="중소벤처기업부" unoptimized width={240} height={240} />
      <Image src="/구글창구.webp" alt="구글창구" unoptimized width={240} height={240} />
      <Image src="/서울대기술지주.jpg" alt="서울대기술지주" unoptimized width={240} height={240} />
      <Image src="/한국핀테크지원센터.png" alt="한국핀테크지원센터" unoptimized width={240} height={240} />
    </div>
    <p className="text-gray-400 font-medium">
      캔디페이는 중소기업벤처부, Google Play 창구, 서울대 기술지주회사, 한국핀테크지원센터와 함께합니다.
    </p>
  </section>
)

const ShowcaseGray = ({ title, desc }: { title: string, desc: string }) => (
  <article className="grid grid-cols-1 grid-rows-[1fr_auto] desktop:grid-cols-[1fr_auto] desktop:gap-12">
    <div className="mb-6 desktop:m-0">
      <h2
        className="mb-6 text-left text-2xl font-semibold desktop:text-4xl"
      >
        {convertNewlineToJSX(title)}
      </h2>
      <span
        style={{ lineHeight: 1.5 }}
        className="desktop:text-2xl"
      >
        {convertNewlineToJSX(desc)}
      </span>
    </div>
    <figure
      className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-gray-200 desktop:w-[420px]"
    >
      1:1
    </figure>
  </article>
)

const ShowcasePrimary = ({ title, desc }: { title: string, desc: string }) => (
  <section className="grid grid-cols-1 grid-rows-[1fr_auto] text-white desktop:grid-cols-[1fr_auto] desktop:gap-12">
    <div className="mb-6 desktop:m-0">
      <h2
        className="mb-6 text-left text-2xl font-semibold desktop:text-4xl"
      >
        {convertNewlineToJSX(title)}
      </h2>
      <p
        style={{ lineHeight: 1.5 }}
        className="desktop:text-2xl"
      >
        {convertNewlineToJSX(desc)}
      </p>
    </div>
    <figure
      className="flex aspect-square flex-col items-center justify-center rounded-3xl border border-white desktop:w-[420px]"
    >
      1:1 폰을 쥔 손 또는 행복한 자영업자
    </figure>
  </section>
)
