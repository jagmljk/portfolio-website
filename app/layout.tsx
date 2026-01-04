import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jagan Muralitharan | AI & Embedded Systems Engineer',
  description: 'Computer Engineering student at Virginia Tech specializing in AI/ML, Embedded Systems, and Robotics. Building the future through innovative technology.',
  keywords: ['Jagan Muralitharan', 'Virginia Tech', 'Computer Engineering', 'AI', 'Machine Learning', 'Embedded Systems', 'Robotics', 'Portfolio'],
  authors: [{ name: 'Jagan Muralitharan' }],
  creator: 'Jagan Muralitharan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jaganm.dev',
    title: 'Jagan Muralitharan | AI & Embedded Systems Engineer',
    description: 'Computer Engineering student at Virginia Tech specializing in AI/ML, Embedded Systems, and Robotics.',
    siteName: 'Jagan Muralitharan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jagan Muralitharan | AI & Embedded Systems Engineer',
    description: 'Computer Engineering student at Virginia Tech specializing in AI/ML, Embedded Systems, and Robotics.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
