import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react'
import { convertNewlineToJSX } from '@toss/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { H1 } from '@/components/typography'
import { objectEntries, objectKeys } from '@toss/utils'
import { getStaticParams } from '@/locales/server'
import { setStaticParamsLocale } from 'next-international/server'

const faqItems = {
  결제: [
    {
      question: '한 번에 몇 장까지 카드 나눠 결제할 수 있나요?',
      answer: '캔디페이의 분할결제는 회원이 소유한 카드의 수만큼, 100원 단위까지 분할하여 결제할 수 있습니다.\n예를 들어 4장의 카드를 보유하고 있을 경우, 3,300원씩 3장의 카드, 100원 1장의 카드로도 결제가 가능합니다.'
    },
    {
      question: '카드 나눠 결제 도중 한도초과 등 카드 하나에 문제가 발생하면 나머지 카드의 결제는 어떻게 되나요?',
      answer: '단 한장의 카드라도 결제 오류 발생시, 기존 결제시도를 모두 실패 처리합니다.\n해당 카드는 제외한 결제수단 조합으로 다시 결제를 시도해주세요.'
    },
    {
      question: '온라인 결제도 가능한가요?',
      answer: '캔디페이는 사업자번호가 있는 누구나 결제 수락용 계정을 만들 수 있습니다.\n' +
        '온라인 매장의 경우, 해당 매장이 캔디페이 가입 후 연동 개발을 해주어야 합니다.'
    },
    {
      question: '비대면 결제는 뭔가요?',
      answer: '사장님이 손님에게 결제를 비대면으로 요청할 수 있는 서비스입니다.\n' +
        '수락만 누르면 QR 등 귀찮은 과정 없이 결제가 완료돼요.\n' +
        '아이 학원비 결제, 변호사/디자이너 등 프리랜서와의 계약 거래 등에 사용해보세요.'
    },
    {
      question: '결제 취소는 어떻게 하나요?',
      answer: ''
    },
    {
      question: '영수증 확인은 어떻게 할 수 있나요?',
      answer: ''
    }
  ],
  포인트: [
    {
      question: '포인트는 어떻게 적립할 수 있나요?',
      answer: ''
    },
    {
      question: '결제금액에 따른 포인트 적립은 없나요?',
      answer: ''
    },
    {
      question: '어떻게 사용할 수 있나요?',
      answer: ''
    }
  ],
  사장님: [
    {
      question: '캔디페이 가맹점이 되고싶어요',
      answer: ''
    },
    {
      question: '가맹 수수료는 얼마인가요?',
      answer: '캔디페이는 업계 표준 정도의 수수료(약 2.5%, VAT 별도)를 받고 있어요.\n' +
        '대신 메뉴판결제(키오스크) 및 다양한 기능을 무료로 제공해드려요'
    },
    {
      question: '정산주기는 며칠인가요?',
      answer: ''
    },
    {
      question: '향후 어떤 서비스를 추가로 제공받을 수 있을까요?',
      answer: '메뉴판결제(키오스크) 외에도 선불충전, 예약관리 등의 기능을 수수료 없이 제공해드릴 예정이에요.'
    }
  ],
  기타: [
    {
      question: '캔디페이가 재테크에 도움이 되나요?',
      answer: '네, 물론이에요.\n근로소득자의 경우 소득의 일정 수준 이상을 신용카드 등으로 사용하셔야 절세 효과를 누리실 수 있어요.'
    }
  ]
}

export function generateStaticParams () {
  return getStaticParams()
}

export default async function FaqPage ({ params: { locale } }: { params: { locale: string } }) {
  setStaticParamsLocale(locale)

  return (
    <div className="my-24 flex w-full max-w-screen-desktop flex-col px-6 desktop:px-8">
      <H1 text="자주 묻는 질문" />
      <TabGroup>
        <TabList className="mb-20 grid w-fit grid-cols-2 gap-4 rounded-md desktop:grid-cols-4 desktop:text-lg">
          {objectKeys(faqItems).map((text) =>
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
        <TabPanels className="w-full">
          {objectEntries(faqItems).map(([category, items]) => (
            <TabPanel key={category} className="flex w-full flex-col gap-4 desktop:gap-6">
              {items.map((item, idx) => <FaqItem key={idx} {...item} />)}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  )
}

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <Disclosure
    as="div"
    className="w-full rounded-xl border-none border-gray-200 data-[open]:border-primary-s3 desktop:border desktop:text-xl"
  >
    <DisclosureButton
      className="group flex w-full items-center justify-between rounded-xl p-1 text-left text-gray-600
      data-[open]:bg-primary-s1/50 data-[open]:text-primary-s5
      desktop:rounded-none desktop:p-4 desktop:text-xl"
    >
      <p className="grid grid-cols-[auto_1fr] gap-3 desktop:gap-6">
        <span className="font-bold text-gray-500 group-data-[open]:text-inherit">Q</span>
        <span className="font-medium">{convertNewlineToJSX(question)}</span>
      </p>
      <ChevronDownIcon
        className="hidden size-5 group-data-[open]:rotate-180 desktop:block"
      />
    </DisclosureButton>
    <DisclosurePanel className="grid grid-cols-[auto_1fr] gap-3 p-1 text-gray-600 desktop:gap-6 desktop:p-4">
      <span className="font-bold text-gray-500">A</span>
      {convertNewlineToJSX(answer)}
    </DisclosurePanel>
  </Disclosure>
)
