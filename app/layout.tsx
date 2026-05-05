import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Connex | Sua marca conectada ao que importa',
  description: 'Agência de marketing digital em Natal, RN. Criação de marca, presença digital e campanhas de captação para conectar sua empresa ao crescimento.',
  generator: 'v0.app',
  keywords: ['marketing digital', 'agência', 'Natal', 'RN', 'branding', 'social media', 'campanhas'],
  authors: [{ name: 'Connex' }],
  openGraph: {
    title: 'Connex | Sua marca conectada ao que importa',
    description: 'Agência de marketing digital em Natal, RN. Conectamos sua marca ao crescimento.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F2EE' },
    { media: '(prefers-color-scheme: dark)', color: '#161622' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
