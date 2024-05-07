import { Scaffold } from "@/components/Scaffold";
import { AppAction } from "@/components/AppAction";
import { share } from "@/utils/share";
import { BellAlertIcon } from "@heroicons/react/24/outline";

export function EndStep() {
  return (
    <Scaffold
      topBar={<AppAction />}
      content={
        <main className="flex flex-col p-4">
          <div className="flex grow items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <BellAlertIcon className="text-blue-500 h-32 w-32 text-primary-300" />
              <p className="text-center text-2xl font-semibold">
                분할결제 소식을
                <br />
                공유해주세요!
              </p>
            </div>
          </div>
        </main>
      }
      bottomBar={
        <section id="cta">
          <button
            type="button"
            onClick={() =>
              share({
                title: "카드 나눠 결제하기",
                text: "분할결제로 과소비 없이 실적 채워요. 앱 설치만 하면 사장님, 손님 모두 바로 결제 가능해요.",
                url: (() => {
                  const url = new URL(window.location.href);
                  url.search = "?utm_source=share";
                  return url;
                })(),
              })
            }
            className="btn-cta clickarea"
          >
            공유하기
          </button>
        </section>
      }
    />
  );
}
