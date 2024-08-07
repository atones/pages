import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  rewrites: async () => [
    {
      source: '/certcopy',
      destination: 'https://atones-homepage-v2-atones.vercel.app',
    }
  ]
}

export default withMDX()(nextConfig)
