import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Seeing Your Algorithm",
  description: "Transform your algorithm sketches into AI-generated art and merchandise",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-secondary text-primary`}>
        <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-6">
              <span className="text-2xl font-extrabold tracking-tight">Seeing Your Algorithm</span>
              <nav className="hidden md:flex gap-6 text-base font-medium">
                <Link href="#" className="hover:text-accent">
                  Gallery
                </Link>
                <Link href="#" className="hover:text-accent">
                  Upload Sketch
                </Link>
                <Link href="#" className="hover:text-accent">
                  Shop
                </Link>
                <Link href="#" className="hover:text-accent">
                  Exhibitions
                </Link>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </nav>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-accent transition">
              Share Your Algorithm
            </button>
          </div>
        </header>
        <main className="min-h-[80vh]">{children}</main>
        <footer className="w-full bg-primary text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="mb-2">Seeing Your Algorithm - A Research Project</div>
              <div className="text-sm opacity-75">© 2025. All rights reserved.</div>
            </div>
            <div className="flex gap-4 justify-center md:justify-end">
              <Link href="#" aria-label="Twitter" className="hover:text-accent">
                Twitter
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-accent">
                Instagram
              </Link>
              <Link href="#" aria-label="GitHub" className="hover:text-accent">
                GitHub
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
