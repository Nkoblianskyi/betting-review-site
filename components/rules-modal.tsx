"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
  type: "terms" | "responsible" | "age" | "gamalyze"
}

const content = {
  age: {
    title: "18+ | Spil ansvarligt!",
    content: `
      <h3>Kun for personer over 18 år</h3>
      <p>Alle betting-sider og gambling-tjenester på denne hjemmeside er kun for personer over 18 år. Gambling er forbudt for mindreårige.</p>
      
      <p>Ifølge dansk lovgivning er det ulovligt for personer under 18 år at deltage i gambling-aktiviteter. Alle bookmakere og casinoer kræver aldersverifikation for at sikre, at denne lov overholdes.</p>
      
      <h3>Ansvarlig Gambling</h3>
      <p>Vi opfordrer alle brugere til at spille ansvarligt og kun med penge, de har råd til at tabe. Hvis du eller nogen, du kender, har problemer med gambling, kontakt venligst StopSpillet på 70 22 28 25.</p>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        <p>18+ | Spil ansvarligt | ROFUS | StopSpillet</p>
      </div>
    `,
  },
  gamalyze: {
    title: "Test dig selv med Gamalyze",
    content: `
      <h3>Test dine spillevaner</h3>
      <p>Gamalyze er et professionelt værktøj til at vurdere dine spillevaner og identificere potentielle risikosignaler.</p>
      
      <h3>Hvorfor teste dig selv?</h3>
      <ul>
        <li>Få indsigt i dine spillemønstre</li>
        <li>Identificer eventuelle problematiske tendenser tidligt</li>
        <li>Modtag personlige anbefalinger til ansvarligt spil</li>
        <li>Hold styr på dit spilleforbrug</li>
      </ul>
      
      <div class="bg-blue-50 p-4 rounded-lg mt-4">
        <p class="font-semibold">Besøg Gamalyze.com for at tage testen</p>
        <p class="text-sm text-gray-600">Testen er gratis, anonym og tager kun få minutter</p>
      </div>
    `,
  },
  terms: {
    title: "Regler og vilkår gælder",
    content: `
      <h3>Vilkår og Betingelser</h3>
      <p>18+ | Spil ansvarligt – Test dig selv med Gamalyze! | Regler og vilkår gælder | StopSpillet – Ring til 70 22 28 25 | Udeluk dig via ROFUS | Links markeret med *, der kan bidrage til sidens indtjening</p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="text-center">
          <h4 class="font-bold text-lg">StopSpillet</h4>
          <p class="text-sm">Hjælpelinje for spilleproblemer</p>
          <p class="font-bold text-xl">70 22 28 25</p>
        </div>
        
        <div class="text-center">
          <h4 class="font-bold text-lg">ROFUS</h4>
          <p class="text-sm">Udeluk dig selv</p>
          <p class="text-blue-600">spillemyndigheden.dk/rofus</p>
        </div>
        
        <div class="text-center">
          <h4 class="font-bold text-lg">Gamalyze</h4>
          <p class="text-sm">Test dine spillevaner</p>
          <p class="text-blue-600">gamalyze.com</p>
        </div>
      </div>
      
      <h3>Vigtig Information</h3>
      <p>Vi modtager provision, når du klikker på disse links og tilmelder dig. Dette påvirker ikke vores anmeldelser, som er baseret på grundig research og test.</p>
      
      <div class="mt-6 text-center text-sm text-gray-600">
        <p>18+ | Spil ansvarligt | ROFUS | StopSpillet | Gamalyze</p>
      </div>
    `,
  },
  responsible: {
    title: "Ansvarligt Spil",
    content: `
      <h3>Spil Med Omtanke</h3>
      <p>Betting og gambling skal være underholdning, ikke en måde at løse økonomiske problemer på.</p>
      
      <h3>Vigtige Retningslinjer</h3>
      <ul>
        <li>Sæt altid grænser for tid og penge før du begynder</li>
        <li>Spil aldrig for penge du ikke har råd til at tabe</li>
        <li>Tag regelmæssige pauser og undgå at jage tab</li>
        <li>Søg hjælp med det samme hvis spillet bliver et problem</li>
      </ul>
      
      <h3>Få Professionel Hjælp</h3>
      <p>Hvis du eller nogen, du kender, har problemer med gambling:</p>
      <ul>
        <li>StopSpillet Hjælpelinje: 70 22 28 25</li>
        <li>Spillemyndigheden: spillemyndigheden.dk</li>
        <li>ROFUS Selvudelukkelse: spillemyndigheden.dk/rofus</li>
      </ul>
    `,
  },
}

export default function RulesModal({ isOpen, onClose, type }: RulesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center">{content[type].title}</DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 overflow-hidden">
          <div
            className="prose prose-sm max-w-none text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: content[type].content }}
          />

          <div className="flex justify-center mt-6">
            <Button onClick={onClose} className="px-8">
              Luk
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
