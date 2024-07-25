import { convertNewlineToJSX } from '@toss/react'

export const H1 = ({ text }: { text: string }) => (
  <h1
    style={{ lineHeight: 1.2 }}
    className="mb-14 text-3xl font-bold text-gray-800 desktop:text-4xl"
  >
    {convertNewlineToJSX(text)}
  </h1>
)
