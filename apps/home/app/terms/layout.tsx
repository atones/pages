import type { PropsWithChildren } from 'react'

export default function TermsLayout ({ children }: PropsWithChildren) {
  return (
    <main
      style={{ minHeight: '100vh' }}
      className="prose prose-base mx-auto w-full max-w-screen-desktop bg-white p-4"
    >
      {children}
    </main>
  )
}