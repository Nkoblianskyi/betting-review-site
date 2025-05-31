import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Target, Lightbulb, TrendingUp, Shield } from "lucide-react"

export default function BettingGuideSection() {
  return (
    <section className="py-12 sm:py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">
          Komplet Guide til Betting i Danmark
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 text-center mb-6">
            Uanset om du er nybegynder eller erfaren spiller, er det vigtigt at forstå grundlæggende betting-koncepter
            og strategier for at maksimere dine chancer for succes. Vores omfattende guide dækker alt fra basale
            betting-typer til avancerede strategier og bankroll-management.
          </p>
          <p className="text-base text-white/80 text-center">
            Med den rette viden og tilgang kan betting være både underholdende og potentielt profitabelt. Lær hvordan du
            læser odds, forstår forskellige markeder, og udvikler en disciplineret tilgang til dine spil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Betting Grundlæggende</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Lær de fundamentale koncepter inden for sportsbetting og forstå hvordan odds fungerer.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Forståelse af forskellige odds-formater</li>
                <li>• Grundlæggende betting-typer</li>
                <li>• Hvordan bookmaker-margin fungerer</li>
                <li>• Læsning af betting-markeder</li>
                <li>• Timing af dine spil</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Bankroll Management</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Lær hvordan du administrerer din betting-bankroll professionelt og minimerer risiko for store tab.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Fastsættelse af betting-budget</li>
                <li>• Procentbaseret indsatsstrategi</li>
                <li>• Håndtering af vindende og tabende perioder</li>
                <li>• Disciplin og emotionel kontrol</li>
                <li>• Langsigtede profitmål</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Værdi-Betting</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Forstå konceptet om værdi i betting og lær at identificere profitable betting-muligheder.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Beregning af sand sandsynlighed</li>
                <li>• Identifikation af værdi-spil</li>
                <li>• Sammenligning af odds på tværs af bookmakers</li>
                <li>• Matematisk tilgang til betting</li>
                <li>• Langsigtede profit-strategier</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Avancerede Strategier</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Udforsk sofistikerede betting-teknikker som arbitrage, hedging og specialiserede markeder.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Arbitrage betting-muligheder</li>
                <li>• Hedging-strategier</li>
                <li>• Live betting-teknikker</li>
                <li>• Specialiserede markeder og nicher</li>
                <li>• Statistisk analyse og modellering</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Markedsanalyse</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Lær at analysere sportsbegivenheder og markeder for at træffe informerede betting-beslutninger.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Fundamental analyse af hold og spillere</li>
                <li>• Statistisk research og dataanalyse</li>
                <li>• Vejr- og baneforhold</li>
                <li>• Skader og holdopstillinger</li>
                <li>• Historiske trends og mønstre</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Risikostyring</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Beskyt din bankroll med effektive risikostyringsstrategier og undgå almindelige betting-fælder.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Diversificering af betting-portefølje</li>
                <li>• Stop-loss og take-profit strategier</li>
                <li>• Undgåelse af tilt og emotionelle beslutninger</li>
                <li>• Periodisk evaluering af performance</li>
                <li>• Justering af strategier baseret på resultater</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">💡 Pro Tip</h3>
          <p className="text-white/90 mb-2">
            Succesfuld betting handler ikke om at vinde hver eneste spil, men om at træffe profitable beslutninger over
            tid.
          </p>
          <p className="text-white/80 text-sm">
            Start med små indsatser, fokuser på markeder du forstår godt, og husk altid at betting skal være
            underholdning først og fremmest.
          </p>
        </div>
      </div>
    </section>
  )
}
