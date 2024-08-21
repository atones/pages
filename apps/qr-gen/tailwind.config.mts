import type { Config } from 'tailwindcss'

const primary = {
  s5: '#ff7720',
  s4: '#ff8d4e',
  s3: '#ffcbae',
  s2: '#ffe0cb',
  s1: '#ffe7d7'
} as const


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: { primary }
    }
  },
  plugins: []
} as Config
