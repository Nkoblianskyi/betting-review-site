import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Nyttige Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Politik
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Vilkår og Betingelser
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sikker Betting Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Ansvarligt Spil</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://stopspillet.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  StopSpillet - 70 22 28 25
                </a>
              </li>
              <li>
                <a
                  href="https://rofus.nu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ROFUS - Udelukkelsesregister
                </a>
              </li>
              <li>
                <a
                  href="https://ludomani.dk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Center for Ludomani
                </a>
              </li>
              <li>
                <a
                  href="https://gamalyze.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gamalyze Selvtest
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-200">Ansvarsfraskrivelse</h3>
            <p className="text-sm text-gray-400 mb-4">
              dkbettingsider.com kan modtage kompensation når du klikker på links og tilmelder dig hos vores partnere.
              Dette påvirker ikke vores uafhængige vurderinger, som er baseret på grundige tests og omfattende research.
            </p>
            <p className="text-sm text-gray-400">
              Gambling kan være vanedannende og medføre økonomiske tab. Spil altid ansvarligt og kun med midler, du har
              råd til at miste. Hvis du oplever problemer med gambling, søg venligst professionel hjælp hos StopSpillet.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 gap-4">
            <a href="https://ludomani.dk/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/ludomani.png"
                alt="Spillemyndigheden"
                width={100}
                height={35}
                className="h-12 w-auto"
              />
            </a>
            <a href="https://stopspillet.dk" target="_blank" rel="noopener noreferrer">
              <Image
                src="/stopspillet.png"
                alt="StopSpillet"
                width={100}
                height={35}
                className="h-12 w-auto"
              />
            </a>
            <a href="https://rofus.nu" target="_blank" rel="noopener noreferrer">
              <Image
                src="/rofus.png"
                alt="ROFUS"
                width={100}
                height={35}
                className="h-12 w-auto"
              />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">18+ | Spil ansvarligt | ROFUS | StopSpillet</p>
            <p className="text-xs text-gray-600">© 2025 dkbettingsider.com. Alle rettigheder forbeholdes.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
