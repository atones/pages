import { Scaffold } from '@/components/Scaffold'
import { AppAction } from '@/components/AppAction'
import { share } from '@/utils/share'
import { convertNewlineToJSX } from '@/utils/convertNewlineToJSX'
import ClappingHands from '../../clapping-hands.png'
import Image from 'next/image'

export function EndStep () {
  return (
    <Scaffold
      topBar={<AppAction />}
      content={
        <main className="flex flex-col p-4">
          <div className="flex grow items-center justify-center">
            <div className="flex flex-col items-center leading-tight">
              <Image
                alt="success"
                src={ClappingHands}
                width={128}
                height={128}
                unoptimized
                className="mb-12"
              />
              <p className="mb-8 text-center text-2xl font-semibold">
                {convertNewlineToJSX('축하해요!')}
              </p>
              <p className="mb-8 text-center">
                {convertNewlineToJSX(
                  '앞으로도 자유롭게\n카드 나눠 결제해보세요'
                )}
              </p>
              <p className="text-center text-gray-500">
                {convertNewlineToJSX(
                  '적어주신 계좌 정보로\n24시간 이내 입금해드려요'
                )}
              </p>
            </div>
          </div>
        </main>
      }
      bottomBar={
        <section id="cta">
          <button
            type="button"
            onClick={async () =>
              await share({
                title: '100원 결제하고 1,000원 받기',
                text: '분할결제 서비스가 출시됐어요. 100원 결제하고 1,000원 받아보세요. 앱 설치만 하면 사장님, 손님 모두 바로 결제 가능해요.',
                url: (() => {
                  const url = new URL(window.location.href)
                  url.search = '?utm_source=share'
                  return url
                })()
              })}
            className="btn-cta clickarea"
          >
            친구에게 공유하기
          </button>
        </section>
      }
    />
  )
}
