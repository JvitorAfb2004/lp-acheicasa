import { Metadata } from 'next'
import './globals.css'
import { Questrial } from 'next/font/google'

export const metadata: Metadata = {
  title: 'AcheiCasa.net - Primeira plataforma imobiliária com rede de parceiros e IA',
  description: 'Conecte anunciantes, corretores, construtoras e imobiliárias em um só ambiente inteligente. IA, automação e rede de parceiros comerciais.',
  keywords: ['imobiliária', 'corretores', 'construtoras', 'inteligência artificial', 'rede de parceiros', 'imóveis', 'aluguel', 'venda'],
  authors: [{ name: 'AcheiCasa.net' }],
  creator: 'AcheiCasa.net',
  publisher: 'AcheiCasa.net',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acheicasa.net'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://acheicasa.net',
    title: 'AcheiCasa.net - Revolucionando o mercado imobiliário',
    description: 'A primeira plataforma imobiliária com rede de parceiros comerciais e inteligência artificial.',
    siteName: 'AcheiCasa.net',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AcheiCasa.net - Plataforma Imobiliária com IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AcheiCasa.net - Plataforma Imobiliária com IA',
    description: 'A primeira plataforma imobiliária com rede de parceiros comerciais e inteligência artificial.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ff7a00" />
        <meta name="msapplication-TileColor" content="#ff7a00" />
      </head>
      <body className={`${questrial.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}