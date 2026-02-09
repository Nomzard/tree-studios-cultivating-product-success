import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  BarChart3,
  GitBranch,
  Sparkles,
  RefreshCw,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Strategiträdet",
    desc: "Visualisera kopplingen från företagsmål hela vägen ner till teamens dagliga arbete. Varje nivå hänger ihop – och det syns.",
  },
  {
    icon: BarChart3,
    title: "Outcome-fokus",
    desc: "Flytta fokus från leveranser till effekt. Följ upp med data och evidens som visar faktisk förflyttning.",
  },
  {
    icon: GitBranch,
    title: "Levande, inte statisk",
    desc: "Inga kvartalsvis uppdaterade dokument. Tree Studios lever och uppdateras kontinuerligt i takt med er organisation.",
  },
  {
    icon: Sparkles,
    title: "Synliggör framgångar",
    desc: "Gör det enkelt att fira framsteg och visa ledningen konkret hur produktarbetet bidrar till företagets framgång.",
  },
  {
    icon: RefreshCw,
    title: "Kontinuerligt lärande",
    desc: "Bygg in insikter och lärdomar direkt i ert strategiarbete. Justera riktning baserat på verklig data.",
  },
  {
    icon: Users,
    title: "Gemensamt språk",
    desc: "Skapa en delad bild mellan produktteam, ledning och stakeholders. Alla pratar samma språk om riktning och effekt.",
  },
];

const ProductPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Produkten
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
              Från strategi till synlig effekt
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Tree Studios ersätter spridda roadmaps och presentationer med ett
              levande verktyg som visar hur allt hänger ihop – från
              företagsstrategin till det arbete som händer varje dag i teamen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 text-center">
              Hur det fungerar
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Tree Studios bygger en visuell kedja som gör det tydligt hur varje
              del av produktarbetet bidrar till helheten.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Företagsstrategi",
                desc: "Börja med era övergripande mål och strategiska prioriteringar. De blir roten i ert strategiträd.",
              },
              {
                step: "2",
                title: "Produktstrategi & initiativ",
                desc: "Koppla produktinitiativ och bets direkt till företagsmålen. Visa hur produktarbetet stödjer helheten.",
              },
              {
                step: "3",
                title: "Teamarbete & leveranser",
                desc: "Teamen kopplar sitt dagliga arbete till initiativ. Alla ser sin del i det stora sammanhanget.",
              },
              {
                step: "4",
                title: "Effekt & uppföljning",
                desc: "Mät och visualisera faktisk effekt med data. Fira framsteg och justera riktning baserat på lärande.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="container mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-16 text-center">
              Vad Tree Studios ger er
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-6 rounded-xl border border-border bg-card h-full">
                  <feat.icon className="h-7 w-7 text-primary mb-4" />
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-16 text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif text-primary-foreground mb-4">
              Vill du se Tree Studios i action?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
              Vi visar gärna hur det kan se ut för just er organisation.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Boka en demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
