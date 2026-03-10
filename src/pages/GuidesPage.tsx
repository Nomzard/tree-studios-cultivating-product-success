import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

const guides = [
  {
    slug: "product-strategy-alignment",
    title: "The Complete Guide to Product Strategy Alignment",
    description:
      "Learn how to connect your business goals to team work with a strategy tree. A step-by-step framework for product leaders who want clarity, not complexity.",
    readTime: "12 min read",
    tags: ["Strategy", "Alignment", "Framework"],
    featured: true,
  },
  {
    slug: "roadmap-to-strategy-connection",
    title: "How to Connect Your Roadmap to Business Strategy",
    description:
      "Most roadmaps exist in isolation. This guide shows you how to create visible links between what teams ship and why it matters.",
    readTime: "8 min read",
    tags: ["Roadmap", "Strategy", "Product Management"],
    featured: false,
  },
  {
    slug: "outcome-driven-product-teams",
    title: "Building Outcome-Driven Product Teams",
    description:
      "Shift your team's focus from output to outcomes. Learn practical techniques for measuring impact and making progress visible.",
    readTime: "10 min read",
    tags: ["Outcomes", "Teams", "Impact"],
    featured: false,
  },
  {
    slug: "strategy-tree-vs-okrs",
    title: "Strategy Tree vs OKRs: Which Framework Fits Your Team?",
    description:
      "Understand the differences between strategy trees and OKRs, when to use each, and how they can work together for better alignment.",
    readTime: "7 min read",
    tags: ["OKRs", "Strategy Tree", "Comparison"],
    featured: false,
  },
];

const GuidesPage = () => {
  const featured = guides.find((g) => g.featured);
  const rest = guides.filter((g) => !g.featured);

  return (
    <div>
      <SEO
        title="Guides – Product Strategy & Alignment Resources"
        description="In-depth guides on product strategy alignment, roadmap planning, outcome-driven teams, and building a strategy tree. Written by the Tree Studios team."
        path="/guides"
        jsonLd={organizationSchema}
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Resources
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Guides & frameworks
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practical insights on product strategy, alignment, and
              outcome-driven work — from the team building Tree Studios.
            </p>
          </div>
        </FadeIn>

        {/* Featured guide */}
        {featured && (
          <FadeIn>
            <Link
              to={`/guides/${featured.slug}`}
              className="block max-w-4xl mx-auto mb-16 group"
            >
              <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground hover:opacity-95 transition-opacity">
                <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4">
                  <BookOpen className="h-4 w-4" />
                  <span>Featured Guide</span>
                  <span className="mx-2">·</span>
                  <Clock className="h-4 w-4" />
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-semibold mb-4 group-hover:underline decoration-2 underline-offset-4">
                  {featured.title}
                </h2>
                <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mb-6">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-2 font-medium text-sm">
                  Read guide
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </FadeIn>
        )}

        {/* Guide grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {rest.map((guide, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                to={`/guides/${guide.slug}`}
                className="block h-full group"
              >
                <div className="bg-card border border-border rounded-2xl p-7 h-full flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{guide.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="container mx-auto px-6 py-16">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Want to see strategy alignment in action?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a demo and we'll show you how Tree Studios makes it work.
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default GuidesPage;
