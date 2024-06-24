import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {Providers} from './lib/providers'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Scratchpad',
  description: 'Basic Next.js repo for sample React projects',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  )
}
