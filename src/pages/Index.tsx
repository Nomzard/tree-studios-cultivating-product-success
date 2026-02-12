import heroTreeImg from "@/assets/hero-tree-illustration.png";
import FadeIn from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Target, Eye, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest">
        {/* Decorative organic shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-sand/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-leaf/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-accent/8 blur-2xl" />

        <div className="container mx-auto px-6 pt-20 pb-8 md:pt-32 md:pb-12 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-sm font-medium text-leaf tracking-wide uppercase mb-5">
                For product teams that want to make a difference
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary-foreground leading-tight mb-6">
                Make the link between{" "}
                <span className="text-sand">strategy and impact</span>{" "}
                visible
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl mx-auto">
                Tree Studios helps product organizations visually connect
                business goals, product strategy, and team work – so everyone
                can see how their efforts actually drive success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-forest px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/produkt"
                  className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
                >
                  Explore the Product
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero illustration */}
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn delay={0.2}>
            <img
              src={heroTreeImg}
              alt="Illustration of a tree connecting strategy, teams and impact"
              className="w-full max-w-4xl mx-auto rounded-2xl"
            />
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="bg-card">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
                The problem we see
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Product teams deliver tons of value – but it rarely shows up in
                the boardroom. The connection between daily work and business
                goals gets lost.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Invisible value",
                desc: "Leadership struggles to see how product work contributes to business objectives.",
              },
              {
                icon: Target,
                title: "Strategy without connection",
                desc: "Product teams rarely know how their work ties into the company's direction.",
              },
              {
                icon: TreePine,
                title: "Output over outcome",
                desc: "Roadmaps show deliverables, not impact. That creates a false sense of security.",
              },
              {
                icon: TrendingUp,
                title: "Hard to celebrate progress",
                desc: "Without a visible connection, it's hard to see and celebrate real progress.",
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
                A living picture of your product work
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Tree Studios gives you a dynamic tool that connects{" "}
                <strong className="text-foreground">business strategy</strong>,{" "}
                <strong className="text-foreground">product initiatives</strong>,{" "}
                <strong className="text-foreground">team work</strong>, and{" "}
                <strong className="text-foreground">real impact</strong> – visually and in real time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Not another roadmap. A tool that grows and evolves as your
                organization learns more.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link
                to="/produkt"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Learn more about the product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust badge */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <FadeIn>
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
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-16 md:py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-4">
              Curious? Let's talk.
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              We believe in dialogue before demos. Tell us what you're
              struggling with, and let's explore together whether Tree Studios
              can help.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity active:scale-95"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
