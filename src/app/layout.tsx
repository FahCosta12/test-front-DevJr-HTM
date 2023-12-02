import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'User Form',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Link href={'/src/app/pages/'}>User data</Link>
        {children}
      </body>
    </html>
  )
}
