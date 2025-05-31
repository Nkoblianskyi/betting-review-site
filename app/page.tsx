"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import BettingSitesList from "@/components/betting-sites-list"
import SafeGamingSection from "@/components/safe-gaming-section"
import AboutSection from "@/components/about-section"
import BettingGuideSection from "@/components/betting-guide-section"
import DanishBettingLawsSection from "@/components/danish-betting-laws-section"
import Footer from "@/components/footer"
import TopSitesModal from "@/components/top-sites-modal"
import CookieConsent from "@/components/cookie-consent"
import { bettingSites } from "@/lib/mock-data"

export default function HomePage() {
  const [showTopSitesModal, setShowTopSitesModal] = useState(false)
  const [showCookieConsent, setShowCookieConsent] = useState(true)

  useEffect(() => {
    // Show top sites modal after 8 seconds
    const timer = setTimeout(() => {
      setShowTopSitesModal(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Use the same data source for modal - top 3 sites
  const topSites = bettingSites.slice(0, 3)

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="min-h-screen bg-black/60 px-1 sm:px-0">
        <Header />
        <main>
          <Hero />
          <BettingSitesList sites={bettingSites} />
          <SafeGamingSection />
          <AboutSection />
          <BettingGuideSection />
          <DanishBettingLawsSection />
        </main>
        <Footer />

        <TopSitesModal isOpen={showTopSitesModal} onClose={() => setShowTopSitesModal(false)} sites={topSites} />

        <CookieConsent isOpen={showCookieConsent} onAccept={() => setShowCookieConsent(false)} />
      </div>
    </div>
  )
}
