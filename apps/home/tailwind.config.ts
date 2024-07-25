import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

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
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [
    typography
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
    extend: {
      colors: { primary },
      screens: { tablet: '640px', desktop: '1040px' }
    }
  }
}
export default config
