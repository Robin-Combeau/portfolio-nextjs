import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Header from '@/components/page/Header'
import ActiveSectionContextProvider from '@/context/active-section-context'


const avenir = localFont({
  src: [
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-UltLt.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-UltLtIt.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-It.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-MediumIt.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-Demi.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-DemiIt.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-BoldIt.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-Heavy.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/avenir/AvenirNextLTPro-HeavyIt.otf',
      weight: '900',
      style: 'italic',
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
    <html lang="en" className="!scroll-smooth">
      <body suppressHydrationWarning={true} className={`${avenir.className} font-medium text-[#161716] tracking-[-0.03rem] bg-[#EAF0EA] pt-28 sm:pt-30 lg:pt-36` }>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
