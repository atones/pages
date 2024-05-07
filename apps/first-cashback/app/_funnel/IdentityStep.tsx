import { Scaffold } from "@/components/Scaffold";
import { AppAction, BackButton } from "@/components/AppAction";
import { Legend } from "@/components/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { Fieldset, Field, Label, Input, Button } from "@headlessui/react";

export interface FormValues {
  name: string;
  phone: string;
}

export function IdentityStep({
  defaultValues = {},
  next,
}: {
  defaultValues?: Partial<FormValues>;
  next: (values: FormValues) => void;
}) {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues,
  });
  const { isSubmitting, isValidating, isValid } = formState;

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    next(values);
  };

  return (
    <Scaffold
      topBar={<AppAction backButton={<BackButton />} />}
      content={
        <main className="p-4">
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Legend
              content="참여자 정보를 입력해주세요"
              description="캔디페이 회원가입 정보와 같아야 해요"
            />
            <Fieldset className="flex flex-col gap-6">
              <Field className="flex flex-col gap-2">
                <Label className="text-sm text-gray-500">이름</Label>
                <Input
                  type="text"
                  {...register("name", { required: true })}
                  defaultValue={defaultValues.name}
                  placeholder="이름"
                  className="rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none focus:bg-[#E4ECF9]"
                />
              </Field>
              <Field className="flex flex-col gap-2">
                <Label className="text-sm text-gray-500">휴대폰 번호</Label>
                <Input
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern:
                      /^((\+?82)[ -]?)?0?1([0|1|6|7|8|9]{1})[ -]?\d{3,4}[ -]?\d{4}$/,
                  })}
                  defaultValue={defaultValues.phone}
                  placeholder="휴대폰 번호"
                  className="rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none focus:bg-[#E4ECF9]"
                />
              </Field>
            </Fieldset>
          </form>
        </main>
      }
      bottomBar={
        <section id="cta" className="aria-disabled:hidden">
          <Button
            aria-busy={isSubmitting || isValidating}
            disabled={!isValid || isSubmitting || isValidating}
            type="submit"
            form="form"
            className="btn-cta clickarea"
          >
            다음
          </Button>
        </section>
      }
    />
  );
}
