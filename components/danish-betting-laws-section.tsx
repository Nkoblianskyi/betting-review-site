import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, FileText, CreditCard, UserCheck, AlertCircle, Building } from "lucide-react"

export default function DanishBettingLawsSection() {
  return (
    <section className="py-12 sm:py-20 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">
          Danske Spillelove & Regulering
        </h2>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 text-center mb-6">
            Danmark har nogle af verdens strengeste og mest omfattende spillelove, designet til at beskytte spillere og
            sikre fair og ansvarligt gambling. Spillemyndigheden overvåger og regulerer alle former for gambling i
            Danmark, herunder online betting, casinoer og lotterier.
          </p>
          <p className="text-base text-white/80 text-center">
            Som spiller i Danmark er det vigtigt at forstå dine rettigheder og de beskyttelser, der er på plads. Alle
            licenserede operatører skal overholde strenge krav til spillerbeskyttelse, datasikkerhed og ansvarligt spil.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Scale className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Spillemyndigheden</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Spillemyndigheden er den danske myndighed, der regulerer og overvåger alle gambling-aktiviteter i
                Danmark.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Udstedelse og overvågning af licenser</li>
                <li>• Håndhævelse af spillelove</li>
                <li>• Beskyttelse af spillere</li>
                <li>• Bekæmpelse af ulovligt gambling</li>
                <li>• Forskning i spilleadfærd</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Licenskrav</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Alle gambling-operatører i Danmark skal have gyldig licens og overholde strenge krav.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Finansiel soliditet og sikkerhed</li>
                <li>• Tekniske krav til systemer</li>
                <li>• Ansvarligt spil-værktøjer</li>
                <li>• Regelmæssig rapportering</li>
                <li>• Overholdelse af danske love</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <CreditCard className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Betalingssikkerhed</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Danske spillelove kræver høje standarder for betalingssikkerhed og beskyttelse af spillermidler.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Adskillelse af spillermidler</li>
                <li>• Sikre betalingsmetoder</li>
                <li>• Kryptering af finansielle data</li>
                <li>• Hurtig udbetaling af gevinster</li>
                <li>• Beskyttelse mod svindel</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <UserCheck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Spillerbeskyttelse</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Omfattende beskyttelsesforanstaltninger sikrer spillernes sikkerhed og velvære.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Obligatoriske grænseværktøjer</li>
                <li>• ROFUS selvudelukkelsessystem</li>
                <li>• Aldersverifikation og ID-kontrol</li>
                <li>• Overvågning af spilleadfærd</li>
                <li>• Adgang til hjælp og behandling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Ansvarligt Spil Krav</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Alle licenserede operatører skal implementere omfattende ansvarligt spil-foranstaltninger.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Obligatoriske indskuds- og tabsgrænser</li>
                <li>• Tidsgrænser for spillesessioner</li>
                <li>• Automatiske advarsler og påmindelser</li>
                <li>• Træning af personale</li>
                <li>• Samarbejde med behandlingscentre</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/95 hover:bg-white transition-colors">
            <CardHeader className="text-center p-6">
              <Building className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Skatteforhold</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <p className="text-sm text-gray-600 text-center mb-4">
                Forstå dine skattemæssige forpligtelser som spiller i Danmark.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Gevinster er skattefrie for spillere</li>
                <li>• Operatører betaler spilleafgift</li>
                <li>• Automatisk indberetning til SKAT</li>
                <li>• Ingen personlig indkomstbeskatning</li>
                <li>• Transparente afgiftsregler</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-3">🇩🇰 Dine Rettigheder som Dansk Spiller</h3>
          <p className="text-white/90 mb-2">
            Som spiller på en dansk-licenseret betting-side har du omfattende rettigheder og beskyttelser under dansk
            lov.
          </p>
          <p className="text-white/80 text-sm">
            Hvis du oplever problemer med en licenseret operatør, kan du klage til Spillemyndigheden, som vil undersøge
            sagen og sikre, at dine rettigheder bliver respekteret.
          </p>
        </div>
      </div>
    </section>
  )
}
