'use client'
import { Scaffold } from '@/components/Scaffold'
import { AppAction, BackButton } from '@/components/AppAction'
import { Legend } from '@/components/form'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import appleIcon from '../apple-icon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { Checkbox } from '@headlessui/react'

export function InstallationStep ({ defaultValue, next }: {
  defaultValue: boolean
  next: (installed: boolean) => void
}) {
  const [installed, setInstalled] = useState(defaultValue)

  return (
    <Scaffold
      topBar={<AppAction backButton={<BackButton />} />}
      content={
        <main className='flex flex-col p-5'>
          <div className='flex flex-col gap-10'>
            <Legend
              content='캔디페이 설치하셨나요?'
              description='분할결제할 카드 등록도 잊지 마세요.'
              icon={
                <Image
                  unoptimized
                  src={appleIcon}
                  alt='app'
                  width={64}
                  height={64}
                />
              }
            />
            <div className='flex flex-col gap-4'>
              <Checkbox
                checked={installed}
                onChange={setInstalled}
                className='flex cursor-pointer select-none items-center gap-2 rounded-lg border border-gray-200 bg-gray-100 p-4 text-lg font-semibold text-gray-700 focus:outline-none ui-checked:border-primary-s3 ui-checked:bg-primary-s5/10 ui-checked:text-primary-s5'
              >
                <CheckIcon className='size-6 text-gray-400 ui-checked:text-primary-s5' />
                설치했어요
              </Checkbox>
              <Link
                className='clickarea flex cursor-pointer items-center gap-4 rounded-lg p-4 font-semibold text-gray-700 focus:outline-none'
                href='https://atones.github.io/candyPay-link'
                target='_blank' rel='noreferrer'
              >
                아니요, 설치할게요
                <ChevronRightIcon className='ml-auto h-6 w-6 text-gray-400' />
              </Link>
            </div>
          </div>
        </main>
      }
      bottomBar={
        <section
          aria-disabled={!installed}
          id='cta'
          className='aria-disabled:hidden'
        >
          <button
            disabled={!installed}
            type='button'
            onClick={() => next(installed)}
            className='btn-cta clickarea'
          >
            다음
          </button>
        </section>
      }
    />
  )
}
