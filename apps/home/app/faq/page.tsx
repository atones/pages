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
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { H1 } from '@/components/typography'

export default function FaqPage () {
  return (
    <div className="flex w-full max-w-screen-desktop flex-col pt-24">
      <div className="mx-8">
        <H1 text="자주 묻는 질문" />
        <TabGroup className="flex w-full flex-col items-center">
          <TabList className="mb-20 grid w-fit grid-cols-4 gap-4 rounded-md text-lg">
            {['결제', '포인트', '가맹점', '기타'].map((text) =>
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
            <TabPanel className="w-full">
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
            </TabPanel>
            <TabPanel>
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
            </TabPanel>
            <TabPanel>
              <FaqItem question={'dadad'} answer={'fffff'} />
              <FaqItem question={'dadad'} answer={'fffff'} />
            </TabPanel>
            <TabPanel>
              <FaqItem question={'dadad'} answer={'fffff'} />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <Disclosure as="div" className="w-full">
    <DisclosureButton className="group flex w-full items-center justify-between border-b border-gray-200 p-6">
      <span>Q. {convertNewlineToJSX(question)}</span>
      <ChevronDownIcon
        className="size-5 group-data-[open]:rotate-180 group-data-[hover]:fill-gray-900/50"
      />
    </DisclosureButton>
    <DisclosurePanel>{convertNewlineToJSX(answer)}</DisclosurePanel>
  </Disclosure>
)