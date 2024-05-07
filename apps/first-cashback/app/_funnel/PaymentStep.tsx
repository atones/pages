import { Scaffold } from "@/components/Scaffold";
import { AppAction } from "@/components/AppAction";
import { share } from "@/utils/share";
import { Pulse } from "@/components/Spinner";
import { convertNewlineToJSX } from "@/utils/convertNewlineToJSX";

export function PaymentStep({ next }: { next: () => void }) {
  return (
    <Scaffold
      topBar={<AppAction />}
      content={
        <main className="flex flex-col p-4">
          <div className="flex grow items-center justify-center">
            <div className="flex flex-col items-center">
              <Pulse className="mb-16 scale-[400%] fill-primary-s3" />
              <p className="text-center text-2xl font-semibold">
                {convertNewlineToJSX("알림이 오면\n100원을 결제해주세요")}
              </p>
              <p>꼭! 카드 나눠 결제해주세요</p>
            </div>
          </div>
        </main>
      }
      bottomBar={
        <section id="cta">
          <button
            type="button"
            onClick={
              () => next()
              // share({
              //   title: "카드 나눠 결제하기",
              //   text: "분할결제로 과소비 없이 실적 채워요. 앱 설치만 하면 사장님, 손님 모두 바로 결제 가능해요.",
              //   url: (() => {
              //     const url = new URL(window.location.href);
              //     url.search = "?utm_source=share";
              //     return url;
              //   })(),
              // })
            }
            className="btn-cta clickarea"
          >
            카드 나눠 결제했어요
          </button>
        </section>
      }
    />
  );
}
