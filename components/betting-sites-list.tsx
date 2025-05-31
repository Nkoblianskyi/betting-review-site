"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { BettingSite } from "@/lib/types"

interface BettingSitesListProps {
  sites: BettingSite[]
}

export default function BettingSitesList({ sites }: BettingSitesListProps) {
  return (
    <section className="py-4 pt-6 sm:pt-2">
      <div className="container mx-auto px-4">
        <div className="space-y-0">
          <div className="bg-black text-white p-4 animate-fade-in hidden sm:block">
            <div className="grid grid-cols-5 gap-4 font-bold text-center">
              <div>BOOKMAKERE</div>
              <div>BONUS</div>
              <div>VURDERING</div>
              <div>BEDØMMELSE</div>
              <div>SPIL</div>
            </div>
          </div>

          {sites.map((site, index) => (
            <Link
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block betting-item"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div
                className={`grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-4 items-center p-4 border-b relative transition-all duration-300 ${index === 0 ? "bg-gradient-to-r from-yellow-50 to-white ring-2 ring-yellow-400" : "bg-white"
                  }`}
              >
                {/* Bookmaker Column */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                  {index === 0 && (
                    <div className="absolute -top-1 left-1 sm:top-0 sm:left-0 bg-red-600 text-white px-1 py-0.5 sm:px-2 sm:py-1 text-xs font-bold animate-pulse-glow rounded-sm">
                      TOP MÆRKE
                    </div>
                  )}
                  <div className="flex flex-col items-center logo-container">
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={160}
                      height={96}
                      className="h-16 sm:h-20 w-auto mb-2 transition-transform duration-300"
                    />
                    <span className="font-bold text-sm sm:text-base text-gray-800 transition-colors duration-300">
                      {site.name}
                    </span>
                  </div>
                </div>

                {/* Bonus Column */}
                <div className="text-center">
                  <div className="bg-green-100 text-green-800 font-bold text-sm sm:text-base px-3 py-2 rounded-lg bonus-badge transition-all duration-300">
                    {site.bonus}
                  </div>
                </div>

                {/* Rating Column */}
                <div className="text-center">
                  <div className="flex justify-center mb-1 stars-container">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current transition-all duration-300 star-item"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Score Column */}
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 rating-score transition-all duration-300">
                    {site.rating}
                  </div>
                  <div className="text-xs text-gray-500 transition-colors duration-300">
                    ({site.reviews} anmeldelser)
                  </div>
                </div>

                {/* Action Column */}
                <div className="text-center">
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-4 py-2 w-full sm:w-auto action-button transition-all duration-300 transform">
                    FÅ BONUS! *
                  </Button>
                  <div className="text-xs text-blue-600 mt-1 transition-colors duration-300">Besøg {site.name}</div>
                </div>
              </div>
            </Link>
          ))}

          <div className="bg-gray-100 px-4 py-2 text-xs text-gray-600 animate-fade-in-up">
            <p className="text-center leading-relaxed">
              18+ | Kun nye kunder | Spil for 100 kr. til odds 1.8 eller højere og få et 100 kr. free bet til brug på
              sportsspil efter det kvalificerende spil er afgjort | Gyldig i 7 dage | Generelle regler og vilkår er
              altid gældende | SPIL ANSVARLIGT | STOPSPILLET.DK | ROFUS
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            background-color: #dc2626;
            box-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
          }
          50% { 
            background-color: #ef4444;
            box-shadow: 0 0 15px rgba(220, 38, 38, 0.8);
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.1) rotate(5deg); 
          }
        }

        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3) translateY(50px); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.05) translateY(-10px); 
          }
          70% { 
            transform: scale(0.9) translateY(0px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0px); 
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.5s both;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .betting-item {
          animation: bounce-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* Hover Effects */
        .betting-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .betting-item:hover .logo-container img {
          transform: scale(1.1) rotate(2deg);
        }

        .betting-item:hover .logo-container span {
          color: #1d4ed8;
        }

        .betting-item:hover .bonus-badge {
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .betting-item:hover .star-item {
          animation: twinkle 0.6s ease-in-out;
          color: #f59e0b;
        }

        .betting-item:hover .rating-score {
          transform: scale(1.1);
          color: #059669;
          text-shadow: 0 0 10px rgba(5, 150, 105, 0.3);
        }

        .betting-item:hover .action-button {
          transform: scale(1.05);
          background: linear-gradient(45deg, #dc2626, #b91c1c);
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
        }

        /* Focus Effects */
        .betting-item:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }

        .betting-item:focus-visible {
          outline: 3px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Active Effects */
        .betting-item:active {
          transform: translateY(1px) scale(0.98);
          transition: all 0.1s ease-in-out;
        }

        .betting-item:active .action-button {
          transform: scale(0.95);
          background: #991b1b;
        }

        /* Additional hover animations for stars */
        .betting-item:hover .stars-container .star-item:nth-child(1) { animation-delay: 0ms; }
        .betting-item:hover .stars-container .star-item:nth-child(2) { animation-delay: 100ms; }
        .betting-item:hover .stars-container .star-item:nth-child(3) { animation-delay: 200ms; }
        .betting-item:hover .stars-container .star-item:nth-child(4) { animation-delay: 300ms; }
        .betting-item:hover .stars-container .star-item:nth-child(5) { animation-delay: 400ms; }

        /* Responsive animations */
        @media (max-width: 640px) {
          .betting-item:hover {
            transform: none;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </section>
  )
}
