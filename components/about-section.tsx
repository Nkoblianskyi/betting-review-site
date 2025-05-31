import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Award, Users, TrendingUp, CheckCircle, Star } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">
          Hvordan dkbettingsider Vælger Danmarks Bedste Betting Sites
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 text-center mb-6">
            Siden 2020 har dkbettingsider.com været Danmarks mest pålidelige kilde til objektive betting-anmeldelser.
            Vores ekspertteam bruger måneder på at teste hver eneste platform for at sikre, at du får den mest præcise
            og opdaterede information om danske betting-sider.
          </p>
          <p className="text-base text-white/80 text-center">
            Vi følger en stringent testmetode, der kombinerer teknisk analyse, brugeroplevelse, sikkerhedsvurdering og
            sammenligning af bonusvilkår. Vores mål er at hjælpe danske spillere med at træffe informerede beslutninger
            og finde de betting-sider, der bedst matcher deres behov og præferencer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Omfattende Research</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vores eksperter bruger minimum 3 måneder på at teste hver platform grundigt på alle parametre.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Detaljeret funktionalitetstest</li>
                <li>• Sikkerhedsanalyse og licenskontrol</li>
                <li>• Sammenligning med konkurrenter</li>
                <li>• Test af kundeservice og support</li>
                <li>• Vurdering af mobile apps</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Licens & Sikkerhed</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vi verificerer personligt alle licenser og kontrollerer overholdelse af danske spillelove.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Verifikation hos Spillemyndigheden</li>
                <li>• SSL-kryptering og datasikkerhed</li>
                <li>• Kontrol af betalingsmetoder</li>
                <li>• Test af udbetalingshastighed</li>
                <li>• Vurdering af ansvarligt spil-værktøjer</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Brugererfaring</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vi indsamler feedback fra tusindvis af danske spillere for at sikre objektive vurderinger.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Surveys og brugerinterviews</li>
                <li>• Analyse af kundeservice-kvalitet</li>
                <li>• Test af registrerings- og verifikationsproces</li>
                <li>• Vurdering af website-navigation</li>
                <li>• Mobile brugeroplevelse</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Værdi & Bonusser</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vi analyserer alle bonusvilkår og sammenligner odds dagligt for at identificere de bedste tilbud.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Detaljeret analyse af bonusvilkår</li>
                <li>• Sammenligning af odds på populære markeder</li>
                <li>• Vurdering af loyalitetsprogrammer</li>
                <li>• Test af kampagner og tilbud</li>
                <li>• Beregning af reel værdi for spillere</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Uafhængighed</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vores anmeldelser er 100% uafhængige og baseret på objektive kriterier, ikke kommercielle interesser.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Ingen påvirkning fra operatører</li>
                <li>• Transparente vurderingskriterier</li>
                <li>• Regelmæssige opdateringer</li>
                <li>• Ærlige negative anmeldelser</li>
                <li>• Klare interessekonflikter</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Løbende Overvågning</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Vi overvåger konstant vores anbefalede sites for at sikre, at de opretholder høje standarder.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Månedlige kvalitetskontroller</li>
                <li>• Overvågning af kundeservice</li>
                <li>• Tracking af udbetalingshastighed</li>
                <li>• Opdatering ved ændringer</li>
                <li>• Fjernelse ved problemer</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">🏆 Vores Løfte til Dig</h3>
          <p className="text-white/90 mb-2">
            Vi forpligter os til at levere de mest præcise, opdaterede og upartiske anmeldelser af danske betting-sider.
          </p>
          <p className="text-white/80 text-sm">
            Hvis du oplever problemer med en af vores anbefalede sites, kontakt os øjeblikkeligt, så vi kan undersøge
            sagen og opdatere vores anmeldelse hvis nødvendigt.
          </p>
        </div>
      </div>
    </section>
  )
}
