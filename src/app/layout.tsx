import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TranStackProvider from './components/providers/TanStackProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TranStackProvider>
        {children}
        </TranStackProvider>
        </body>
    </html>
  )
}
