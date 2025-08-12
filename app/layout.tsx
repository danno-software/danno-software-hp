export const metadata = {
  title: '株式会社団野ソフトウェア',
  description: '株式会社団野ソフトウェアの公式ホームページ',
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