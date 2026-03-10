import FadeIn from "@/components/FadeIn";
import SEO, { organizationSchema } from "@/components/SEO";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Puzzle } from "lucide-react";

const integrationContent: Record<
  string,
  {
    name: string;
    title: string;
    description: string;
    color: string;
    textColor: string;
    features: string[];
    howItWorks: { title: string; desc: string }[];
  }
> = {
  jira: {
    name: "Jira",
    title: "Tree Studios + Jira Integration",
    description:
      "Connect your Jira projects to Tree Studios and automatically sync epics, stories, and sprints into your strategy tree. See how every piece of Jira work maps to product strategy.",
    color: "bg-[#0052CC]/10",
    textColor: "text-[#0052CC]",
    features: [
      "Automatic sync of Jira epics and stories",
      "Map Jira projects to strategic initiatives",
      "Real-time status updates in the strategy tree",
      "Orphan detection for unlinked Jira work",
      "No changes needed to your Jira workflow",
      "Supports Jira Cloud and Server",
    ],
    howItWorks: [
      {
        title: "Connect your Jira instance",
        desc: "Authenticate with your Jira account and select which projects to sync. Setup takes less than 5 minutes.",
      },
      {
        title: "Map projects to strategy",
        desc: "Connect Jira projects and epics to nodes in your strategy tree. This creates the visible link between execution and strategy.",
      },
      {
        title: "Automatic sync",
        desc: "Tree Studios continuously syncs with Jira, keeping your strategy tree up to date without any manual effort from your team.",
      },
      {
        title: "Spot gaps and celebrate progress",
        desc: "See which strategic goals have active Jira work behind them — and which don't. Celebrate completed work that drives real impact.",
      },
    ],
  },
  linear: {
    name: "Linear",
    title: "Tree Studios + Linear Integration",
    description:
      "Connect Linear projects and cycles to your strategy tree. Keep using Linear for execution while Tree Studios makes the strategic connections visible.",
    color: "bg-[#5E6AD2]/10",
    textColor: "text-[#5E6AD2]",
    features: [
      "Sync Linear projects, cycles, and issues",
      "Automatic mapping to strategy tree nodes",
      "Real-time progress tracking",
      "Orphan detection for unlinked work",
      "Zero overhead for engineering teams",
      "Works with Linear's existing workflow",
    ],
    howItWorks: [
      {
        title: "Connect your Linear workspace",
        desc: "Authenticate with Linear and select teams and projects to sync. Takes less than 5 minutes to set up.",
      },
      {
        title: "Link projects to strategy",
        desc: "Connect Linear projects to strategic initiatives in your tree. Each project becomes a visible part of the bigger picture.",
      },
      {
        title: "Continuous sync",
        desc: "Tree Studios watches for changes in Linear and updates the strategy tree automatically. Your team doesn't need to do anything different.",
      },
      {
        title: "Alignment visibility",
        desc: "Leadership sees how engineering work connects to strategy. Engineers see why their work matters. Everyone wins.",
      },
    ],
  },
};

const IntegrationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const integration = slug ? integrationContent[slug] : undefined;

  if (!integration) return <Navigate to="/integrations" replace />;

  return (
    <div>
      <SEO
        title={integration.title}
        description={integration.description}
        path={`/integrations/${slug}`}
        jsonLd={organizationSchema}
      />

      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Link
              to="/integrations"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All integrations
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-14 h-14 rounded-xl ${integration.color} flex items-center justify-center`}
              >
                <Puzzle className={`h-7 w-7 ${integration.textColor}`} />
              </div>
              <h1 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                {integration.title}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              {integration.description}
            </p>
          </FadeIn>

          {/* Features */}
          <FadeIn delay={0.1}>
            <div className="bg-card border border-border rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                What you get
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {integration.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* How it works */}
          <FadeIn delay={0.2}>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8">
              How it works
            </h2>
            <div className="space-y-6 mb-12">
              {integration.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.3}>
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground text-center">
              <h3 className="text-2xl font-heading font-semibold mb-3">
                Ready to connect {integration.name}?
              </h3>
              <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
                Sign up free and connect {integration.name} to your strategy
                tree in minutes.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Sign Up Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default IntegrationPage;
