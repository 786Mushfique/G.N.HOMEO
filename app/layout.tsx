
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "G.N.Homeo Clinic - Healing Naturally with Homeopathy",
  description: "Dr. M.H. Rizwi - 25 years of homeopathic expertise. Free consultations via video call, chat, or phone.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Chatbot />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}






