import { Scaffold } from "@/components/Scaffold";
import { AppAction, BackButton } from "@/components/AppAction";
import { Legend } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Fieldset,
  Field,
  Label,
  Input,
  Select,
  Button,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Spinner from "@/components/Spinner";

export interface FormValues {
  no: string;
  bank: string;
}

const banks = [
  "NH농협",
  "카카오뱅크",
  "KB국민",
  "토스뱅크",
  "신한",
  "우리",
  "IBK기업",
  "하나",
  "새마을",
  "부산",
  "대구",
  "케이뱅크",
  "신협",
  "우체국",
  "SC제일",
  "경남",
  "광주",
  "수협",
  "전북",
  "저축은행",
  "제주",
  "씨티",
  "KDB산업",
  "산림조합",
  "SBI저축은행",
] as const;

export function AccountStep({
  defaultValues = {},
  next,
}: {
  defaultValues?: Partial<FormValues>;
  next: (values: FormValues) => void;
}) {
  const {
    register,
    handleSubmit,
    control: _,
    formState: { isValidating, isValid, submitCount },
  } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    next(values);
  };

  return (
    <Scaffold
      topBar={<AppAction backButton={<BackButton />} />}
      content={
        <main className="p-4">
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Legend content="입금받을 계좌를 알려주세요" />
            <Fieldset className="flex flex-col gap-6">
              <Field className="flex flex-col gap-2">
                <Label className="text-sm text-gray-500">계좌번호</Label>
                <Input
                  type="tel"
                  minLength={7}
                  {...register("no", { required: true, minLength: 7 })}
                  defaultValue={defaultValues.no}
                  placeholder="계좌번호 입력"
                  className="rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none focus:border-primary-s3 focus:bg-primary-s4/10"
                />
              </Field>
              <Field className="flex flex-col gap-2">
                <Label className="text-sm text-gray-500">은행</Label>
                <div className="relative">
                  <Select
                    {...register("bank", { required: true })}
                    defaultValue={defaultValues.bank ?? ""}
                    className="block w-full appearance-none rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none focus:border-primary-s3 focus:bg-primary-s4/10"
                  >
                    <option disabled value="">
                      은행 선택
                    </option>
                    {banks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </Select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-1/2 -mt-2 size-4 text-gray-500"
                    // aria-hidden="true"
                  />
                </div>
              </Field>
            </Fieldset>
          </form>
        </main>
      }
      bottomBar={
        <section id="cta" className="aria-disabled:hidden">
          <Button
            aria-busy={isValidating || Boolean(submitCount)}
            disabled={!isValid || Boolean(submitCount) || isValidating}
            type="submit"
            form="form"
            className="btn-cta clickarea"
          >
            {submitCount ? <Spinner stroke="#fff7" /> : "다음"}
          </Button>
        </section>
      }
    />
  );
}
