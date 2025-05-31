import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
      }}
    >
      <div className="min-h-screen bg-black/60">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white/95 rounded-lg p-8">
              <h1 className="text-4xl font-bold mb-8">Privatlivspolitik</h1>

              <div className="prose prose-lg max-w-none">
                <h2>Dataindsamling</h2>
                <p>
                  dkbettingsider.com indsamler kun de nødvendige oplysninger for at levere vores tjenester. Vi
                  respekterer dit privatliv og følger GDPR-reglerne.
                </p>

                <h2>Hvilke data indsamler vi?</h2>
                <ul>
                  <li>Anonyme brugsstatistikker via Google Analytics</li>
                  <li>IP-adresse for sikkerhedsformål</li>
                  <li>Cookie-præferencer</li>
                </ul>

                <h2>Hvordan bruger vi dine data?</h2>
                <p>Vi bruger indsamlede data til:</p>
                <ul>
                  <li>At forbedre websitets funktionalitet</li>
                  <li>At analysere trafikmønstre</li>
                  <li>At sikre websitets sikkerhed</li>
                </ul>

                <h2>Deling af data</h2>
                <p>Vi deler ikke dine personlige oplysninger med tredjeparter, undtagen når det er påkrævet ved lov.</p>

                <h2>Dine rettigheder</h2>
                <p>Under GDPR har du ret til:</p>
                <ul>
                  <li>At få indsigt i dine data</li>
                  <li>At få rettet forkerte oplysninger</li>
                  <li>At få slettet dine data</li>
                  <li>At trække dit samtykke tilbage</li>
                </ul>

                <h2>Kontakt</h2>
                <p>For spørgsmål om privatlivspolitikken, kontakt os på: privacy@dkbettingsider.com</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
