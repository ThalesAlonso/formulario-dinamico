import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/globals.css'
import ThemeToggle from '@/components/ThemeToggle'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Construtor de Formulário',
  description: 'Projeto com dark mode',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black dark:bg-zinc-900 dark:text-white`}>
        <div className="p-4 flex justify-end">
          <ThemeToggle />
        </div>
        <main className="max-w-5xl mx-auto px-4">{children}</main>
      </body>
    </html>
  )
}