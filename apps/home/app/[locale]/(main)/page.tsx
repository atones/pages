import Image from 'next/image'
import { convertNewlineToJSX } from '@toss/react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { setStaticParamsLocale } from 'next-international/server'
import { getScopedI18n, getStaticParams } from '@/locales/server'

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
        <div className="pb-7 pt-5 text-xl font-medium text-gray-400">
          {t('subtitle')}
        </div>
        <button
          className="rounded-lg bg-primary-s5 px-6 py-3 font-bold text-white outline outline-0 outline-primary-s3 hover:outline-4"
        >
          {t('download')}
        </button>
        <Image unoptimized src="/cards.png" alt="cards" width={720} height={720} />
      </section>
      <section className="flex w-full flex-col items-center gap-8 py-12">
        <div
          className="flex w-full max-w-screen-desktop items-stretch justify-between rounded-3xl bg-gray-100 text-gray-700"
        >
          <div className="p-12">
            <h2 className="mb-12 text-3xl font-semibold">
              {toJSX(t('appeal.legacy-pay.title'))}
            </h2>
            <p style={{ lineHeight: 1.4 }} className="text-2xl">
              {toJSX(t('appeal.legacy-pay.content'))}
            </p>
          </div>
          <div
            className="flex aspect-video shrink-0 flex-col items-center justify-center rounded-3xl bg-white/10"
          >
            선불 충전을 유도하는 앱 화면 16:9
          </div>
        </div>
        <div
          className="flex w-full max-w-screen-desktop items-stretch justify-between rounded-3xl bg-gray-600 text-white"
        >
          <div className="p-12">
            <h2 className="mb-12 text-3xl font-semibold">
              {toJSX(t('appeal.credit-card.title'))}
            </h2>
            <p style={{ lineHeight: 1.4 }} className="text-2xl">
              {toJSX(t('appeal.credit-card.content'))}
            </p>
          </div>
          <div
            className="flex aspect-video shrink-0 flex-col items-center justify-center rounded-3xl bg-white/10"
          >
            카드사 경쟁 16:9
          </div>
        </div>
        <div
          className="flex w-full max-w-screen-desktop items-stretch justify-between rounded-3xl bg-primary-s5 text-white"
        >
          <div className="p-12">
            <h2 className="mb-12 text-3xl font-semibold">
              {toJSX(t('appeal.candypay.title'))}
            </h2>
            <p style={{ lineHeight: 1.4 }} className="text-2xl">
              {toJSX(t('appeal.candypay.content'))}
            </p>
          </div>
          <div
            className="flex aspect-video shrink-0 flex-col items-center justify-center rounded-3xl bg-white/10"
          >
            원격 비대면 결제 16:9
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-desktop">
        <TabGroup id="about" className="py-40">
          <TabList className="mb-20 grid w-fit grid-cols-2 gap-4 rounded-md text-lg">
            {[w('customer'), w('merchant')].map((text) =>
              <Tab
                key={text}
                className="inline-flex items-center justify-center rounded-md bg-gray-100 px-5 py-2.5 font-semibold text-gray-900 ring-primary-s3
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
      <section id="merchant" className="flex w-full flex-col items-center bg-primary-s5 px-12 py-20">
        <div className="w-full max-w-screen-desktop">
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
  <section id="sponsors" className="flex w-full flex-col items-center p-12">
    <div className="flex items-center justify-between gap-12 ">
      <Image src="/중소벤처기업부.svg" alt="중소벤처기업부" unoptimized width={240} height={240} />
      <Image src="/구글창구.webp" alt="구글창구" unoptimized width={240} height={240} />
      <Image src="/서울대기술지주.jpg" alt="서울대기술지주" unoptimized width={240} height={240} />
      <Image src="/한국핀테크지원센터.png" alt="한국핀테크지원센터" unoptimized width={240} height={240} />
    </div>
  </section>
)

const ShowcaseGray = ({
  title,
  desc = '없은 구들장도 나를 생일이나 잡습니다. 말한 알며 우리의 나이게 권하여 특히 모두에 알아요. 와중까지 때문 그만 등 나가 있으면 던지는 찾다.'
}: { title: string, desc?: string }) => (
  <article className="grid grid-cols-[1fr_auto] gap-24">
    <div>
      <h2
        style={{ lineHeight: 1.2 }}
        className="mb-6 text-left text-4xl font-semibold text-gray-800"
      >
        {convertNewlineToJSX(title)}
      </h2>
      <span
        style={{ lineHeight: 1.5 }}
        className="text-2xl text-gray-700"
      >
        {convertNewlineToJSX(desc)}
      </span>
    </div>
    <div
      className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-gray-200" style={{ width: 500 }}
    >
      500x500
    </div>
  </article>
)

const ShowcasePrimary = ({ title, desc }: { title: string, desc?: string }) => (
  <section className="grid grid-cols-[1fr_auto] gap-24">
    <div>
      <h2
        style={{ lineHeight: 1.2 }}
        className="mb-6 text-left text-4xl font-semibold text-white"
      >
        {convertNewlineToJSX(title)}
      </h2>
      <p
        style={{ lineHeight: 1.5 }}
        className="text-2xl text-white"
      >
        {convertNewlineToJSX(desc)}
      </p>
    </div>
    <div
      className="flex aspect-square flex-col items-center justify-center rounded-3xl border border-white text-white"
      style={{ width: 500 }}
    >
      1:1 폰을 쥔 손 또는 행복한 자영업자
    </div>
  </section>
)
