import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  redirects: async () => [
    {
      source: '/download',
      has: [{ type: 'header', key: 'User-Agent', value: '(.*iPhone.*|.*iPad.*|.*iPod.*)' }],
      destination: 'https://apps.apple.com/us/app/캔디페이/id6463577769',
      permanent: false
    },
    {
      source: '/download',
      has: [{ type: 'header', key: 'User-Agent', value: '.*Android.*' }],
      destination: 'https://play.google.com/store/apps/details?id=kr.co.candypay',
      permanent: false
    },
    {
      source: '/download',
      destination: 'https://candypay.co.kr',
      permanent: false
    },
    {
      source: '/certcopy',
      destination: 'https://certcopy.candypay.co.kr',
      permanent: false
    }
  ]
}

export default withMDX()(nextConfig)
