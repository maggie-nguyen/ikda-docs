const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const basePath = process.env.GITHUB_ACTIONS ? '/ikda-docs' : ''

module.exports = withNextra({
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
})
