"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 animate-slide-down">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex items-center space-x-3 group">
            {/* CSS Icon */}
            <div className="logo-icon animate-logo-glow">
              <div className="icon-container">
                <div className="icon-bg"></div>
                <div className="icon-star">⭐</div>
                <div className="icon-text">DK</div>
              </div>
            </div>
            <div className="text-white">
              <p className="text-xl sm:text-xl text-white/80 animate-subtitle-fade">Danmarks Bedste Betting Sider</p>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .logo-icon {
          position: relative;
          width: 40px;
          height: 40px;
        }

        @media (min-width: 640px) {
          .logo-icon {
            width: 48px;
            height: 48px;
          }
        }

        .icon-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .icon-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #dc2626 0%, #ffffff 50%, #dc2626 100%);
          border: 2px solid #ffffff;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .icon-star {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 10px;
          z-index: 2;
          animation: twinkle 2s ease-in-out infinite;
        }

        @media (min-width: 640px) {
          .icon-star {
            font-size: 12px;
            top: 3px;
            right: 3px;
          }
        }

        .icon-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: bold;
          font-size: 12px;
          color: #ffffff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          z-index: 2;
        }

        @media (min-width: 640px) {
          .icon-text {
            font-size: 14px;
          }
        }

        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logo-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.4));
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
          }
          50% { 
            filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.7));
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes text-slide {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes subtitle-fade {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes bounce-in {
          0% { 
            opacity: 0; 
            transform: scale(0.3) rotate(-180deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1) rotate(-10deg); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
        }

        @keyframes twinkle {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
          }
          50% { 
            opacity: 0.7; 
            transform: scale(1.2) rotate(180deg); 
          }
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-logo-glow {
          animation: logo-glow 3s ease-in-out infinite, bounce-in 1s ease-out;
        }

        .animate-text-slide {
          animation: text-slide 0.8s ease-out 0.3s both;
        }

        .animate-subtitle-fade {
          animation: subtitle-fade 0.8s ease-out 0.6s both;
        }

        /* Hover effects */
        .group:hover .logo-icon {
          transform: scale(1.1) rotate(12deg);
        }

        .group:hover .icon-bg {
          background: linear-gradient(135deg, #ef4444 0%, #fbbf24 50%, #ef4444 100%);
          box-shadow: 0 6px 25px rgba(220, 38, 38, 0.5);
        }

        .group:hover .icon-star {
          animation-duration: 0.5s;
        }

        .group:hover .icon-text {
          color: #000000;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
        }

        .group:hover h1 {
          color: #fbbf24;
          text-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          transform: translateX(5px);
        }

        .group:hover p {
          color: #ffffff;
          transform: translateX(5px);
        }

        /* Focus states */
        .group:focus {
          outline: 3px solid #3b82f6;
          outline-offset: 4px;
          border-radius: 8px;
        }

        /* Active states */
        .group:active .logo-icon {
          transform: scale(0.95) rotate(-5deg);
        }

        .group:active h1 {
          transform: scale(0.98);
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .group:hover .logo-icon {
            transform: scale(1.05) rotate(6deg);
          }
          
          .group:hover h1,
          .group:hover p {
            transform: translateX(2px);
          }
        }
      `}</style>
    </header>
  )
}
