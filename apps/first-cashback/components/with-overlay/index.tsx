'use client'
import { ReactElement } from 'react'

export interface OverlayProps {
  isOpen: boolean
  close: () => void
  exit: () => void
}

export const Backdrop = ({ close }: { close: () => void }) => (
  <div
    onClick={close}
    className='fixed inset-0 z-10 m-auto bg-black bg-opacity-50 tablet:max-w-[375px]'
  />
)

interface SheetProps extends OverlayProps {
  className?: string
  handle?: boolean
  content?: ReactElement
  cta?: ReactElement
}

export const Sheet = ({
  className,
  handle,
  content,
  cta,
  isOpen,
  close
}: SheetProps) => (
  <>
    {isOpen && <Backdrop close={close} />}
    {isOpen && (
      <div
        className={`fixed inset-x-0 bottom-0 z-10 m-auto rounded-t-2xl bg-white shadow-lg tablet:max-w-[375px] ${className}`}
      >
        {handle && (
          <div className='flex items-center justify-center p-2'>
            <button
              type='button'
              className='h-1.5 w-1/4 rounded-full bg-gray-400'
              onTouchStart={close}
              onClick={close}
            />
          </div>
        )}
        {content}
        <section className='cta'>{cta}</section>
      </div>
    )}
  </>
)
