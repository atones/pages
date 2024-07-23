import type { Config } from 'tailwindcss'
import {
  inherit,
  current,
  transparent,
  black,
  white,
  gray,
  red,
  green,
  teal,
  cyan,
  sky,
  blue,
  violet,
  purple,
  fuchsia,
  pink,
  rose
} from 'tailwindcss/colors'
import flowbite from 'flowbite-react/tailwind'
import typography from '@tailwindcss/typography'

const colors = {
  inherit,
  current,
  transparent,
  black,
  white,
  gray,
  red,
  green,
  teal,
  cyan,
  sky,
  blue,
  violet,
  purple,
  fuchsia,
  pink,
  rose
}

const primary = {
  s5: '#ff7720',
  s4: '#ff8d4e',
  s3: '#ffcbae',
  s2: '#ffe0cb',
  s1: '#ffe7d7'
} as const

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content()
  ],
  plugins: [
    typography,
    flowbite.plugin()
  ],
  theme: {
    fontFamily: {
      sans: ['Pretendard', '-apple-system', 'sans-serif'],
      'toss-face': [
        'var(--font-toss-face)',
        'Pretendard',
        '-apple-system',
        'sans-serif'
      ]
    },
    screens: {
      tablet: '640px',
      desktop: '1140px'
    },
    colors: {
      ...colors,
      primary
    }
  }
}
export default config
