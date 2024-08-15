import type { MetadataRoute } from 'next'

export default function sitemap (): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.candypay.co.kr',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://www.candypay.co.kr/merchant',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9
    },
    {
      url: 'https://www.candypay.co.kr/faq',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8
    },
    {
      url: 'https://www.candypay.co.kr/terms/privacy',
      changeFrequency: 'yearly',
      priority: 0.2
    },
    {
      url: 'https://www.candypay.co.kr/terms/service',
      changeFrequency: 'yearly',
      priority: 0.2
    }
  ]
}