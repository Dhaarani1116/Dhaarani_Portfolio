import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ 
  variable: '--font-inter', 
  subsets: ['latin'],
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({ 
  variable: '--font-space-grotesk', 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Dhaarani M | AI & ML Engineer',
  description: 'Portfolio of Dhaarani M - AI & ML Engineer and Full Stack Developer. Passionate about building AI-driven applications that solve real-world problems.',
  keywords: ['AI Engineer', 'ML Engineer', 'Full Stack Developer', 'React', 'Python', 'Machine Learning', 'Deep Learning'],
  authors: [{ name: 'Dhaarani M' }],
  openGraph: {
    title: 'Dhaarani M | AI & ML Engineer',
    description: 'Portfolio of Dhaarani M - AI & ML Engineer and Full Stack Developer',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
