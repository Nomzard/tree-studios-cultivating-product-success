import FadeIn from "@/components/FadeIn";
import teamWontstop from "@/assets/team-wontstop.svg";
import teamChilly from "@/assets/team-chilly.svg";
import teamBueno from "@/assets/team-bueno.svg";
import teamWaiting from "@/assets/team-waiting.svg";

const members = [
  {
    name: "Won't Stop",
    role: "CEO & Founder",
    img: teamWontstop,
    bio: "Former CPO with 12 years of product leadership experience. Tired of explaining product value in PowerPoint decks – so she built something better.",
    bgSize: "300%",
    bgPos: "52% 8%",
  },
  {
    name: "Chilly",
    role: "CTO & Co-founder",
    img: teamChilly,
    bio: "Systems architect with a passion for making complexity understandable. Believes great tools should feel like an extension of your thinking.",
    bgSize: "300%",
    bgPos: "50% 5%",
  },
  {
    name: "Bueno",
    role: "Head of Design",
    img: teamBueno,
    bio: "Interaction designer who has worked with everything from startups to enterprises. Obsessed with making the hard things simple and the dry things beautiful.",
    bgSize: "280%",
    bgPos: "55% 8%",
  },
  {
    name: "Waiting",
    role: "Head of Product",
    img: teamWaiting,
    bio: "Product strategist who believes the best features are the ones you don't have to explain. Passionate about user-centered design and data-driven decisions.",
    bgSize: "280%",
    bgPos: "48% 12%",
  },
];

const TeamPage = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              The Team
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              The people behind Tree Studios
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We've all lived inside product organizations and seen the problems
              from within. Tree Studios is the tool we wished we'd had.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {members.map((m, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="text-center">
                <div
                  className="w-40 h-40 rounded-full mx-auto mb-5 border-4 border-secondary"
                  style={{
                    backgroundImage: `url(${m.img})`,
                    backgroundSize: m.bgSize || '280%',
                    backgroundPosition: m.bgPos || 'center 15%',
                    backgroundRepeat: 'no-repeat',
                  }}
                  role="img"
                  aria-label={m.name}
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
              What we believe in
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Humility",
                desc: "We don't have all the answers. But we listen, learn, and build forward together with you.",
              },
              {
                title: "Transparency",
                desc: "We believe in openness – in our tool, in our pricing, and in how we work.",
              },
              {
                title: "Impact over output",
                desc: "We practice what we preach. Everything we build should create real difference, not just look good.",
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
