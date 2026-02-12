import heroImg from "@/assets/hero-illustration.jpg";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TreePine,
  Target,
  Eye,
  TrendingUp,
  MessageCircle,
  Users,
  Sparkles,
} from "lucide-react";

/* Single SVG wave — top half is "from" color, bottom half is "to" color */
const WaveDivider = ({
  from,
  to,
}: {
  from: string;
  to: string;
}) => (
  <div className="w-full overflow-hidden leading-[0] relative" style={{ marginTop: '-1px', marginBottom: '-1px' }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="block w-full h-[60px] md:h-[80px] lg:h-[120px]"
    >
      <path
        d="M0,0 L0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,0 Z"
        fill={from}
      />
      <path
        d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        fill={to}
      />
    </svg>
  </div>
);

const BlobShape = ({
  className = "",
  color = "bg-sand/10",
}: {
  className?: string;
  color?: string;
}) => (
  <div
    className={`absolute rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${color} blur-3xl pointer-events-none ${className}`}
  />
);

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-forest min-h-[90vh] flex flex-col justify-center">
        <BlobShape className="top-10 left-10 w-72 h-72" color="bg-sand/10" />
        <BlobShape className="bottom-20 right-10 w-80 h-80" color="bg-leaf/15" />
        <BlobShape className="top-1/3 right-1/4 w-48 h-48" color="bg-accent/8" />
        <BlobShape className="bottom-1/4 left-1/4 w-56 h-56" color="bg-moss/10" />

        <div className="container mx-auto px-6 pt-28 pb-12 md:pt-40 md:pb-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn variant="blur" duration={0.8}>
                <p className="text-sm font-medium text-terracotta tracking-wide mb-5">
                  Let's build this together ✦
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.1} duration={0.7}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-6">
                  Make the work
                  <br />
                  <span className="text-sand">everyone does</span>
                  <br />
                  visible
                </h1>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.25} duration={0.7}>
                <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
                  Most teams do amazing work that nobody outside their circle ever sees. 
                  We're changing that — by giving everyone a shared picture of how 
                  daily work connects to the bigger story.
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Join the conversation
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/produkt"
                    className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    See how it works
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn variant="scale" delay={0.3} duration={0.9}>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={heroImg}
                  alt="Illustration of a tree symbolizing connected work"
                  className="w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(var(--forest))" to="hsl(var(--background))" />

      {/* Why */}
      <section className="relative bg-background">
        <BlobShape className="top-0 right-0 w-96 h-96 -translate-y-1/3" color="bg-leaf/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-snug">
                Great work happens every day.
                <br />
                <span className="text-moss">But does anyone see it?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The link between what teams ship and where the company is heading 
                usually lives in someone's head — or buried in a spreadsheet. 
                We think everyone deserves to see how their work matters.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <WaveDivider from="hsl(var(--background))" to="hsl(var(--card))" />

      {/* Problem cards */}
      <section className="relative bg-card">
        <BlobShape className="bottom-10 left-0 w-72 h-72 translate-y-1/3" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="fadeDown">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                Sound familiar?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We keep hearing the same things from product teams everywhere.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "\"Nobody sees what we do\"",
                desc: "You ship value constantly, but it's invisible to the rest of the org.",
                variant: "fadeLeft" as const,
              },
              {
                icon: Target,
                title: "\"Strategy feels far away\"",
                desc: "There's a strategy somewhere, but it doesn't live where your team works.",
                variant: "fadeUp" as const,
              },
              {
                icon: TreePine,
                title: "\"We measure output, not impact\"",
                desc: "Roadmaps show features and dates. But what actually moved the needle?",
                variant: "fadeUp" as const,
              },
              {
                icon: TrendingUp,
                title: "\"We never celebrate wins\"",
                desc: "Without seeing how work connects to goals, it's hard to know when to high-five.",
                variant: "fadeRight" as const,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.12} variant={item.variant}>
                <div className="bg-background rounded-[1.5rem] p-7 h-full border border-border hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[1rem] bg-terracotta/10 flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                    <item.icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
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

      <WaveDivider from="hsl(var(--card))" to="hsl(var(--background))" />

      {/* What we do */}
      <section className="relative bg-background">
        <BlobShape className="top-1/2 right-0 w-80 h-80 translate-x-1/3" color="bg-accent/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn variant="scale" duration={0.7}>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-snug">
                A shared picture that
                <br />
                <span className="text-moss">grows with your team</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Tree Studios gives everyone in your organization a living, visual space 
                where strategy, initiatives, team work, and real impact all connect — 
                openly and in real time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                It's not a roadmap tool. It's a place where your whole org can see 
                the story of what you're building together.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={0.3}>
              <Link
                to="/produkt"
                className="inline-flex items-center gap-2 text-terracotta font-medium hover:text-warm transition-colors group"
              >
                See how it works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(var(--background))" to="hsl(var(--forest))" />

      {/* Values */}
      <section className="relative bg-forest">
        <BlobShape className="top-10 right-10 w-64 h-64" color="bg-leaf/10" />
        <BlobShape className="bottom-10 left-20 w-48 h-48" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
                Made for everyone, not just the few
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                The best ideas come when the whole team can see the bigger picture — 
                not just the people in the planning room.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "Everyone gets a seat",
                desc: "Engineers, designers, stakeholders, leadership — this is for all of you. Not just PMs.",
                variant: "fadeLeft" as const,
              },
              {
                icon: MessageCircle,
                title: "Better questions get asked",
                desc: "When work and direction are side by side, conversations change. That's the whole point.",
                variant: "fadeUp" as const,
              },
              {
                icon: TreePine,
                title: "It grows with you",
                desc: "No big planning events needed. Your picture of strategy evolves naturally, like a living thing.",
                variant: "fadeRight" as const,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} variant={item.variant}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 hover:scale-105 transition-transform">
                    <item.icon className="h-7 w-7 text-terracotta" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="hsl(var(--forest))" to="hsl(var(--background))" />

      {/* Trust */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <FadeIn variant="blur">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇸🇪</span>
                <span>Designed & built in Sweden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇪🇺</span>
                <span>Hosted in Europe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span>GDPR by design</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <WaveDivider from="hsl(var(--background))" to="hsl(var(--moss))" />

      {/* CTA */}
      <section className="relative bg-moss">
        <BlobShape className="top-0 left-1/4 w-72 h-72" color="bg-leaf/10" />

        <div className="container mx-auto px-6 py-16 md:py-24 text-center relative z-10">
          <FadeIn variant="scale" duration={0.8}>
            <MessageCircle className="h-10 w-10 text-primary-foreground/40 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
              Curious? Let's talk.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              No sales pitch, no pressure. Just an honest conversation about 
              what you're working on and whether we can help.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-terracotta text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 text-lg"
            >
              Start a conversation
              <MessageCircle className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
