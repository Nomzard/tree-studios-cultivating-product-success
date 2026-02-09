import heroImg from "@/assets/hero-illustration.jpg";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Target, Eye, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
                För produktteam som vill göra skillnad
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight mb-6">
                Gör kopplingen mellan{" "}
                <span className="text-gradient-green">strategi och effekt</span>{" "}
                synlig
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
                Tree Studios hjälper produktorganisationer att visuellt binda ihop
                företagsmål, produktstrategi och teamarbete – så att alla ser hur
                arbetet faktiskt bidrar till framgång.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Boka en demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/produkt"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors"
                >
                  Utforska produkten
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <img
                src={heroImg}
                alt="Illustration av ett träd som symboliserar kopplingen mellan strategi och effekt"
                className="w-full rounded-2xl"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Problemet vi ser
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Produktteam levererar massor av värde – men det syns sällan i
                ledningsgruppen. Kopplingen mellan det dagliga arbetet och
                företagets mål går förlorad.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Osynligt värde",
                desc: "Ledningen har svårt att se hur produktarbetet bidrar till affärsmålen.",
              },
              {
                icon: Target,
                title: "Strategi utan koppling",
                desc: "Produktteam vet sällan hur deras arbete hänger ihop med företagets riktning.",
              },
              {
                icon: TreePine,
                title: "Output istället för outcome",
                desc: "Roadmaps visar leveranser, inte effekt. Det skapar en falsk trygghet.",
              },
              {
                icon: TrendingUp,
                title: "Svårt att fira framsteg",
                desc: "Utan synlig koppling blir det svårt att se och fira faktiska förflyttningar.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-background rounded-xl p-6 h-full border border-border">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solution teaser */}
      <section>
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                En levande bild av ert produktarbete
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Tree Studios ger er ett dynamiskt verktyg som binder ihop{" "}
                <strong className="text-foreground">företagsstrategi</strong>,{" "}
                <strong className="text-foreground">produktinitiativ</strong>,{" "}
                <strong className="text-foreground">teamarbete</strong> och{" "}
                <strong className="text-foreground">faktisk effekt</strong> – visuellt och i realtid.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Inte ytterligare en roadmap. Utan ett verktyg som växer och
                förändras i takt med att ni lär er mer.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                to="/produkt"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Läs mer om produkten
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-16 md:py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-4">
              Nyfiken? Låt oss prata.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Vi tror på dialog före demo. Berätta vad ni brottas med, så
              utforskar vi tillsammans om Tree Studios kan hjälpa.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Boka ett samtal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
