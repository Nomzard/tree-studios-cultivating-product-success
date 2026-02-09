import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const tiers = [
  {
    name: "Grow",
    price: "4 900",
    period: "kr/mån",
    desc: "För produktteam som vill komma igång med outcome-fokuserat arbete.",
    features: [
      "Upp till 3 produktteam",
      "Strategiträd med 2 nivåer",
      "Grundläggande uppföljning",
      "E-postsupport",
      "Onboarding-session",
    ],
    highlighted: false,
  },
  {
    name: "Forest",
    price: "12 900",
    period: "kr/mån",
    desc: "För produktorganisationer som vill synliggöra effekt på riktigt.",
    features: [
      "Obegränsat antal team",
      "Fullt strategiträd (alla nivåer)",
      "Avancerad data & uppföljning",
      "Prioriterad support",
      "Dedikerad onboarding",
      "Integrationer (Jira, Linear m.fl.)",
      "Roller & behörigheter",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Kontakta oss",
    period: "",
    desc: "För stora organisationer med specifika behov kring säkerhet och skalbarhet.",
    features: [
      "Allt i Forest",
      "SSO & avancerad säkerhet",
      "Anpassade integrationer",
      "Dedikerad kundansvarig",
      "SLA-avtal",
      "On-premise möjlighet",
    ],
    highlighted: false,
  },
];

const PricingPage = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Priser
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Enkla, ärliga priser
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Inga dolda avgifter. Inga långa bindningstider. Börja där ni är
              och väx i er egen takt.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground ring-2 ring-primary"
                    : "bg-card border border-border"
                }`}
              >
                <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-semibold">{tier.price}</span>
                  {tier.period && (
                    <span
                      className={`text-sm ml-1 ${
                        tier.highlighted
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    tier.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.desc}
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          tier.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-opacity hover:opacity-90 ${
                    tier.highlighted
                      ? "bg-primary-foreground text-primary"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {tier.price === "Kontakta oss" ? "Kontakta oss" : "Kom igång"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ-ish section */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif text-foreground mb-4">
                Osäker? Fråga oss.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Vi tror inte på hård säljpress. Boka ett avslappnat samtal så
                berättar vi mer och lyssnar på era utmaningar. Inget köptvång.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Boka ett samtal
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
