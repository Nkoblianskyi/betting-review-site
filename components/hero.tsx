"use client"

import { useState, useEffect } from "react"
import RulesModal from "@/components/rules-modal"

export default function Hero() {
  const [showRulesModal, setShowRulesModal] = useState(false)
  const [modalType, setModalType] = useState<"terms" | "responsible" | "age" | "gamalyze">("terms")
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const updateDate = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
      const danishDate = now.toLocaleDateString("da-DK", options)
      setCurrentDate(danishDate)
    }

    updateDate()
    // Update date every day at midnight
    const interval = setInterval(updateDate, 24 * 60 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const openModal = (type: "terms" | "responsible" | "age" | "gamalyze") => {
    setModalType(type)
    setShowRulesModal(true)
  }

  return (
    <section className="py-2 sm:py-4 text-center text-white min-h-[50px] sm:min-h-[250px] md:max-h-[300px] overflow-visible">
      <div className="container mx-auto px-1 sm:px-4">
        <div className="bg-white/20 backdrop-blur-md rounded-lg p-3 sm:p-4 md:p-6 mb-2 sm:mb-3 animate-hero-content">
          <div className="text-xs sm:text-sm text-white mb-2 animate-date-fade">Opdateret: {currentDate}</div>
          <h1 className="text-base sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-gray-900 animate-title-glow leading-tight">
            Danmarks Bedste Betting Sider
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white-800 mb-2 sm:mb-3 animate-text-reveal leading-relaxed">
            Velkommen til dkbettingsider - Danmarks mest pålidelige guide til online betting! Vores ekspertteam har
            grundigt testet og anmeldt alle de bedste betting-sider, der er tilgængelige for danske spillere. Vi
            fokuserer på sikkerhed, bonusser, odds, brugeroplevelse og kundeservice for at give dig den mest præcise
            vurdering.
          </p>
          <p className="text-xs sm:text-sm text-black animate-text-reveal-delayed leading-relaxed">
            Alle anbefalede bookmakere har gyldig dansk licens fra Spillemyndigheden og overholder danske spillelove. Vi
            opdaterer løbende vores anmeldelser for at sikre, at du altid får den nyeste information.
          </p>
        </div>
        <div className="bg-gray-900/80 backdrop-blur-md rounded-lg p-1 sm:p-3 md:p-4 mt-1 sm:mt-3 animate-rules-bar">
          <div className="flex justify-center items-center gap-1 sm:gap-2 md:gap-4 text-2xs sm:text-xs md:text-sm px-1 sm:px-2">
            <button
              onClick={() => openModal("gamalyze")}
              className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 animate-rule-button text-center py-0.5 px-1 sm:py-1 sm:px-2 rounded"
            >
              Test dig selv med Gamalyze
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => openModal("age")}
              className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 animate-rule-button text-center py-0.5 px-1 sm:py-1 sm:px-2 rounded"
              style={{ animationDelay: "0.2s" }}
            >
              18+ | Spil ansvarligt!
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => openModal("terms")}
              className="text-white hover:text-yellow-400 transition-all duration-300 hover:scale-105 animate-rule-button text-center py-0.5 px-1 sm:py-1 sm:px-2 rounded"
              style={{ animationDelay: "0.4s" }}
            >
              Regler og vilkår gælder
            </button>
          </div>
        </div>
      </div>

      <RulesModal isOpen={showRulesModal} onClose={() => setShowRulesModal(false)} type={modalType} />

      <style jsx>{`
        @keyframes hero-content {
          from { 
            opacity: 0; 
            transform: translateY(40px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        @keyframes rules-bar {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes title-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          }
          50% { 
            text-shadow: 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
          }
        }

        @keyframes text-reveal {
          from { 
            opacity: 0; 
            transform: translateX(-20px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes rule-button {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes date-fade {
          from { 
            opacity: 0; 
            transform: translateY(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        .animate-hero-content {
          animation: hero-content 1s ease-out;
        }

        .animate-rules-bar {
          animation: rules-bar 1s ease-out 0.5s both;
        }

        .animate-title-glow {
          animation: title-glow 4s ease-in-out infinite;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease-out 0.3s both;
        }

        .animate-text-reveal-delayed {
          animation: text-reveal 1s ease-out 0.6s both;
        }

        .animate-rule-button {
          animation: rule-button 0.8s ease-out both, float-gentle 3s ease-in-out infinite;
        }

        .animate-date-fade {
          animation: date-fade 1s ease-out 0.2s both;
        }

        /* Hover enhancements */
        .animate-rule-button:hover {
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.6);
          animation-play-state: paused;
        }

        /* Focus states */
        .animate-rule-button:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Active states */
        .animate-rule-button:active {
          transform: scale(0.95);
        }
        
        /* Extra small text size for very small screens */
        .text-2xs {
          font-size: 0.65rem;
          line-height: 1rem;
        }
      `}</style>
    </section>
  )
}
