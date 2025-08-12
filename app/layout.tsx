export const metadata = {
  title: 'Danno Software',
  description: 'Welcome to Danno Software Homepage',
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