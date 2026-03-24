import heroImg from "@/assets/hero-illustration.jpg";
import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema, websiteSchema, softwareSchema } from "@/components/SEO";

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
    <div className="overflow-hidden bg-secondary">
      <SEO
        title="Tree Studios – Product Strategy Alignment Tool"
        description="Tree Studios helps product organizations visually connect business goals, product strategy, and team work. See how your roadmap connects to strategy."
        path="/"
        jsonLd={[organizationSchema, websiteSchema, softwareSchema]}
      />
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col justify-center">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
                  See how your
                  <br />
                  <span className="text-moss">roadmap connects</span>
                  <br />
                  to strategy
                </h1>
              </FadeIn>
              <FadeIn variant="fadeUp" delay={0.25} duration={0.7}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
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
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-full font-medium hover:bg-muted transition-colors"
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


      {/* Why */}
      <section className="relative">
        <BlobShape className="top-0 right-0 w-96 h-96 -translate-y-1/3" color="bg-leaf/5" />
        <div className="container mx-auto px-6 py-10 md:py-14">
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


      {/* Problem cards */}
      <section className="relative">
        <BlobShape className="bottom-10 left-0 w-72 h-72 translate-y-1/3" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-10 md:py-14 relative z-10">
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
                <div className="bg-card rounded-[1.5rem] p-7 h-full border border-border hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group">
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


      {/* What we do */}
      <section className="relative">
        <BlobShape className="top-1/2 right-0 w-80 h-80 translate-x-1/3" color="bg-accent/5" />
        <div className="container mx-auto px-6 py-10 md:py-14">
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


      {/* Values */}
      <section className="relative">
        <BlobShape className="top-10 right-10 w-64 h-64" color="bg-leaf/10" />
        <BlobShape className="bottom-10 left-20 w-48 h-48" color="bg-sand/8" />

        <div className="container mx-auto px-6 py-10 md:py-14 relative z-10">
          <FadeIn variant="blur" duration={0.8}>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4">
                What changes in the first week
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
                  <div className="w-16 h-16 rounded-[1.25rem] bg-muted flex items-center justify-center mx-auto mb-5 hover:scale-105 transition-transform">
                    <item.icon className="h-7 w-7 text-terracotta" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
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

    </div>
  );
};

export default Index;
