import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CookiesPage() {
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
              <h1 className="text-4xl font-bold mb-8">Cookie Politik</h1>

              <div className="prose prose-lg max-w-none">
                <h2>Hvad er cookies?</h2>
                <p>
                  Cookies er små tekstfiler, der gemmes på din computer eller mobile enhed, når du besøger et website.
                  De hjælper websitet med at huske dine præferencer og forbedre din brugeroplevelse.
                </p>

                <h2>Hvordan bruger vi cookies?</h2>
                <p>Vi bruger cookies til følgende formål:</p>
                <ul>
                  <li>
                    <strong>Nødvendige cookies:</strong> Disse er påkrævet for at websitet kan fungere korrekt
                  </li>
                  <li>
                    <strong>Analytiske cookies:</strong> Hjælper os med at forstå, hvordan besøgende bruger websitet
                  </li>
                  <li>
                    <strong>Marketing cookies:</strong> Bruges til at vise relevante annoncer
                  </li>
                </ul>

                <h2>Dine rettigheder</h2>
                <p>
                  Du kan til enhver tid ændre dine cookie-præferencer i din browsers indstillinger. Bemærk at
                  deaktivering af cookies kan påvirke funktionaliteten af websitet.
                </p>

                <h2>Kontakt os</h2>
                <p>
                  Hvis du har spørgsmål om vores brug af cookies, er du velkommen til at kontakte os på
                  dkbettingsider.com.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
