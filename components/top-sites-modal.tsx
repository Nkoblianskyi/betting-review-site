"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Star, Crown, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BettingSite } from "@/lib/types"

interface TopSitesModalProps {
  isOpen: boolean
  onClose: () => void
  sites: BettingSite[]
}

export default function TopSitesModal({ isOpen, onClose, sites }: TopSitesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100vw-16px)] max-w-[95vw] sm:max-w-2xl lg:max-w-4xl h-auto max-h-[90vh] p-0 m-2 overflow-hidden">
        {/* Header with close button */}
        <DialogHeader className="relative p-4 sm:p-6 pb-3 border-b bg-gradient-to-r from-blue-50 to-white">
          <button
            onClick={onClose}
          >
          </button>
          <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-center pr-8">
            Top Anbefalede Betting Sites
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="space-y-3 sm:space-y-4">
            {sites.map((site, index) => (
              <Link
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="block w-full"
              >
                <div
                  className={`relative p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${index === 0
                      ? "border-yellow-400 bg-gradient-to-r from-yellow-50 via-white to-yellow-50"
                      : "border-gray-200 bg-white hover:border-blue-300"
                    }`}
                >
                  {/* TOP Badge for first item */}
                  {index === 0 && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-yellow-400 text-black px-2 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                        <Crown className="h-3 w-3" />
                        <span className="text-xs font-bold">TOP</span>
                      </div>
                    </div>
                  )}

                  {/* Mobile Layout (< 640px) */}
                  <div className="block sm:hidden">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <div className="text-lg font-bold text-gray-600">#{index + 1}</div>
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={100}
                          height={60}
                          className="h-6 w-auto object-contain"
                        />
                        <h3 className="font-bold text-sm">{site.name}</h3>
                      </div>
                    </div>

                    {/* Mobile Rating */}
                    <div className="flex items-center justify-center mb-3">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm font-medium ml-1">{site.rating}/5</span>
                        <span className="text-xs text-gray-500">({site.reviews})</span>
                      </div>
                    </div>

                    {/* Mobile Bonus */}
                    <div className="mb-3">
                      <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-center text-sm font-medium">
                        {site.bonus}
                      </div>
                    </div>

                    {/* Mobile Button */}
                    <Button
                      className={`w-full text-sm font-bold ${index === 0
                          ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                    >
                      Få Bonus Nu
                    </Button>
                  </div>

                  {/* Desktop/Tablet Layout (>= 640px) */}
                  <div className="hidden sm:grid sm:grid-cols-4 gap-4 items-center">
                    {/* Logo and info section */}
                    <div className="flex items-center space-x-3">
                      <div className="text-xl font-bold text-gray-600">#{index + 1}</div>
                      <div className="flex flex-col items-center">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={96}
                          className="h-16 lg:h-12 w-auto object-contain mb-1"
                        />
                        <h3 className="font-bold text-sm lg:text-base text-center">{site.name}</h3>
                      </div>
                    </div>

                    {/* Rating section */}
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 lg:h-4 lg:w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm lg:text-base font-medium">{site.rating}/5</div>
                      <div className="text-xs text-gray-500">({site.reviews})</div>
                    </div>

                    {/* Bonus section */}
                    <div className="text-center">
                      <div className="bg-green-100 text-green-800 px-2 lg:px-3 py-2 rounded-lg text-xs lg:text-sm font-medium">
                        {site.bonus}
                      </div>
                    </div>

                    {/* Button section */}
                    <div className="text-center">
                      <Button
                        className={`w-full text-sm lg:text-base font-bold ${index === 0
                            ? "bg-yellow-400 hover:bg-yellow-500 text-black"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                      >
                        Få Bonus Nu
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer disclaimer */}
          <div className="text-center text-xs sm:text-sm text-gray-600 mt-4 px-2 py-3 bg-gray-50 rounded-lg">
            <p className="mb-1">18+ | Spil ansvarligt | Kun for nye kunder</p>
            <p className="text-xs text-gray-500">Regler og vilkår gælder | StopSpillet.dk</p>
          </div>

          {/* Close button */}
          <div className="flex justify-center mt-4">
            <Button onClick={onClose} variant="outline" className="px-6 py-2 text-sm font-medium hover:bg-gray-100">
              Luk
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
