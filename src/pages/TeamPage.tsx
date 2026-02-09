import FadeIn from "@/components/FadeIn";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const members = [
  {
    name: "Emma Lindström",
    role: "VD & Grundare",
    img: team1,
    bio: "Tidigare CPO med 12 års erfarenhet av produktledning. Trött på att förklara produktvärde i PowerPoint-presentationer – så hon byggde något bättre.",
  },
  {
    name: "Johan Eriksson",
    role: "CTO & Medgrundare",
    img: team2,
    bio: "Systemarkitekt med passion för att göra komplexitet begriplig. Tror på att bra verktyg ska kännas som en förlängning av tanken.",
  },
  {
    name: "Sara Nilsson",
    role: "Head of Design",
    img: team3,
    bio: "Interaktionsdesigner som har jobbat med allt från startups till storbolag. Besatt av att göra det svåra enkelt och det torra vackert.",
  },
];

const TeamPage = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Teamet
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Människorna bakom Tree Studios
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi har alla levt i produktorganisationer och sett problemen
              inifrån. Tree Studios är det verktyg vi själva önskade att vi hade
              haft.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="text-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-5 border-4 border-secondary"
                />
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {m.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {m.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20">
          <FadeIn>
            <h2 className="text-3xl font-serif text-foreground mb-12 text-center">
              Vad vi tror på
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Ödmjukhet",
                desc: "Vi har inte alla svar. Men vi lyssnar, lär oss och bygger vidare tillsammans med er.",
              },
              {
                title: "Transparens",
                desc: "Vi tror på öppenhet – i vårt verktyg, i våra priser och i hur vi jobbar.",
              },
              {
                title: "Effekt framför output",
                desc: "Vi lever som vi lär. Allt vi bygger ska skapa verklig skillnad, inte bara se bra ut.",
              },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center">
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
