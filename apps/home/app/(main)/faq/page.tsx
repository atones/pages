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
import { objectKeys, objectEntries } from '@toss/utils'

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
    }
  ],
  포인트: [],
  사장님: [],
  기타: []
}

export default function FaqPage () {
  return (
    <div className="flex w-full max-w-screen-desktop flex-col pt-24">
      <div className="mx-8">
        <H1 text="자주 묻는 질문" />
        <TabGroup>
          <TabList className="mb-20 grid w-fit grid-cols-4 gap-4 rounded-md text-lg">
            {objectKeys(faqItems).map((text) =>
              <Tab
                key={text}
                className="inline-flex items-center justify-center rounded-md bg-gray-100 px-5 py-2.5 font-semibold text-gray-900 ring-primary-s3
                         focus:outline-none data-[selected]:bg-primary-s5 data-[selected]:text-white data-[selected]:ring-4"
              >
                {text}
              </Tab>
            )}
          </TabList>
          <TabPanels className="w-full">
            {objectEntries(faqItems).map(([category, items]) => (
              <TabPanel key={category} className="flex w-full flex-col gap-6">
                {items.map((item, idx) => <FaqItem key={idx} {...item} />)}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <Disclosure
    as="div" className="w-full rounded-2xl border border-gray-200
  data-[open]:border-primary-s3"
  >
    <DisclosureButton
      className="group flex w-full items-center justify-between p-4 text-xl text-gray-600 data-[open]:bg-primary-s1/50 data-[open]:text-primary-s5"
    >
      <p>
        <span className="mr-6 font-bold text-gray-500 group-data-[open]:text-inherit">Q</span>
        <span className="font-medium">{convertNewlineToJSX(question)}</span>
      </p>
      <ChevronDownIcon
        className="size-5 group-data-[open]:rotate-180"
      />
    </DisclosureButton>
    <DisclosurePanel className="grid grid-cols-[auto_1fr] p-4 text-xl text-gray-600">
      <span className="mr-6 font-bold text-gray-500">A</span>
      {convertNewlineToJSX(answer)}
    </DisclosurePanel>
  </Disclosure>
)