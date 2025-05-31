import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Clock, AlertTriangle, Phone, Users, Lock } from "lucide-react"

export default function SafeGamingSection() {
  return (
    <section className="py-12 sm:py-20 bg-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">
          Ansvarligt Spil & Sikkerhed i Danmark
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 text-center mb-6">
            Hos dkbettingsider.com prioriterer vi spillernes sikkerhed og velvære over alt andet. Vi arbejder kun sammen
            med bookmakere, der har gyldig dansk licens fra Spillemyndigheden og overholder de strenge danske regler for
            ansvarligt spil.
          </p>
          <p className="text-base text-white/80 text-center">
            Gambling skal være underholdning - ikke en løsning på økonomiske problemer. Derfor har vi samlet de
            vigtigste værktøjer og ressourcer, der kan hjælpe dig med at holde dit spil under kontrol og sikre en
            positiv oplevelse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Dansk Licens Garanti</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Alle vores anbefalede betting-sider har gyldig licens fra Spillemyndigheden og overholder danske
                spillelove.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Kontrolleret af danske myndigheder</li>
                <li>• Sikre betalingsmetoder</li>
                <li>• Beskyttelse af spillerdata</li>
                <li>• Garanteret udbetaling af gevinster</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Tids- og Indskudsgrænser</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Sæt personlige grænser for dit spil og hold styr på dit forbrug med avancerede kontrolværktøjer.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Daglige, ugentlige og månedlige grænser</li>
                <li>• Automatisk påmindelse om spilletid</li>
                <li>• Indskudsgrænser og tabsgrænser</li>
                <li>• Mulighed for midlertidig pause</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <AlertTriangle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Selvudelukkelse</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                ROFUS-systemet giver dig mulighed for at udelukke dig selv fra alle danske gambling-sider på én gang.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Øjeblikkelig udelukkelse fra alle sites</li>
                <li>• Vælg periode fra 24 timer til permanent</li>
                <li>• Beskyttelse mod impulsive beslutninger</li>
                <li>• Gratis og fortrolig service</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Professionel Hjælp</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Få øjeblikkelig hjælp fra uddannede rådgivere, der forstår problemer med gambling og kan guide dig
                videre.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• StopSpillet Hjælpelinje: 70 22 28 25</li>
                <li>• Gratis og fortrolig rådgivning</li>
                <li>• Åben 24/7 for akutte situationer</li>
                <li>• Henvisning til behandling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Støtte til Pårørende</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Gambling-problemer påvirker ikke kun spilleren. Vi tilbyder også ressourcer til familie og venner.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Rådgivning til pårørende</li>
                <li>• Støttegrupper og netværk</li>
                <li>• Information om hvordan man hjælper</li>
                <li>• Beskyttelse af familiens økonomi</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Lock className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Gamalyze Selvtest</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Tag den videnskabeligt baserede test, der hjælper dig med at vurdere dine spillevaner objektivt.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Gratis og anonym selvvurdering</li>
                <li>• Personlige anbefalinger</li>
                <li>• Tidlig identifikation af risiko</li>
                <li>• Regelmæssig opfølgning mulig</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">⚠️ Vigtig Påmindelse</h3>
          <p className="text-white/90 mb-2">
            Gambling kan være vanedannende og føre til alvorlige økonomiske og sociale problemer.
          </p>
          <p className="text-white/80 text-sm">
            Hvis du eller nogen, du kender, har problemer med gambling, tøv ikke med at søge hjælp. Ring til StopSpillet
            på 70 22 28 25 eller besøg spillemyndigheden.dk for mere information.
          </p>
        </div>
      </div>
    </section>
  )
}
