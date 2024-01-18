import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

import Header from '@/components/header'


const avenir = localFont({
  src: [
    {
      path: '../public/fonts/Avenir-Book.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-BookOblique.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/Avenir-Roman.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Avenir-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-MediumOblique.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Avenir-Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Avenir-HeavyOblique.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/Avenir-Black.ttf',
      weight: '900',
      style: 'normal',
    }
  ],
})

export const metadata: Metadata = {
  title: 'Robin Combeau | Portfolio',
  description: 'Robin Combeau | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${avenir.className} font-medium text-[#161716] tracking-[-0.03rem] bg-[#EAF0EA] pt-28 sm:pt-36` }>
        <Header />
        {children}
      </body>
    </html>
  )
}
