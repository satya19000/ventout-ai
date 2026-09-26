import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VentOut AI', short_name: 'VentOut', description: 'A private, voice-first emotional venting space.',
    start_url: '/', display: 'standalone', background_color: '#f7fbff', theme_color: '#2563eb',
    icons: []
  }
}
