// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
module.exports = withPWA()

const settings = {
  swcMinify: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      fileName: true
    }
  },
  pwa: {
    dest: 'public',
    fallbacks: {
      image: '/static/images/fallback.png'
    }
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: false,
    domains: ['localhost']
  }
}

module.exports =
  process.env.NODE_ENV === 'development' ? settings : withPWA(settings)
