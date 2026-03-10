import heroImg from "@/assets/hero-illustration.jpg";
import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema, websiteSchema, softwareSchema } from "@/components/SEO";
import DottedArrow from "@/components/DottedArrow";
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
  Link2,
  AlertTriangle,
  Layers,
  Zap,
  Share2,
  Search,
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
      <SEO
        title="Tree Studios – Product Strategy Alignment Tool"
        description="Tree Studios helps product organizations visually connect business goals, product strategy, and team work. See how your roadmap connects to strategy."
        path="/"
        jsonLd={[organizationSchema, websiteSchema, softwareSchema]}
      />
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
                  For product teams who want clarity ✦
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.1} duration={0.7}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-primary-foreground leading-tight mb-6">
                  See how your
                  <br />
                  <span className="text-sand">roadmap connects</span>
                  <br />
                  to strategy
                </h1>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.25} duration={0.7}>
                <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-lg">
                  When stakeholders ask "why are we working on this?" — you shouldn't 
                  have to dig through slides. Tree Studios makes the link between 
                  your roadmap and product strategy visual, shareable, and always up to date.
                </p>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Get Started Free
                    <ArrowRight className="h-4 w-4" />
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

      {/* Dotted arrow: Hero → Why */}
      <div className="relative -mt-16 mb--8 flex justify-center z-20">
        <DottedArrow
          path="M10,10 C60,10 80,60 140,50 Q180,45 190,80"
          width={200}
          height={90}
          className="w-32 md:w-48 opacity-70"
          delay={0.6}
        />
      </div>

      {/* Why */}
      <section className="relative bg-background">
        <BlobShape className="top-0 right-0 w-96 h-96 -translate-y-1/3" color="bg-leaf/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-snug">
                "Why are we prioritizing this?"
                <br />
                <span className="text-moss">Sound familiar?</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The connection between what teams ship and the product strategy 
                usually lives in someone's head — or buried in a deck from last quarter. 
                When everyone interprets the strategy differently, alignment dies quietly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Dotted arrow: Why → Problems */}
      <div className="relative -mt-4 mb-0 flex justify-end pr-[15%] z-20">
        <DottedArrow
          path="M10,10 Q50,70 100,40 T190,70"
          width={200}
          height={80}
          className="w-28 md:w-40 opacity-60"
          color="hsl(var(--moss))"
          delay={0.4}
          duration={1.5}
        />
      </div>

      {/* Problem cards */}
      <section className="relative bg-card">
        <BlobShape className="bottom-10 left-0 w-72 h-72 translate-y-1/3" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="fadeDown">
             <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                The pain is real
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We keep hearing the same things from product orgs everywhere.
              </p>
            </div>
          </FadeIn>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Dotted arrows between cards — visible on lg only */}
            <div className="hidden lg:block absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 z-10">
              <DottedArrow
                path="M5,20 Q30,5 55,25"
                width={60}
                height={35}
                className="w-14 opacity-50"
                color="hsl(var(--terracotta))"
                delay={0.6}
                duration={1.0}
              />
            </div>
            <div className="hidden lg:block absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
              <DottedArrow
                path="M5,15 Q30,30 55,12"
                width={60}
                height={35}
                className="w-14 opacity-50"
                color="hsl(var(--moss))"
                delay={0.8}
                duration={1.0}
              />
            </div>
            <div className="hidden lg:block absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 z-10">
              <DottedArrow
                path="M5,22 Q30,8 55,20"
                width={60}
                height={35}
                className="w-14 opacity-50"
                color="hsl(var(--sand))"
                delay={1.0}
                duration={1.0}
              />
            </div>

            {[
              {
                icon: Link2,
                title: "\"How does this map to strategy?\"",
                desc: "PMs can't easily show how their work connects to product strategy — so everyone guesses and creates their own interpretation.",
                variant: "fadeLeft" as const,
              },
              {
                icon: AlertTriangle,
                title: "\"We read the strategy differently\"",
                desc: "Teams and leadership interpret the strategy in different ways — leading to friction, rework, and unclear decisions.",
                variant: "fadeUp" as const,
              },
              {
                icon: Layers,
                title: "\"Alignment dies after planning\"",
                desc: "After the planning workshop, teams fall back into their own lanes. The shared picture fades within weeks.",
                variant: "fadeUp" as const,
              },
              {
                icon: AlertTriangle,
                title: "\"Not another tool to maintain\"",
                desc: "If it becomes yet another place to update, adoption drops. It needs to fit into how you already work.",
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

      {/* Dotted arrow: Problems → What we do */}
      <div className="relative -mt-14 mb-0 flex justify-start pl-[20%] z-20">
        <DottedArrow
          path="M190,10 C140,15 120,60 60,45 Q20,38 10,75"
          width={200}
          height={85}
          className="w-28 md:w-44 opacity-60"
          delay={0.5}
          duration={1.6}
        />
      </div>

      {/* What we do */}
      <section className="relative bg-background">
        <BlobShape className="top-1/2 right-0 w-80 h-80 translate-x-1/3" color="bg-accent/5" />
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn variant="scale" duration={0.7}>
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 leading-snug">
                The alignment layer
                <br />
                <span className="text-moss">between strategy and delivery</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Tree Studios connects your product strategy to what teams actually work on 
                in Jira and Linear — making gaps and connections visually obvious for 
                the whole organization. Not another execution tool. An alignment layer.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Share a single link instead of slides. It's always up to date, 
                always showing the real picture — even when the strategy is messy.
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

      {/* Dotted arrow: What we do → Values */}
      <div className="relative -mt-4 mb-0 flex justify-center z-20">
        <DottedArrow
          path="M10,15 Q80,5 100,50 T190,70"
          width={200}
          height={80}
          className="w-24 md:w-36 opacity-50"
          color="hsl(var(--sand))"
          delay={0.3}
          duration={1.4}
        />
      </div>

      {/* Values */}
      <section className="relative bg-forest">
        <BlobShape className="top-10 right-10 w-64 h-64" color="bg-leaf/10" />
        <BlobShape className="bottom-10 left-20 w-48 h-48" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-foreground mb-4">
                What changes in the first week
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed">
                Real gains, not just promises. Here's what teams tell us.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Faster alignment",
                desc: "Go from weeks of planning sync to continuous alignment. Connect an initiative to an objective in seconds — and stop guessing.",
                variant: "fadeLeft" as const,
              },
              {
                icon: Search,
                title: "See the gaps, not just the plan",
                desc: "Orphan detection flags initiatives without a clear strategy link. You'll see what's missing — not pretend everything is 100% aligned.",
                variant: "fadeUp" as const,
              },
              {
                icon: Share2,
                title: "One link replaces the deck",
                desc: "Share a living Tree view with stakeholders. They'll instantly see what's happening and why — without scheduling a meeting.",
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

    </div>
  );
};

export default Index;
