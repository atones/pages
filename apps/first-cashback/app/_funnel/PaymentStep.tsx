import { Scaffold } from '@/components/Scaffold'
import { AppAction } from '@/components/AppAction'
import { Pulse } from '@/components/Spinner'
import { convertNewlineToJSX } from '@/utils/convertNewlineToJSX'

export function PaymentStep ({ next }: { next: () => void }) {
  return (
    <Scaffold
      topBar={<AppAction/>}
      content={
        <main className="flex flex-col p-4">
          <div className="flex grow items-center justify-center">
            <div className="flex flex-col items-center">
              <Pulse className="mb-16 scale-[400%] fill-primary-s3"/>
              <p className="text-center text-2xl font-semibold">
                {convertNewlineToJSX('알림이 오면\n100원을 결제해주세요')}
              </p>
              <p>꼭! 카드 나눠 결제해주세요</p>
            </div>
          </div>
        </main>
      }
      bottomBar={
        <section id="cta">
          <button type="button" onClick={next} className="btn-cta clickarea">
            카드 나눠 결제했어요
          </button>
        </section>
      }
    />
  )
}
