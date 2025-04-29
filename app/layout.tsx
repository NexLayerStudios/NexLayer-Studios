import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "NexLayer Studios | AI & Web Design Consultation",
  description:
    "Elevate your business' digital presence with NexLayer Studios — Your partner in AI agent implementation and modern web design.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            // Remove Grammarly attributes that cause hydration mismatch
            document.addEventListener('DOMContentLoaded', function() {
              const body = document.body;
              if (body) {
                body.removeAttribute('data-new-gr-c-s-check-loaded');
                body.removeAttribute('data-gr-ext-installed');
              }
            });
          `
        }} />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
