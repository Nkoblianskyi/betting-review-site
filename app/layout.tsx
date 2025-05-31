import type React from "react"
import type { Metadata, Viewport } from "next"
import { Jost } from "next/font/google"
import Script from "next/script"
import "./globals.css"

const inter = Jost({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "dkbettingsider - Danmarks Bedste Betting Sider",
  description:
    "Find de bedste danske betting sider med licens fra Spillemyndigheden. Ekspert anmeldelser, bonusser, odds og meget mere. Spil ansvarligt!",
  keywords:
    "betting sider, danske betting sider, online betting, bookmakere, odds, sportsbetting, betting bonusser, spillemyndigheden, spil ansvarligt",
  authors: [{ name: "dkbettingsider.com" }],
  creator: "dkbettingsider.com",
  publisher: "dkbettingsider.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dkbettingsider.com"),
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://dkbettingsider.com",
    title: "dkbettingsider - Danmarks Bedste Betting Sider",
    description:
      "Find de bedste danske betting sider med licens fra Spillemyndigheden. Ekspert anmeldelser, bonusser, odds og meget mere.",
    siteName: "dkbettingsider",
    images: [
      {
        url: "https://dkbettingsider.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "dkbettingsider - Danmarks Bedste Betting Sider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "dkbettingsider - Danmarks Bedste Betting Sider",
    description:
      "Find de bedste danske betting sider med licens fra Spillemyndigheden. Ekspert anmeldelser, bonusser, odds og meget mere.",
    images: ["https://dkbettingsider.com/images/twitter-image.jpg"],
    creator: "@dkbettingsider",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Sports Betting",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// Structured Data Objects
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "dkbettingsider",
  url: "https://dkbettingsider.com",
  logo: "https://dkbettingsider.com/images/logo.png",
  sameAs: [
    "https://www.facebook.com/dkbettingsider",
    "https://twitter.com/dkbettingsider",
    "https://www.instagram.com/dkbettingsider",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "kontakt@dkbettingsider.com",
    contactType: "customer service",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://dkbettingsider.com",
  name: "dkbettingsider - Danmarks Bedste Betting Sider",
  description:
    "Find de bedste danske betting sider med licens fra Spillemyndigheden. Ekspert anmeldelser, bonusser, odds og meget mere.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://dkbettingsider.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="da">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc2626" />
        <meta name="msapplication-TileColor" content="#dc2626" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Structured Data using Next.js Script component */}
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationSchema)}
        </Script>

        <Script id="website-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(websiteSchema)}
        </Script>

        {/* Google Analytics - if needed */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>

        {/* Cookie Consent Script */}
        <Script id="cookie-consent" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              console.log('Cookie consent script loaded');
            });
          `}
        </Script>
      </body>
    </html>
  )
}
