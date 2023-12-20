import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Disney+ clone',
  description: 'For practice nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
