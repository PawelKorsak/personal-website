import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Foot from '@/components/Foot'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Paweł Korsak',
  description: 'Paweł Korsak - Embedded Enigneer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Foot />
      </body>
    </html>
  )
}
