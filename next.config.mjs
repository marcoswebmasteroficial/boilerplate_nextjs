/** @type {import('next').NextConfig} */

import PWA from '@ducanh2912/next-pwa'

const isDev = process.env.NODE_ENV === 'development'

const withPWA = PWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: isDev,
  workboxOptions: {
    disableDevLogs: true
  }
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
    removeConsole: !isDev
  },
  images: {
    domains: ['localhost'],
    loader: 'default', // Carregador a ser usado
    path: '/_next/image' // Caminho de saída para imagens
  }
}

export default withPWA(nextConfig)
