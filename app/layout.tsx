import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SnapSeeker - 快速完善想法，生成PRD文档',
  description: 'SnapSeeker 帮助您快速完善产品想法并生成PRD文档，提供强大的竞品分析和市场洞察，助力产品验证。',
  keywords: ['MVP', '产品市场契合', '产品分析', '用户洞察', '产品验证', 'PRD', '需求文档'],
  authors: [{ name: 'SnapSeeker Team' }],
  openGraph: {
    title: 'SnapSeeker - 快速完善想法，生成PRD文档',
    description: 'SnapSeeker 帮助您快速完善产品想法并生成PRD文档，提供强大的竞品分析和市场洞察。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapSeeker - 快速完善想法，生成PRD文档',
    description: 'SnapSeeker 帮助您快速完善产品想法并生成PRD文档，提供强大的竞品分析和市场洞察。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className="dark">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P32XMZNB');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P32XMZNB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}