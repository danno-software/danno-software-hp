export const metadata = {
  title: '株式会社団野ソフトウェア - クラウドインフラ構築のプロフェッショナル',
  description: 'AWS・Google Cloud・Azure認定エンジニアが、最適なクラウドソリューションをご提供。インフラ設計・構築から自動化・運用保守まで幅広くサポートします。',
  keywords: 'クラウドインフラ,AWS,Google Cloud,Azure,インフラ構築,CI/CD,IaC,Terraform,大阪',
  openGraph: {
    title: '株式会社団野ソフトウェア - クラウドインフラ構築のプロフェッショナル',
    description: 'AWS・Google Cloud・Azure認定エンジニアが、最適なクラウドソリューションをご提供',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://danno-software.com',
    siteName: '株式会社団野ソフトウェア',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社団野ソフトウェア',
    description: 'クラウドインフラ構築のプロフェッショナル',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}