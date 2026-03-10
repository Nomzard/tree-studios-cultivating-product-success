import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, Puzzle } from "lucide-react";

const integrations = [
  {
    slug: "jira",
    name: "Jira",
    desc: "Connect your Jira projects to the strategy tree. See how epics and stories map to product strategy — automatically.",
    color: "bg-[#0052CC]/10",
    textColor: "text-[#0052CC]",
  },
  {
    slug: "linear",
    name: "Linear",
    desc: "Sync Linear projects and cycles into the strategy tree. Keep alignment visible without leaving your favorite tool.",
    color: "bg-[#5E6AD2]/10",
    textColor: "text-[#5E6AD2]",
  },
];

const IntegrationsPage = () => {
  return (
    <div>
      <SEO
        title="Integrations – Connect Jira, Linear & More"
        description="Tree Studios integrates with Jira, Linear, and more. Automatically sync team work into your strategy tree and keep alignment visible."
        path="/integrations"
        jsonLd={organizationSchema}
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
              Integrations
            </p>
            <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground mb-6">
              Works with the tools you already use
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tree Studios connects to your existing workflow tools. No need to
              change how your teams work — just make the strategic connections
              visible.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {integrations.map((integration, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link
                to={`/integrations/${integration.slug}`}
                className="block group"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div
                    className={`w-14 h-14 rounded-xl ${integration.color} flex items-center justify-center mb-5`}
                  >
                    <Puzzle className={`h-7 w-7 ${integration.textColor}`} />
                  </div>
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {integration.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {integration.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="max-w-2xl mx-auto text-center bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              More integrations coming soon
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're building integrations with Asana, Monday.com, Notion, and
              more. Want to be the first to know?
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

export default IntegrationsPage;
