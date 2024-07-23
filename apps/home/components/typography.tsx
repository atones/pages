import { convertNewlineToJSX } from '@toss/react'

export const H1 = ({ text }: { text: string }) => (
  <h1
    style={{ lineHeight: 1.2 }}
    className="mb-14 text-4xl font-bold text-gray-800"
  >
    {convertNewlineToJSX(text)}
  </h1>
)

export const H2 = ({ text }: { text: string }) => (
  <h2 className="my-12 text-center text-3xl font-semibold text-gray-700">
    {convertNewlineToJSX(text)}
  </h2>
)