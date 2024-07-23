import Image from 'next/image'
import { convertNewlineToJSX } from '@toss/react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

export default function MyPage () {
  return (
    <>
      <section style={{ height: '95vh' }} className="flex flex-col items-center">
        <H1 text="잠든 카드를\n깨울 시간" />
        <div className="pb-7 pt-5 text-xl font-medium text-gray-400">
          캔디페이와 함께하는 똑똑한 결제의 시작
        </div>
        <button
          className="rounded-lg bg-primary-s5 px-6 py-3 font-bold text-white outline outline-0 outline-primary-s3 hover:outline-4"
        >
          캔디페이 다운로드
        </button>
        <Image unoptimized src="/cards.png" alt="cards" width={720} height={720} />
      </section>
      <section className="flex w-full flex-col items-center bg-gray-100 px-12 py-24">
        <div className="w-full max-w-screen-desktop">
          <pre style={{ height: 500 }}>왜 신용카드로는 간편결제가 안 될까요?</pre>
        </div>
      </section>
      <section className="w-full max-w-screen-desktop">
        <TabGroup id="about" className="py-40">
          <TabList className="mb-20 grid w-fit grid-cols-2 gap-4 rounded-md text-lg">
            {['손님', '사장님'].map((text) =>
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
              <ShowcaseLight title="원하는 실적만큼만\n카드 나눠 결제" />
              <ShowcaseLight title="친구와 함께\n더치페이도 쉽게" />
              <ShowcaseLight title="학원비도 집안에서\n원격 결제" />
            </TabPanel>
            <TabPanel className="flex flex-col gap-12">
              <ShowcaseLight title="기다림 없는\n1초만에 분할결제" />
              <ShowcaseLight title="원격 결제로\n노쇼 문제 없이" />
              <ShowcaseLight
                title="키오스크 없이\n메뉴판 결제" desc="한 대에 400만원, 설치하기 부담되시죠?\n캔디와 함께 평생 무료로 메뉴판 결제 받으세요"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
      <section id="merchant" className="flex w-full flex-col items-center bg-primary-s5 px-12 py-24">
        <div className="flex w-full max-w-screen-desktop flex-col">
          <ShowcaseDark
            title="모두를 위한\n내 손 안의 포스기"
            desc="프리랜서, 사장님 상관 없이 캔디페이로 카드결제를 지원하세요. 친구와 더치페이할 때도 카드 써서 생활비 아낄 수 있어요."
          />
        </div>
      </section>
      <section className="flex w-full flex-col items-center p-12">
        <div className="w-full max-w-screen-desktop">
          <H2 text="도입 문의" />
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

const H2 = ({ text }: { text: string }) => (
  <h2 className="my-12 text-center text-3xl font-semibold text-gray-700">
    {convertNewlineToJSX(text)}
  </h2>
)

const Sponsors = () => (
  <div className="flex w-full flex-col items-center p-12">
    <div className="flex items-center justify-between gap-12 ">
      <Image src="/중소벤처기업부.svg" alt="중소벤처기업부" unoptimized width={240} height={240} />
      <Image src="/구글창구.webp" alt="구글창구" unoptimized width={240} height={240} />
      <Image src="/서울대기술지주.jpg" alt="서울대기술지주" unoptimized width={240} height={240} />
      <Image src="/한국핀테크지원센터.png" alt="한국핀테크지원센터" unoptimized width={240} height={240} />
    </div>
  </div>
)

const ShowcaseLight = ({
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

const ShowcaseDark = ({
  title,
  desc = '없은 구들장도 나를 생일이나 잡습니다. 말한 알며 우리의 나이게 권하여 특히 모두에 알아요. 와중까지 때문 그만 등 나가 있으면 던지는 찾다.'
}: { title: string, desc?: string }) => (
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
      className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-white" style={{ width: 500 }}
    >
      500x500
    </div>
  </section>
)
