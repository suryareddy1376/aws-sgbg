import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/events', '/projects', '/team', '/resources', '/community', '/opportunities', '/blog', '/join', '/contact', '/login', '/signup'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
