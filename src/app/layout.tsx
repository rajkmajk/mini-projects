import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Mono } from 'next/font/google'
import Navbar from '../components/navbar'

const notosans = Noto_Sans_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Mihailo's mini projects",
  description: "Some mini projects I made, but didn't know where to put",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notosans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
