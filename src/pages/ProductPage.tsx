import FadeIn from "@/components/FadeIn";
import SEO, { softwareSchema } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  BarChart3,
  GitBranch,
  Sparkles,
  RefreshCw,
  Users,
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

const features = [
  {
    icon: Layers,
    title: "The Strategy Tree",
    desc: "Visualize the connection from business goals all the way down to your teams' daily work. Every level is connected – and it shows.",
  },
  {
    icon: BarChart3,
    title: "Outcome-focused",
    desc: "Shift focus from deliverables to impact. Follow up with data and evidence that shows real progress.",
  },
  {
    icon: GitBranch,
    title: "Living, not static",
    desc: "No quarterly updated documents. Tree Studios lives and evolves continuously alongside your organization.",
  },
  {
    icon: Sparkles,
    title: "Make success visible",
    desc: "Make it easy to celebrate progress and show leadership exactly how product work drives business success.",
  },
  {
    icon: RefreshCw,
    title: "Continuous learning",
    desc: "Build insights and learnings directly into your strategy work. Adjust direction based on real data.",
  },
  {
    icon: Users,
    title: "A shared language",
    desc: "Create a shared picture between product teams, leadership, and stakeholders. Everyone speaks the same language about direction and impact.",
  },
];

const ProductPage = () => {
  return (
    <div className="overflow-hidden bg-secondary">
      <SEO
        title="Product – The Strategy Tree"
        description="Tree Studios replaces scattered roadmaps with a living strategy tree that shows how everything connects — from business strategy to daily team work."
        path="/product"
        jsonLd={softwareSchema}
      />
      {/* Hero */}
      <section className="relative">
        <BlobShape className="top-10 left-10 w-72 h-72" color="bg-sand/10" />
        <BlobShape className="bottom-20 right-10 w-80 h-80" color="bg-leaf/15" />
        <div className="container mx-auto px-6 py-10 md:py-14">
          <div className="max-w-2xl mx-auto text-center">
            <FadeIn>
              <p className="text-sm font-medium text-moss tracking-wide uppercase mb-4">
                The Product
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-semibold text-foreground leading-tight mb-6">
                From strategy to visible impact
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Tree Studios replaces scattered roadmaps and presentations with a
                living tool that shows how everything connects – from business
                strategy to the work happening every day in your teams.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative">
        <BlobShape className="top-0 right-0 w-96 h-96 -translate-y-1/3" color="bg-leaf/5" />
        <div className="container mx-auto px-6 py-10 md:py-14">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-4 text-center">
              How it works
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Tree Studios builds a visual chain that makes it clear how every
              part of your product work contributes to the whole.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Business Strategy",
                desc: "Start with your overarching goals and strategic priorities. They become the root of your strategy tree.",
              },
              {
                step: "2",
                title: "Product Strategy & Initiatives",
                desc: "Connect product initiatives and bets directly to business goals. Show how product work supports the bigger picture.",
              },
              {
                step: "3",
                title: "Team Work & Deliverables",
                desc: "Teams connect their daily work to initiatives. Everyone sees their part in the bigger context.",
              },
              {
                step: "4",
                title: "Impact & Follow-up",
                desc: "Measure and visualize real impact with data. Celebrate progress and adjust direction based on learnings.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta text-white flex items-center justify-center font-heading font-semibold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative">
        <BlobShape className="bottom-10 left-0 w-72 h-72 translate-y-1/3" color="bg-sand/8" />
        <div className="container mx-auto px-6 py-10 md:py-14 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-16 text-center">
              What Tree Studios gives you
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="p-7 rounded-[1.5rem] border border-border bg-card h-full hover:border-terracotta/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-[1rem] bg-terracotta/10 flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors">
                    <feat.icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="container mx-auto px-6 py-10 md:py-14 text-center">
          <FadeIn>
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Ready to try Tree Studios?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Sign up for free and start building your strategy tree today.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-terracotta text-white px-7 py-3.5 rounded-full font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-95"
            >
              Sign Up Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
