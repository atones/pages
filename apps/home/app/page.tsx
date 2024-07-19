import Link from 'next/link'
import { CustomFlowbiteTheme, Navbar, NavbarBrand } from 'flowbite-react'
import Image from 'next/image'
import { convertNewlineToJSX } from '@toss/react'

const navbarTheme: CustomFlowbiteTheme['navbar'] = {
  link: {
    active: {
      on: 'text-gray-900'
    }
  }
}

export default function MyPage () {
  return (
    <>
      <div className="sticky bg-white flex flex-col items-center top-0 w-full px-8 border-b border-gray-200 z-50">
        <Navbar
          theme={navbarTheme}
          fluid
          className="w-full max-w-screen-desktop"
        >
          <NavbarBrand as={Link} href="https://candypay.co.kr">
            <img src="/logo.svg" className="mr-3 h-6 sm:h-9" alt="Candypay Logo" />
          </NavbarBrand>
          <div className="flex items-center gap-4">
            <Link className="p-4 hover:bg-gray-100 rounded-lg text-gray-600" href="#about">소개</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-lg text-gray-600" href="#merchant">가맹점</Link>
            <Link className="p-4 hover:bg-gray-100 rounded-lg text-gray-600" href="#">FAQ</Link>
            <div className="ml-8 flex gap-4">
              <Link aria-selected href="#" className="text-gray-400 aria-selected:text-gray-800">KOR</Link>
              <span className="text-gray-400">|</span>
              <Link href="#" className="text-gray-400 aria-selected:text-gray-800">ENG</Link>
            </div>
          </div>
        </Navbar>
      </div>
      <section style={{ height: '95vh' }} className="flex flex-col items-center">
        <h1
          style={{ lineHeight: 1.2, paddingTop: '8vh' }}
          className="select-none tablet:text-5xl desktop:text-6xl text-gray-800 font-bold text-center"
        >
          잠든 카드를
          <br />
          깨울 시간
        </h1>
        <div className="select-none text-gray-400 text-xl pt-5 pb-7 font-medium">
          캔디페이와 함께하는 똑똑한 결제의 시작
        </div>
        <button
          className="bg-primary-s5 outline outline-0 hover:outline-4 outline-primary-s3 text-white py-3 px-6 rounded-lg font-bold"
        >
          캔디페이 다운로드
        </button>
        <Image unoptimized src="/cards.png" alt="cards" width={720} height={720} />
      </section>
      <div className="max-w-screen-desktop w-full">
        <div id="about" className="flex flex-col gap-12 py-40">
          <span className="grid grid-cols-2 gap-4 w-fit rounded-md text-lg">
            <button
              type="button"
              aria-selected={true}
              className="relative inline-flex items-center justify-center rounded-md px-5 py-2.5 font-semibold
              bg-gray-100 text-gray-900
              aria-selected:bg-primary-s5 aria-selected:text-white aria-selected:ring-4 ring-primary-s3"
            >
            손님
            </button>
            <button
              type="button"
              aria-selected={false}
              className="relative inline-flex items-center justify-center rounded-md px-5 py-2.5 font-semibold
              text-gray-900 bg-gray-100"
            >
            사장님
            </button>
          </span>
          <ShowcaseLight text="원하는 실적만큼만\n카드 나눠 결제" />
          <ShowcaseLight text="친구와 함께\n더치페이도 쉽게" />
          <ShowcaseLight text="학원비도 집안에서\n원격 결제" />
        </div>
      </div>
      <div id="merchant" className="flex flex-col items-center w-full bg-primary-s5 p-12">
        <div className="flex flex-col w-full max-w-screen-desktop">
          <h2 className="font-semibold text-3xl text-white text-center my-12">캔디페이와 함께하는 가맹점 20+</h2>
          <div className="flex justify-between py-12 w-full marquee">
            <div className="size-40 rounded-full bg-white" />
            <div className="size-40 rounded-full bg-white" />
            <div className="size-40 rounded-full bg-white" />
            <div className="size-40 rounded-full bg-white" />
            <div className="size-40 rounded-full bg-white" />
          </div>
          <section className="flex grow mt-12">
            <div className="grow">
              <h2
                style={{ lineHeight: 1.2 }}
                className="desktop:text-4xl text-white font-semibold text-left"
              >
                앱만 설치하면
                <br />
                즉시 도입
              </h2>
            </div>
            <div className="bg-white rounded-3xl" style={{ width: 500, height: 500 }}>
            </div>
          </section>
        </div>
        <pre>마땅한 가맹점이 없는데 이 섹션이 필요한가? 일반인들이 목란을 알아볼까? 다른 섹션으로 마련하는게 좋지 않을까?</pre>
      </div>
      <div id="faq" className="flex flex-col items-center w-full p-12">
        <div className="w-full max-w-screen-desktop">
          <h2 className="font-semibold text-3xl text-gray-700 text-center my-12">FAQ</h2>
        </div>
      </div>
      <div>
        중소기업벤처부, 구글창구, 서울대기술지주, 한국핀테크지원센터 (로고 4개 얇은 높이로 집어넣기
      </div>
      <div style={{ height: '50vh' }}>
        {/*dummy*/}
      </div>
      <footer className="bg-gray-700 text-gray-400 w-full">
        footer
      </footer>
    </>
  )
}

const ShowcaseLight = ({ text }: { text: string }) => (
  <section className="flex">
    <div className="grow">
      <h2
        style={{ lineHeight: 1.2 }}
        className="desktop:text-4xl text-gray-800 font-semibold text-left"
      >
        {convertNewlineToJSX(text)}
      </h2>
    </div>
    <div className="bg-gray-200 rounded-3xl" style={{ width: 500, height: 500 }}>
    </div>
  </section>
)