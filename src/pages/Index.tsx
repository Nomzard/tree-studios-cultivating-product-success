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

/* Reusable SVG wave dividers */
const WaveDivider = ({
  fill = "hsl(var(--background))",
  parentFill = "transparent",
  flip = false,
  className = "",
}: {
  fill?: string;
  parentFill?: string;
  flip?: boolean;
  className?: string;
}) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`} style={{ marginTop: '-1px', marginBottom: '-1px' }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
    >
      <path
        d="M0,0 L0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,0 Z"
        fill={parentFill}
      />
      <path
        d="M0,40 C240,100 480,0 720,50 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
        fill={fill}
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
                <p className="text-sm font-medium text-leaf tracking-wide uppercase mb-5">
                  Open up the conversation
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.1} duration={0.7}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6">
                  Where{" "}
                  <span className="text-sand italic">strategy</span>{" "}
                  meets everyday work
                </h1>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.25} duration={0.7}>
                <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
                  Tree Studios helps product organizations have better conversations 
                  — by making the connection between business goals and team efforts 
                  visible for everyone. Not just leadership. Everyone.
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/"
                    className="inline-flex items-center justify-center gap-2 bg-sand text-forest px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Let's talk
                    <MessageCircle className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/produkt"
                    className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    Explore the product
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn variant="scale" delay={0.3} duration={0.9}>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src={heroImg}
                  alt="Illustration of a tree symbolizing the connection between strategy and impact"
                  className="w-full"
                />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Organic wave transition to next section */}
        <WaveDivider fill="hsl(var(--background))" parentFill="hsl(var(--forest))" />
      </section>

      {/* Conversation opener */}
      <section className="relative">
        <BlobShape className="top-0 right-0 w-96 h-96 -translate-y-1/3" color="bg-leaf/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-moss tracking-wide uppercase mb-5">
                <Sparkles className="h-4 w-4" />
                Why we exist
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-snug">
                Product teams do incredible work.{" "}
                <span className="text-moss italic">But who sees it?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The connection between what teams ship every day and where the company 
                is heading often lives in someone's head — or worse, in a spreadsheet 
                no one opens. We think that connection deserves to be alive, visual, 
                and open for everyone to explore.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem cards */}
      <section className="relative bg-card">
        <WaveDivider fill="hsl(var(--card))" parentFill="hsl(var(--background))" flip className="absolute top-0 left-0 -translate-y-[99%]" />
        <BlobShape className="bottom-10 left-0 w-72 h-72 translate-y-1/3" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="fadeDown">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                Sound familiar?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These are the conversations we hear again and again when 
                talking to product organizations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "\"No one sees what we do\"",
                desc: "Teams ship value constantly, but leadership struggles to connect it to business outcomes.",
                variant: "fadeLeft" as const,
              },
              {
                icon: Target,
                title: "\"Strategy feels distant\"",
                desc: "There's a company strategy somewhere, but it doesn't live in the tools teams use every day.",
                variant: "fadeUp" as const,
              },
              {
                icon: TreePine,
                title: "\"We track output, not impact\"",
                desc: "Roadmaps show features and dates. But what actually moved the needle? That's harder to see.",
                variant: "fadeUp" as const,
              },
              {
                icon: TrendingUp,
                title: "\"We can't celebrate wins\"",
                desc: "Without a clear view of how work connects to goals, it's hard to know when to high-five.",
                variant: "fadeRight" as const,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.12} variant={item.variant}>
                <div className="bg-background rounded-[1.5rem] p-7 h-full border border-border hover:border-moss/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[1rem] bg-leaf/10 flex items-center justify-center mb-4 group-hover:bg-leaf/20 transition-colors">
                    <item.icon className="h-6 w-6 text-moss" />
                  </div>
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

        <WaveDivider fill="hsl(var(--background))" parentFill="hsl(var(--card))" />
      </section>

      {/* Solution */}
      <section className="relative">
        <BlobShape className="top-1/2 right-0 w-80 h-80 translate-x-1/3" color="bg-accent/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn variant="scale" duration={0.7}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-moss tracking-wide uppercase mb-5">
                <TreePine className="h-4 w-4" />
                What Tree Studios does
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-snug">
                A living picture that{" "}
                <span className="text-moss italic">invites conversation</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Tree Studios gives your organization a shared, visual space where{" "}
                <strong className="text-foreground">business strategy</strong>,{" "}
                <strong className="text-foreground">product initiatives</strong>,{" "}
                <strong className="text-foreground">team work</strong>, and{" "}
                <strong className="text-foreground">real impact</strong>{" "}
                all connect — openly and in real time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                It's not another roadmap tool. It's a conversation starter that grows 
                as your organization learns.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={0.3}>
              <Link
                to="/produkt"
                className="inline-flex items-center gap-2 text-moss font-medium hover:text-primary transition-colors group"
              >
                Explore how it works
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Conversation values */}
      <section className="relative bg-forest">
        <WaveDivider fill="hsl(var(--forest))" parentFill="hsl(var(--background))" flip className="absolute top-0 left-0 -translate-y-[99%]" />
        <BlobShape className="top-10 right-10 w-64 h-64" color="bg-leaf/10" />
        <BlobShape className="bottom-10 left-20 w-48 h-48" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-4">
                Built for open organizations
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                We believe the best product work happens when everyone 
                can see the bigger picture — not just the people in the room.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Users,
                title: "For the whole team",
                desc: "Not just PMs and leadership. Engineers, designers, stakeholders — everyone gets a seat at the table.",
                variant: "fadeLeft" as const,
              },
              {
                icon: MessageCircle,
                title: "Starts a conversation",
                desc: "When work and strategy are visible side by side, better questions get asked. That's the point.",
                variant: "fadeUp" as const,
              },
              {
                icon: TreePine,
                title: "Grows organically",
                desc: "Like a real tree, your picture of strategy evolves. No need for big planning events — it lives and breathes.",
                variant: "fadeRight" as const,
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.15} variant={item.variant}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5 hover:scale-105 transition-transform">
                    <item.icon className="h-7 w-7 text-leaf" />
                  </div>
                  <h3 className="font-serif text-xl text-primary-foreground mb-3">
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

        <WaveDivider fill="hsl(var(--background))" parentFill="hsl(var(--forest))" />
      </section>

      {/* Trust badge */}
      <section>
        <div className="container mx-auto px-6 py-12 md:py-16">
          <FadeIn variant="blur">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-lg">🇸🇪</span>
                <span>Designed & built in Sweden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🇪🇺</span>
                <span>All infrastructure hosted in Europe</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🔒</span>
                <span>GDPR compliant by design</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-moss">
        <WaveDivider fill="hsl(var(--moss))" parentFill="hsl(var(--background))" flip className="absolute top-0 left-0 -translate-y-[99%]" />
        <BlobShape className="top-0 left-1/4 w-72 h-72" color="bg-leaf/10" />

        <div className="container mx-auto px-6 py-16 md:py-24 text-center relative z-10">
          <FadeIn variant="scale" duration={0.8}>
            <MessageCircle className="h-10 w-10 text-primary-foreground/40 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-4">
              Curious? Let's have a conversation.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
              No demo pressure, no sales pitch. Just an honest chat about 
              what you're working on and whether Tree Studios could help.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-sand text-forest px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95 text-lg"
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