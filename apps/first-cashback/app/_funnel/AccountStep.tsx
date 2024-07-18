import { Scaffold } from '@/components/Scaffold'
import { AppAction, BackButton } from '@/components/AppAction'
import { Legend } from '@/components/form'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Fieldset,
  Field,
  Label,
  Input,
  Select,
  Button,
  RadioGroup,
  Radio
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Spinner from '@/components/Spinner'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'

export interface FormValues {
  no: string
  bank: string
}

const banks = [
  'NH농협',
  '카카오뱅크',
  'KB국민',
  '토스뱅크',
  '신한',
  '우리',
  'IBK기업',
  '하나',
  '새마을',
  '부산',
  '대구',
  '케이뱅크',
  '신협',
  '우체국',
  'SC제일',
  '경남',
  '광주',
  '수협',
  '전북',
  '저축은행',
  '제주',
  '씨티',
  'KDB산업',
  '산림조합',
  'SBI저축은행'
] as const

export function AccountStep ({
  defaultValues = {},
  next
}: {
  defaultValues?: Partial<FormValues>
  next: (values: FormValues | null) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting }
  } = useForm<FormValues>({
    defaultValues
  })

  const [depositType, setDepositType] = useState<'phone' | 'account'>('phone')

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    if (depositType === 'phone') return next(null)
    return next(values)
  }

  return (
    <Scaffold
      topBar={<AppAction backButton={<BackButton />} />}
      content={
        <main className='p-4'>
          <form id='form' onSubmit={handleSubmit(onSubmit)}>
            <Legend
              content='입금받을 계좌를 알려주세요'
              description='전화번호(토스, 카카오)로 받을 수도 있어요'
            />
            <RadioGroup
              value={depositType}
              name='depositType'
              onChange={setDepositType}
              className='flex flex-col gap-4'
            >
              <Radio
                value='phone'
                className='flex cursor-pointer select-none items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 p-4 text-lg font-semibold text-gray-700 focus:outline-none ui-checked:border-primary-s3 ui-checked:bg-primary-s5/10 ui-checked:text-primary-s5'
              >
                {depositType === 'phone' && (
                  <CheckCircleIcon className='size-6 text-gray-400 ui-checked:text-primary-s5' />
                )}
                전화번호로 받을래요
              </Radio>
              <Radio
                value='account'
                className='flex cursor-pointer select-none items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 p-4 text-lg font-semibold text-gray-700 focus:outline-none ui-checked:border-primary-s3 ui-checked:bg-primary-s5/10 ui-checked:text-primary-s5'
              >
                {depositType === 'account' && (
                  <CheckCircleIcon className='size-6 text-gray-400 ui-checked:text-primary-s5' />
                )}
                계좌로 받을래요
              </Radio>
            </RadioGroup>
            <Fieldset
              as='fieldset'
              disabled={depositType === 'phone'}
              className='mt-9 flex flex-col gap-6 aria-disabled:hidden'
            >
              <Field className='flex flex-col gap-2'>
                <Label className='text-sm text-gray-500'>계좌번호</Label>
                <Input
                  type='tel'
                  minLength={7}
                  required={depositType === 'account'}
                  {...register('no', {
                    required: depositType === 'account',
                    minLength: 7
                  })}
                  defaultValue={defaultValues.no ?? ''}
                  placeholder='계좌번호 입력'
                  className='rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none
                  focus:border-primary-s3 focus:bg-primary-s4/10
                  disabled:opacity-50 disabled:brightness-90'
                />
              </Field>
              <Field className='flex flex-col gap-2'>
                <Label className='text-sm text-gray-500'>은행</Label>
                <div className='relative'>
                  <Select
                    required={depositType === 'account'}
                    {...register('bank', {
                      required: depositType === 'account'
                    })}
                    defaultValue={defaultValues.bank ?? ''}
                    className='block w-full appearance-none rounded-xl border border-gray-200 bg-gray-100 p-3 outline-none
                    focus:border-primary-s3 focus:bg-primary-s4/10
                    disabled:opacity-50 disabled:brightness-90'
                  >
                    <option disabled value=''>
                      은행 선택
                    </option>
                    {banks.map((bank) => (
                      <option key={bank} value={bank}>
                        {bank}
                      </option>
                    ))}
                  </Select>
                  <ChevronDownIcon
                    className='pointer-events-none absolute right-3 top-1/2 -mt-2 size-4 text-gray-500' />
                </div>
              </Field>
            </Fieldset>
          </form>
        </main>
      }
      bottomBar={
        <section id='cta' className='aria-disabled:hidden'>
          <Button
            aria-busy={isSubmitting}
            disabled={!(isValid || depositType === 'phone') || isSubmitting}
            type='submit'
            form='form'
            className='btn-cta clickarea'
          >
            {isSubmitting ? <Spinner stroke='#fff7' /> : '다음'}
          </Button>
        </section>
      }
    />
  )
}
