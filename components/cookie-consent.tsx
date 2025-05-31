"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CookieConsentProps {
  isOpen: boolean
  onAccept: () => void
}

export default function CookieConsent({ isOpen, onAccept }: CookieConsentProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white p-4 shadow-lg">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Cookie Samtykke</h3>
                <p className="text-sm text-gray-300">
                  Vi bruger cookies for at forbedre din oplevelse på vores website. Ved at fortsætte accepterer du vores
                  brug af cookies.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link href="/cookies" className="text-sm text-blue-400 hover:underline">
                  Læs vores Cookie Politik
                </Link>
                <Button onClick={onAccept} className="bg-blue-600 hover:bg-blue-700 px-6">
                  Accepter Alle Cookies
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
