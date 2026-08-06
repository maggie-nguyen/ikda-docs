import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const config: DocsThemeConfig = {
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <img
        src={`${base}/icon.png`}
        width="28"
        height="28"
        style={{ borderRadius: '8px' }}
        alt="Ikda"
      />
      <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '-0.3px' }}>
        Ikda
      </span>
    </span>
  ),
  project: {
    link: undefined,
  },
  chat: {
    link: undefined,
  },
  docsRepositoryBase: 'https://github.com/ikda-app/ikda-docs',
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Ikda',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href={`${base}/icon.png`} />
      <meta name="description" content="Learn Korean by Reading — News & Stories for Fluency" />
    </>
  ),
  footer: {
    text: (
      <span style={{ fontSize: '14px', color: 'inherit' }}>
        © 2026 Ikda ·{' '}
        <a href="mailto:everpinestudio@gmail.com" style={{ color: 'inherit' }}>
          everpinestudio@gmail.com
        </a>
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  primaryHue: 261,
  primarySaturation: 51,
}

export default config
