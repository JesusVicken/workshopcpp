// app/layout.tsx
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { AosInit } from "./_components/aos-init"
import { ParallaxWrapper } from "./_components/ParallaxWrapper"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const metadata: Metadata = {
  title: "CPP Workshop",
  description: "CPP Workshop",
  icons: {
    icon: "/cpp.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <ParallaxWrapper>
          {children}
          <AosInit />
        </ParallaxWrapper>
      </body>
    </html>
  )
}
