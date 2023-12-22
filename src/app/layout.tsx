import type { Metadata } from 'next'
import './globals.css'
import Header from './components/common/Header'
import ThemeProvider from './provider'

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
      <body className='bg-white dark:bg-[#1A1C29]'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
